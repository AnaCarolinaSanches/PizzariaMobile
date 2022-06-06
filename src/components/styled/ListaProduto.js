import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'

export default({ data }) => {
    const navigation = useNavigation()
    const navegaDetalhe = () => {
        navigation.navigate('Produto',{produto:data})
    }

    return (
        <Area onPress={navegaDetalhe}>
          <Avatar source={{uri: `https://ui-avatars.com/api?background=FF0036&color=FFFFFF&name=${data.nome}`}} />
          <InfoArea>
              <Nome>{data.nome}</Nome>
              <Preco>{data.descricao}</Preco>
              <BotaoDetalhes>
                  <BotaoDetalhesText>Acesse os detalhes</BotaoDetalhesText>
              </BotaoDetalhes>
          </InfoArea>
        </Area>
    )
}

const Area = styled.TouchableOpacity`
background: ${themes.padrao.colors.neutral.neutral_100};
margin-top: 5px;
margin-bottom: 16px;
border-radius: 12px;
padding: 8px;
flex-direction: row
border: 2px solid #C3C4C6;
box-shadow: 2px 2px 2px #c3c4c6;
`
const Avatar = styled.Image`
width: 88px;
height: 88px;
border-radius: 12px;
`
const InfoArea = styled.View`
margin-left: 24px;
justify-content: space-between;
`
const Nome = styled.Text`
font-size: 18px;
font-weight: bold;
`
const Preco = styled.Text`
font-size: 14px;
margin-top: 4px;
`
const BotaoDetalhes = styled.View`
width: 140px;
height: 32px;
background: ${themes.padrao.colors.brand.vermelho};
border-radius: 5px;
justify-content: center;
align-items: center;
`
const BotaoDetalhesText = styled.Text`
font-size: 13px;
padding: 8px;
color: ${themes.padrao.colors.neutral.neutral_100}
font-weight: bold;
`