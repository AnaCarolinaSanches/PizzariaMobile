import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

const Container = styled.SafeAreaView`
    width: 100%;
    background-color: ${themes.padrao.colors.brand.vermelho};
    padding-top: 32px;         padding-bottom: 8px;
    height: 80px;              flex-direction: row;
    align-items: center;       justify-content: space-between;
`
const Title = styled.Text`

font-size: 34px;
color: white;
margin-left: 8px;
font-weight: bold;
`
const Header =({ headerTitle }) => {
    return(
        <Container>
            <Title>{headerTitle}</Title>
        </Container>
    )
}
export default Header