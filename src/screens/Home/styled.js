import styled,{ css } from 'styled-components/native';
import color from '../../assets/color.js';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
`;
export const SearchArea = styled.View`
    position: absolute;
    /* left: 10px;
    right: 10px; */
    /* justify-content:center; */
    align-items:center;
    height:74%;
    width:100%;

    ${Platform.select({
        ios:css`
        margin-top:25px;
        background-color:#0000;
        `,

        android:css`
        margin-top:18px;
        `
    })}
`;
export const Area = styled.View`
    width: 90%;
    height:42px;

    border-color: ${color.CinzaSombra}; 

    /* elevation: 5; */
    flex-direction:row; 
    /* justify-content:center; */
    /* align-items:center;  */
`;
export const Menu = styled.TouchableHighlight`
    height:42px;
    width:15%;

    justify-content:center;
    align-items:center;
    background-color:${color.Fundo1};   

    border-top-left-radius: 21px;
    border-bottom-left-radius: 21px;
`;
export const MenuIcon = styled.Image`
    height:24px;
    width:24px;
`;
export const SearchInput = styled.TextInput`
    height:42px;
    width:85%;

    background-color: ${color.Fundo1};
    color:${color.Secundaria};
    font-size:16px;
    
    /* padding-left:8px;
    padding-right:8px; */
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;
`;
export const Result = styled.TouchableHighlight`
    padding:2px;
`;

export const ResultText = styled.Text`
   color:${color.PretoBusaqui};
   font-size:16px;
   margin-left:8px;
   margin-right:8px;
`;

export const Scroll = styled.ScrollView`
    width:92%;
    margin-bottom:10px;
    background-color:${color.Fundo1};                        
`;

export const ViewButton = styled.View`
    width:120px;
    height:40px;
    /* position:absolute; */
    background-color:#cfc;
    justify-content:flex-end;

`;