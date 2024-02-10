import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color: #aa1955;
`;
export const ViewHeader = styled.View`
width: 100%;
height: 60px;
justify-content: center;
align-items: center;
border-bottom-width: 0.5px;
border-bottom-color: #FFF;
`;

export const Header = styled.Text`
color: #FFF;
font-size: 25px;
font-weight: bold;
`;

export const Lista = styled.FlatList`
margin-top: 10px;
`;

export const ViewProduto = styled.View`
border-bottom-width: 0.5px;
border-color: #FFF;
margin-bottom: 5px;
padding: 5px;
flex-direction: row;
justify-content: space-between;
`;

export const TextProduto = styled.Text`
color: #FFF;
font-size: 20px;
font-style: italic;
`;

export const ViewRodape = styled.View`
height: 80px;
border-top-width: 1px;
border-color: #FFF;
align-items: center;
justify-content: center;
`;

export const AreaBtn = styled.TouchableOpacity`
background-color: #FFF;
width: 200px;
height: 50px;
justify-content: center;
align-items: center;
border-radius: 8px;
`;

export const TextBtn = styled.Text`
color: #aa1955;
font-size: 18px;
font-weight: bold;
`;