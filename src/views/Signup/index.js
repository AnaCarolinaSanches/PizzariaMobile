import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'

import IconInput from '../../components/styled/IconInput'
import { Titulo, SubTitulo } from '../../components/styled/Text'
import { Container, InputArea, StyledButton, StyledMessageButton } from '../../components/styled/Others'
import Api from '../../resources/api/Api'

export default () => {
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')
    const [nomeField, setNomeField] = useState('')

    const handleMessageButtonClick = () => {
        //iremos enviá-lo para o SignIn, sem a possibilidade de voltar. (se voltar, fecha o App )
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Signin' },
                ],
            })
        )
    }

    const handleSignClick = async () => {
        if (nomeField && senhaField && emailField) {
            let res = await Api.signUp(nomeField, emailField, senhaField)
            if (res.acknowledged) { //Retorno do backend se inseriu
                Platform.OS === 'web' ? alert(`Usuário criado! Efetue o login`) : Alert.alert("✅Aviso",`Usuário cadastrado com sucesso! \nPor favor, efetue o Login`)
                
                navigation.navigate('SignIn') //Direcionamos para o login

            } else {
                Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
            }
        } else {
            Platform.OS === 'web' ? alert(`Preencha todos os campos`) : Alert.alert("‼️Erro", 'Preencha todos os campos')
        }

    }

    return (
        <Container>
            <Titulo>
                A melhor pizza da Cidade!
            </Titulo>
            <SubTitulo>
                Cadastre-se! É rapidinho e de graça!
            </SubTitulo>
            <InputArea>
                <IconInput
                    icon="human"
                    placeholder="Digite o seu nome completo"
                    value={nomeField}
                    onChangeText={t => setNomeField(t)}
                />
                <IconInput
                    icon="email"
                    placeholder="Digite o seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <IconInput
                    icon="lock"
                    placeholder="Digite a sua senha"
                    value={senhaField}
                    onChangeText={t => setSenhaField(t)}
                    password={true}
                />

                <StyledButton
                    onPress={handleSignClick}
                    icon="login"
                    text="Registrar-se" />

            </InputArea>
            <StyledMessageButton onPress={handleMessageButtonClick} text="Já é um usuário?" textBold="Faça o login" />

        </Container>
    )
}