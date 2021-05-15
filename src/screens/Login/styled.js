import styled from 'styled-components/native';
import color from '../../styles/color';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${color.Branco};
`;

export const Header = styled.SafeAreaView`
    height: 150px;
    background-color: ${color.Azul};
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    color: ${color.Branco};
    font-size: 27px;
    padding-left: 20px;
`;

export const Menu = styled.View`
    background-color: ${color.Azul};
    flex-direction: row;
    padding-left: 20px;
    margin-bottom: 100px;
`;
export const MenuItem = styled.TouchableHighlight`
    padding: 20px;
    border-bottom-width:5px;
    border-bottom-color: ${props=>props.active? color.Branco : color.Azul};
`;

export const MenuItemText = styled.Text`
    color: ${color.Branco};
    font-size: 16px;
`;
export const Input = styled.TextInput`
    width: 350px;
    height: 48px;
    margin-left: 20px;
    margin-top: -10px;
    margin-right: 19.43px;
    margin-bottom: 41px;    
    border-radius: 8px;
    border: 1px solid ${color.Azul};
    padding: 0px 16px 0px 16px;
`;

export const InputLabel = styled.Text`
    width: 60px;
    height: 20px;
    background-color: ${color.Branco};
    text-align: center;
    margin-left: 40px;
    z-index: 1;
`;

export const ActionButton = styled.TouchableHighlight`
    width: 153px;
    height: 56px;
    margin-left: 120px;
    margin-top: 10px;
    margin-right: 100px;
    background-color: ${color.Azul};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 2px ${color.Branco}
    
`;

export const ActionButtonText = styled.Text`
    color: ${color.Branco};
    font-size: 16px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color: ${color.Preto};
    z-index: 1;
    justify-content: center;
    align-items: center;
`;





