import React, {useState, useEffect} from 'react'
import {ScrollView, ActivityIndicator, Text} from 'react-native'
import {Container, Title} from './styles'
import Header from '../../components/styled/Header'
import Api from '../../resources/api/Api'
import themes from '../../themes'
import ListaProduto from '../../components/styled/ListaProduto'
import Fab from '../../components/styled/Fab'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Produtos(){
    const [loading, setLoading] = useState(false)
    const [listaProdutos, setListaProdutos] = useState([])
    const navigation = useNavigation()
    
    async function getProdutos(){
       setLoading(true)
       let res = await Api.getProdutos()
       res.ok === 0 
        ? alert(`Não foi possível obter a lista de produtos ${res.codeName}`)
        : setListaProdutos(res)
       setLoading(false)
    }
    //Carregando os dados na primeira vez
    useEffect(() => {
        getProdutos()
    },[])
    
    return (
        <>
        <Header headerTitle="Produtos" />
        <Container>
            <ScrollView>
            {loading &&
            <ActivityIndicator size="large" 
                color={themes.padrao.colors.brand.vermelho} />
            }
            {listaProdutos.length === 0 && !loading &&
            <Text>Ops! Não existe nenhum produto cadastrado.</Text>
            }
            <Text>Relação de Produtos &nbsp;
             <MaterialCommunityIcons name="cloud-refresh" size={16} color={themes.padrao.colors.brand.vermelho} onPress={() => getProdutos()} />
             </Text>
            {listaProdutos.map((produto, k) => (
                <ListaProduto key={k} data={produto} />
            ))}
            </ScrollView>
            <Fab title="Novo Produto"
                 onPress={()=> navigation.navigate('Produto')}
                 />
        </Container>
       </>
    )
}

