import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.View`
    flex:1; 
    background-color:${color.CinzaSemiTransparente};
`;
export const Header = styled.View`
    justify-content:center;
    align-items:center;
    height:8%;
`;
export const HeaderContent = styled.View`
    width:341px;
    height:41.57px; 
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
    width:24px;
    height:24px;  
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
    justify-content:center;
    align-items:center; 
`;
export const SearchIcon = styled.Image`  
    width:24px;
    height:24px;
`;
