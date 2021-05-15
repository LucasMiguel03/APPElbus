import styled from 'styled-components/native';
import color from '../../styles/color';
import fonts from '../../styles/fonts';

////////////////
//TELA DE GPS//
//////////////

//Container da pagina Inteira - SafeAreaView
export const Container = styled.SafeAreaView`
    background-color: ${color.Branco};
    height: 100%;
    justify-content:space-evenly;
`;

//Imagem da tela de GPS
export const GPSImage = styled.Image`
    /*width:248.11px;
    height:152px;*/
    width:320px;
    height:205px;
    align-self:center;
`;

export const ViewImage = styled.View`
    height: 50%;
    justify-content:center;
    
`;

export const ViewTexto = styled.View`
    height: 30%;
    justify-content:space-evenly;
    
`;

export const ViewButtom = styled.View`
    height: 20%;
    justify-content:center;
`

//Texto grande da tela de GPS
export const TextoGrandeGPS = styled.Text`
    font-size: 29px;
    line-height: 32px;
    text-align: center;
    font-family: ${fonts.SemiBold};
    color: ${color.CinzaEscuro};
    width: 321.62px;
    align-self:center;
`;

//Texto pequeno da tela de GPS
export const TextoPequenoGPS = styled.Text`
    font-size: 13px;
    text-align: center;
    line-height: 20px;
    width: 305px;
    font-family: ${fonts.Medium};
    align-self:center;
    color: ${color.Cinza}
`;

//Botão da tela de GPS - FUTURO COMPONENTE
export const ButtomGPS = styled.TouchableOpacity`
    width: 150px;
    height: 56px;
    border-radius: 28px;
    background-color: ${color.Azul};
    align-items: center;
    justify-content: center;
    align-self:center;
`;

//Texto do botão de entrar
export const TextoButtom = styled.Text`
    color: ${color.Branco};
    font-size: 18px;
    font-family: ${fonts.SemiBold};
`;