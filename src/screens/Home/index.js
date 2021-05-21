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
            latitude:37.78825,
            longitude:-122.4324
        },
        zoom:16,
        pitch:0,
        altitude:0,
        heading:0

    });
    const [fromLoc, setFromLoc] = useState({});
    const [toLoc, setToLoc] = useState({});

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyCurrentPosition();

    }, []);

    const getMyCurrentPosition = () => {
        Geolocation.getCurrentPosition(async (info)=>{
            const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);

            if(geo.results.length > 0){
                const loc = {
                    name:geo.results[0].formatted_address,
                    center:{
                        latitude:info.coords.latitude,
                        longitude:info.coords.longitude
                    },
                    zoom:16,
                    pitch:0,
                    altitude:0,
                    heading:0
                };
                setMapLoc(loc);
                setFromLoc(loc);
            }
            console.log(geo.results[0]);    

        },(error)=>{

        });
    }

    return (
        <Container>
            <Header>

            </Header>
            <StatusBar barStyle="dark-content"/>
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