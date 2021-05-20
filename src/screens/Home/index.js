import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar, Text, SafeAreaView } from 'react-native';
import  MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../../services/config';
import {
    Container,
    Header,
    HeaderContent,
    MenuIcon,
    InputSearch
    } from './styled';

const Page = () => {

    const map = useRef();
    
    const [maploc, setMapLoc] = useState({
        center:{
            latitude:-22.4689647,
            longitude:-44.4554897
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

    return (
        <Container>
            <StatusBar barStyle="light-content"/>
            
                <Header>
                    <HeaderContent>
                        <MenuIcon source={require("../../assets/Images/Icons/IconMenu.png")}>

                        </MenuIcon>
                        <InputSearch/>
                    </HeaderContent>
                </Header>

                
            {/* <StatusBar barStyle="light-content"/> */}
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