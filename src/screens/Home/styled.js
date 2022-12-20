import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.SafeAreaView`
    flex:1; 
    background-color:${color.CinzaSemiTransparente};
`;
// export const Header = styled.View`
//     background-color:${color.Azul};
//     width:100%;
//     height:106px;
//     justify-content:center;
//     align-items:center;
// `;
// export const HeaderContent = styled.View`
//     width:84%;
//     height:46%; 
//     background-color:${color.Branco};
//     border-radius:6.62px;
//     flex-direction:row;
//     justify-content:center;
//     align-items:center;
// `;
// export const Menu = styled.TouchableOpacity`
//     width:9.6%;
//     height:68%; 
//     justify-content:center;
//     align-items:center;  
// `;
// export const MenuIcon = styled.Image`
//     width:76%;
//     height:76%;  
// `;
// export const InputSearch = styled.TextInput`
//     width:64%;
//     height:120%;  
//     margin-left:13px;
//     color:${color.Preto};
// `;
// export const SearchButton = styled.TouchableOpacity`
//     width:10.5%;
//     height:72%;   
//     margin-left:12px;
// `;
// export const SearchIcon = styled.Image`  
//     width:93%;
//     height:93%;
// `;
{/* <ItineraryArea>
                        <Itinerary>
                            <>
                                <ItineraryLabel>
                                    <ItinerryPoint/>
                                    <ItineraryTitle>Origem</ItineraryTitle>
                                </ItineraryLabel>
                                <ItineraryValue>...</ItineraryValue>
                            </>
                        </Itinerary>
                    </ItineraryArea> */}

export const ItineraryArea = styled.View`
    position:absolute;
    left:10px;
    right:10px;
    top:50px;
    background-color:#fff;
    border-radius:5px;
    box-shadow:0px 0px 4px #999;
`;
export const Itinerary = styled.TouchableHighlight`
    padding:15px 20px;
    border-bottom-color:#999;
    border-bottom-width:1px;

`;
export const ItineraryLabel = styled.View`
    flex-direction:row;
    align-items:center;
`;
export const ItineraryPoint = styled.View`
    width:10px;
    height:10px;
    border-radius:5px;
    background-color:${props=>props.color};
`;
export const ItineraryTitle = styled.Text`
    margin-left:10px;
    color:#000;
`;
export const ItineraryValue = styled.Text`
`;
export const ItineraryPlaceholder = styled.Text`
    color:#aaa;
    font-size:16px;
`;