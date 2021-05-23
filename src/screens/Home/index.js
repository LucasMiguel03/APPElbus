import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar, Text, SafeAreaView, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
import color from '../../styles/color';
import { SearchBar } from 'react-native-screens';

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
            <StatusBar backgroundColor={color.Azul} barStyle="light-content"/>
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