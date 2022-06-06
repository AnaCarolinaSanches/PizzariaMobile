import React from 'react'
import {Container, Title} from './styles'
import Pizza from '../../components/svg/Pizza'
import Header from '../../components/styled/Header'

export default function Home(){
    return (
        <>
        <Header headerTitle="PIZZARIA VÓ MARIA" />
        <Container>
        <Pizza />
            <Title>Início</Title>
        </Container>
        </>
    )
}