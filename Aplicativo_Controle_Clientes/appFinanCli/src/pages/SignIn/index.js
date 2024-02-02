import React, { useState, useContext } from "react";

import {
    AreaBtn,
    AreaCad,
    Container,
    Input,
    TextBtn,
    TextCad,
    Logo

} from '../styles/stylesLogin'

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";


export default function Signin() {
    const navigtaion = useNavigation();
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login() {
        if (email === '' || password === '') {
            alert('Por favor digitar o email e senha cadastrados!')
            return;
        }
        signIn(email, password);
        setEmail('');
        setPassword('')
    }

    return (
        <Container>
            <Logo
                source={require('../../img/Logo1.png')}
            />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={(text) => { setEmail(text) }}
            />
            <Input
                placeholder="*******"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => { setPassword(text) }}
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