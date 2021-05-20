import styled from 'styled-components/native';
import color from '../../styles/color'

export const Container = styled.SafeAreaView`
    flex:1; 
    /* background-color:#FF0000; */
`;
export const Header = styled.View`
    background-color:${color.Azul};
    width:100%;
    height:72px;
`;
export const HeaderContent = styled.View`
    width:311px;
    height:41px; 
    background-color:white;
    margin-left:31px;
    margin-top:15px;
    border-radius:6.62px;
    flex-direction:row;
`;
export const MenuIcon = styled.TouchableOpacity`
    width:16px;
    height:14.61px;
    margin-top:13px;
    margin-left:11px;
    background-color: red;
`;
export const InputSearch = styled.TextInput`
    width:225.08px;
    height:14.89px; 
    background-color:pink; 
    margin-top:13px;  
    margin-left:42px;
    margin-right:43.92px;
    margin-bottom:13.11px;
`;

