import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar, Text, SafeAreaView } from 'react-native';
import  MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../../services/config';
import {
    Container
} from './styled';

const Page = () => {

    const map = useRef();
    
    const [maploc, setMapLoc] = useState({
        center:{
            latitude:-22.7870,
            longitude:-45.1778
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