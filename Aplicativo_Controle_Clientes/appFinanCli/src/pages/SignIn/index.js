import React, { useState } from "react";

import {
    AreaBtn,
    AreaCad,
    Container,
    Input,
    TextBtn,
    TextCad,

} from '../styles/stylesLogin'

import { useNavigation } from '@react-navigation/native';

export default function Signin() {
    const navigtaion = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login() {
        alert("Login efetuado!")
    }

    return (
        <Container>
            <Input
                placeholder="Email"
            />
            <Input
                placeholder="*******"
                secureTextEntry={true}
            />
            <AreaBtn onPress={() => Login()}>
                <TextBtn>Acessar</TextBtn>
            </AreaBtn>
            <AreaCad onPress={() => navigtaion.navigate('SignUp')}>
                <TextCad>Não possui conta? Cadastrar.</TextCad>
            </AreaCad>
        </Container>
    );
}