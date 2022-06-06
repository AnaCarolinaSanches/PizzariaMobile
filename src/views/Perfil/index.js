import React from 'react'
import {Button} from 'react-native'
import {Container, Title} from './styles'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'
import { useNavigation } from '@react-navigation/native'

export default function Perfil(){
    const navigation = useNavigation()
    const sair = async() => {
        await Api.logout()
        navigation.navigate('Signin')
    }
    return (
        <>
        <Header headerTitle="PIZZARIA" />
        <Container>
            <Button
                onPress={sair}
                title="SAIR DO SISTEMA"
                color={themes.padrao.colors.brand.vermelho}
                accessibilityLabel="Sair do sistema"
                />            
        </Container>
       </>
    )
}