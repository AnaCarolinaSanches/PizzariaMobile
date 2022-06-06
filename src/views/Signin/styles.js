import styled from 'styled-components/native'
import themes from '../../themes'


export const CirculoLaranja = styled.View`
    height:250px; 
    width:250px;
    border-radius:250px;
    background-color:${themes.padrao.colors.brand.vermelho};
    position:absolute;
    top: -125px;
    right: -16px;
`
export const CirculoAmarelo = styled.View`
    height:200px; 
    width:200px;
    border-radius:200px;
    background-color:${themes.padrao.colors.brand.amarelo};
    position:absolute;
    top: -100px;
    left: -5px;
`

export const CirculoAzul = styled.View`
    height:200px; 
    width:200px;
    border-radius:200px;
    background-color:${themes.padrao.colors.brand.rosa};
    position:absolute;
    top: -50px;
    left: -100px;
`