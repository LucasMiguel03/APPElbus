import React, { useRef, useState, useEffect  } from 'react';
import  MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../../services/config';
import {
    Container,
    Header,
    HeaderContent,
    Menu,
    MenuIcon,
    InputSearch,
    SearchButton,
    SearchIcon
    } from './styled';
import color from '../../assets/color';
import { SearchBar } from 'react-native-screens';
import {HomeDrawer} from '../../navigators/HomeDrawer'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const Page = () => {

    const map = useRef();
    
    const [maploc, setMapLoc] = useState({
        center:{
            latitude:37.78825,
            longitude:-122.4324
        },
        zoom:16,
        pitch:0,
        altitude:0,
        heading:0
    });

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyCurrentPosition();
    }, []);

    const getMyCurrentPosition = () => {
        Geolocation.getCurrentPosition((info)=>{
            console.log("COORDENADAS: ", info.coords);
        },(error)=>{

        });
    } 

    const [Search,setSearch] = useState('');

    return (
        <Container>
                <Header>
                    <HeaderContent>
                        <Menu onPress={()=>('HomeDrawer')}>
                            <MenuIcon source={require("../../assets/Images/Icons/menuIcon.png")} resizeMode='contain'/>   
                        </Menu>
                            <InputSearch 
                                value={Search} 
                                onChangeText={t=>setSearch(t)} 
                                placeholder="Para onde você vai?" 
                                placeholderTextColor={color.Cinza}/>
                            <SearchButton onPress={()=>{}}>
                                    <SearchIcon source={require("../../assets/Images/Icons/searchIcon.png")}/>
                            </SearchButton>   
                    </HeaderContent>
                </Header>        
                <MapView 
                    ref={map}
                    style={{flex:1}}
                    provider="google"
                    camera={maploc}
                ></MapView>   
        </Container>
    );
}

export default Page;