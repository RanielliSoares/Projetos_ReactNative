import React from "react";
import { Text, View } from "react-native";

import {

    TextProduto,
    ViewProduto

} from '../styles/stylesProduto'

export default function ProdutosLista({data}){
    return(
        <ViewProduto>
            <TextProduto>{data.nome}</TextProduto>
            <TextProduto>R$ {data.preco.toFixed(2)}</TextProduto>
        </ViewProduto>
    );
}