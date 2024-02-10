import React, { useContext, useState } from "react";
import { Text, View, FlatList } from 'react-native';
import ProdutosLista from "../ProdutosLista";

import {
    Container,
    ViewHeader,
    Header,
    Lista,
    AreaBtn,
    ViewRodape,
    TextBtn
} from '../styles/stylesProduto'

export default function Produtos() {

    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Creme Eudora 200ml', grupo: 'Cosméticos', preco: 39.90 },
        { id: 2, nome: 'Shampoo Eudora 200ml', grupo: 'Cosméticos', preco: 29.90 },
        { id: 3, nome: 'Perfume Eudora 190ml', grupo: 'Cosméticos', preco: 47.90 },
        { id: 4, nome: 'Creme Mãos Eudora 200ml', grupo: 'Cosméticos', preco: 32.70 },
        { id: 5, nome: 'Creme Pés 200ml', grupo: 'Cosméticos', preco: 12.90 },
        { id: 6, nome: 'Mascara Eudora 200ml', grupo: 'Cosméticos', preco: 26.80 },
        { id: 7, nome: 'Creme Eudora 200ml', grupo: 'Cosméticos', preco: 39.90 },
        { id: 8, nome: 'Shampoo Eudora 200ml', grupo: 'Cosméticos', preco: 29.90 },
        { id: 9, nome: 'Perfume Eudora 190ml', grupo: 'Cosméticos', preco: 47.90 },
        { id: 10, nome: 'Creme Mãos Eudora 200ml', grupo: 'Cosméticos', preco: 32.70 },
        { id: 11, nome: 'Creme Pés 200ml', grupo: 'Cosméticos', preco: 12.90 },
        { id: 12, nome: 'Mascara Eudora 200ml', grupo: 'Cosméticos', preco: 26.80 },
        { id: 13, nome: 'Creme Eudora 200ml', grupo: 'Cosméticos', preco: 39.90 },
        { id: 14, nome: 'Shampoo Eudora 200ml', grupo: 'Cosméticos', preco: 29.90 },
        { id: 15, nome: 'Perfume Eudora 190ml', grupo: 'Cosméticos', preco: 47.90 },
        { id: 16, nome: 'Creme Mãos Eudora 200ml', grupo: 'Cosméticos', preco: 32.70 },
        { id: 17, nome: 'Creme Pés 200ml', grupo: 'Cosméticos', preco: 12.90 },
        { id: 18, nome: 'Mascara Eudora 200ml', grupo: 'Cosméticos', preco: 26.80 },

    ])
    return (
        <Container>
            <ViewHeader>
                <Header>Produtos Cadastrados</Header>
            </ViewHeader>

            <Lista
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProdutosLista data={item} />
                )}
            ></Lista>
            <ViewRodape>
                <AreaBtn>
                    <TextBtn>Novo Produto</TextBtn>
                </AreaBtn>
            </ViewRodape>
        </Container>

    );
}