import styled from 'styled-components/native';
import color from '../../styles/color';

export const Container = styled.SafeAreaView`
    flex:1; 
    background-color:${color.CinzaSemiTransparente};
`;
export const Header = styled.View`
    background-color:${color.Azul};
    width:100%;
    height:106px;
    justify-content:center;
    align-items:center;
`;
export const HeaderContent = styled.View`
    width:84%;
    height:46%; 
    background-color:${color.Branco};
    border-radius:6.62px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
export const Menu = styled.TouchableOpacity`
    width:9.6%;
    height:68%; 
    justify-content:center;
    align-items:center;  
`;
export const MenuIcon = styled.Image`
    width:76%;
    height:76%;  
`;
export const InputSearch = styled.TextInput`
    width:64%;
    height:120%;  
    margin-left:13px;
    color:${color.Preto};
`;
export const SearchButton = styled.TouchableOpacity`
    width:10.5%;
    height:72%;   
    margin-left:12px;
`;
export const SearchIcon = styled.Image`  
    width:93%;
    height:93%;
`;
