import React, { useContext, useState } from "react";
import { Text, View } from 'react-native'

import {
    Container,
    Input,
    AreaBtn,
    TextBtn
} from '../styles/stylesLogin'

import { AuthContext } from "../../contexts/auth";



export default function SignUp() {

    const { signUp } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignUp() {
        signUp(nome, email, password);
    }


    return (
        <Container>
            <Input
                placeholder="Nome"
                onChangeText={(text) => { setNome(text) }}
                value={nome}
            />
            <Input
                placeholder="Email"
                onChangeText={(text) => { setEmail(text) }}
                value={email}
            />
            <Input
                placeholder="Senha"
                onChangeText={(text) => { setPassword(text) }}
                value={password}
            />
            <AreaBtn onPress={() => handleSignUp()}>
                <TextBtn>Cadastrar</TextBtn>
            </AreaBtn>
        </Container>
    );
}