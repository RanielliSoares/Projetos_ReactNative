import React,{useState, useContext} from "react";

import {
    Container,
    Header,
    ViewHeader,

} from '../styles/stylesHome';

import { AuthContext } from "../../contexts/auth";

export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <ViewHeader>
                <Header>Olá {user}</Header>
                
            </ViewHeader>

            <Header>Esta tela será a Home do nosso projeto</Header>
        </Container>
    );
}