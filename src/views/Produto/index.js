import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, ActivityIndicator, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'

export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.produto :
        {
            nome: '', 
            descricao: '', 
            preco: '', 
            tipo: '',
            tamanho: ''
        }

    const [produto, setProduto] = useState(registroInicial)

    const salvarProduto = async (dadosProduto) => {
        let salvar = dadosProduto.hasOwnProperty('_id') ? await Api.alteraProduto(dadosProduto) : await Api.incluiProduto(dadosProduto)
        if(salvar.hasOwnProperty('errors')){
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if(salvar.hasOwnProperty('acknowledged')){
            Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
            navigation.navigate('Produtos')
        }
    }

    async function confirmaExclusaoRegistro(idProduto){
        if(Platform.OS !=='web'){
            try{
                Alert.alert('Atenção!', 'Deseja mesmo excluir?',[
                    {text:'Não', style:'cancel'},
                    {text:'Sim', onPress: async()=>{apagaProduto(idProduto)}}
                ])
            }catch(response){
                Alert.alert(response.data.error)
            }
        }
        if(confirm('Atenção!\nDeseja mesmo excluir?')){
            apagaProduto(idProduto)
        }
    }

    const apagaProduto = async (idProduto) => {
        let apagar = await Api.removeProduto(idProduto)
        if(apagar.hasOwnProperty('errors')){
            Platform.OS === 'web' ? alert(`!!Erro: ${apagar.errors[0].msg}`) : Alert.alert('!!Erro', apagar.errors[0].msg)
     }	else if (apagar.hasOwnProperty('acknowledged')){
            Platform.OS === 'web' ? alert('✅Tudo OK: Registro Removido!') : Alert.alert('✅Tudo OK','Registro Removido')
                navigation.navigate('Produtos')
     } 
    }

    return (
        <>
            <Header headerTitle="Pizzas" />
            <View>
                <Text style={styles.title}>Cadastro de Pizzas</Text>
                
                <Text style={styles.label}>Sabor</Text>
                <TextInput
                    name='nome'
                    style={styles.input}
                    onChangeText={(text) => setProduto({ ...produto, nome: text })}
                    value={produto.nome}
                    keyboardType='default'
                    placeholder='Sabor pizza'
                    maxLength={100}
                />

                <Text style={styles.label}>Tamanho </Text>
                <TextInput
                    name="tamanho"
                    style={styles.input}
                    onChangeText={(text) => setProduto({ ...produto, tamanho: text })}
                    value={produto.tamanho}
                    keyboardType="default"
                    placeholder='Grande / Médio / Broto'                    
                /> 

                <Text style={styles.label}>Expessura da Massa</Text>
                <TextInput
                    name='descricao'
                    style={styles.input}
                    onChangeText={(text) => setProduto({ ...produto, descricao: text })}
                    value={produto.descricao}
                    keyboardType='default'
                    placeholder='Massa Fina / Massa Tradicional / Massa Grossa'
                    maxLength={100}
                />
               
                <Text style={styles.label}>Descrição do Produto</Text>
                <TextInput
                    name='tipo'
                    style={styles.input}
                    onChangeText={(text) => setProduto({ ...produto, tipo: text })}
                    value={produto.tipo}
                    keyboardType='default'
                    placeholder='Ingredientes etc..'                                        
                />
               
                 <Text style={styles.label}>Preço</Text>
                <TextInput
                    name='preco'
                    style={styles.input}
                    onChangeText={(text) => setProduto({ ...produto, preco: text })}
                    value={produto.preco}
                    keyboardType='default'
                    placeholder='Preço'                  
                />  

                       
                <Button
                    onPress={() => salvarProduto(produto)}
                    title='Salvar o Registro'
                    color={themes.padrao.colors.brand.verde}
                    accessibilityLabel='Salvar os dados'
                />
                 <Button
                    onPress={() => navigation.navigate('Produtos')}
                    title='Cancelar'
                    style={styles.button}
                    color={themes.padrao.colors.brand.vermelho_cancelar}
                    accessibilityLabel='Cancelar'
                />
                <Button
                    onPress={() => confirmaExclusaoRegistro(produto._id)}
                    title='Apagar'
                    style={styles.button}
                    color={themes.padrao.colors.amarelo
                    }
                    accessibilityLabel='Apagar'
                />
                  

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40, margin: 8, borderWidth: 1, padding: 8,
        borderRadius: 10
    },
    
    label: {marginLeft: 8, marginTop: 8, marginBottom: 4, fontSize: 14, fontWeight: 'bold'
    },

    title: {fontSize: 20, marginLeft: 8, marginTop: 8, marginBottom: 4, fontWeight: 'bold'
    }
})