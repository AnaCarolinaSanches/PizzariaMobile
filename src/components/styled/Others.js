import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Container = styled.SafeAreaView` 
background-color: white; 
flex: 1;
justify-content: center;
align-items: center;
`
export const ImagemSVG = styled.View`
transform: ${props => props.display === 'none' ? `scale(0.7)` : `scale(1,1)`};
flex: 1;
margin-top: 25px;
`
export const InputArea = styled.ScrollView`
padding: 16px;
width: 100%;
margin-bottom: 48px;
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px; 
`

const MessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 16px;
margin-bottom: 16px;
`
const MessageButtonText = styled.Text`
font-size: 16px;
color: ${props => props.theme.color};
`
const MessageButtonTextBold = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.brand.rosa};
font-weight: bold;
margin-left: 8px;
`
export const StyledMessageButton = ({ text, textBold, onPress }) => {
    return (
        <MessageButton
            onPress={onPress}>
            <MessageButtonText>{text}</MessageButtonText>
            <MessageButtonTextBold>{textBold}</MessageButtonTextBold>
        </MessageButton>
    )
}

const CustomButton = styled.TouchableOpacity`
flex-direction: row;
height: 64px;
background-color: ${themes.padrao.colors.brand.vermelho};
margin-top: 16px;
border-radius: 12px;
box-shadow: 1px 1px 1px #c3c4c6;
justify-content: center;
align-items: center;
`
const CustomButtonText = styled.Text`
margin-left: 16px;
font-size: 18px;
color: ${themes.padrao.colors.neutral.neutral_100};
`

export const StyledButton = ({ icon, text, onPress }) => {
    return (
        <CustomButton
            onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={30} color={themes.padrao.colors.neutral.neutral_100} />
            <CustomButtonText>{text}</CustomButtonText>
        </CustomButton>
    )
}