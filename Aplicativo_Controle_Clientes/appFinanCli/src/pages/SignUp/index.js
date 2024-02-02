import React from "react";
import { Text, View } from 'react-native'

import {
    Container,
    Input,
    AreaBtn,
    TextBtn
} from '../styles/stylesLogin'

export default function SignUp() {
    return (
        <Container>
            <Input
            placeholder="Nome"
            />
            <Input 
            placeholder="Email"
            />
            <Input
            placeholder="Senha"
            />
            <AreaBtn>
                <TextBtn>Cadastrar</TextBtn>
            </AreaBtn>
        </Container>
    );
}