import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.SafeAreaView`
    height: 150px;
    background-color: #074DB6;
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    color: #FFF;
    font-size: 27px;
    padding-left: 20px;
`;

export const Menu = styled.View`
    background-color: #074DB6;
    flex-direction: row;
    padding-left: 20px;
    margin-bottom: 100px;
`;
export const MenuItem = styled.TouchableHighlight`
    padding: 20px;
    border-bottom-width:5px;
    border-bottom-color: ${props=>props.active?'#FFF':'#074DB6'};
`;

export const MenuItemText = styled.Text`
    color: #FFF;
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
    border: 1px solid #074DB6;
    padding: 0px 16px 0px 16px;
`;

export const InputLabel = styled.Text`
    width: 60px;
    height: 20px;
    background-color: #FFF;
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
    background-color: #074DB6;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 2px #999
    
`;

export const ActionButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    justify-content: center;
    align-items: center;
`;





