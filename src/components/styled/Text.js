import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Titulo = styled.Text`
font-size: 32px;
color: ${themes.padrao.colors.brand.rosa};
margin-top: 16px;
margin-bottom: 16px;
font-weight: bold;
margin-left: auto;
margin-right: auto;
`

export const SubTitulo = styled.Text`
font-size: 16px;
padding-left: 8px;
padding-right: 8px;
color: ${props => props.theme.color};
margin-top: 8px;
margin-bottom: 8px;
`

const LinkLegenda = styled.TouchableOpacity`
flex-direction: row;
height: 32px;
margin-top: 8px;
border-radius: 0px;
justify-content: center;
align-items: center;
`
export const Legenda = styled.Text`
margin-left: 16px;
font-size: 14px;
color: ${themes.padrao.colors.brand.rosa};
`

export const StyledLinkLegenda = ({ text, onPress }) => {
    return (
        <LinkLegenda
            onPress={onPress}>
            <Legenda>{text}</Legenda>
        </LinkLegenda>
    )
}