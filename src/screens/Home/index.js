import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar } from 'react-native';
import  MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';
import { MapsAPI } from '../../services/config';
import color from '../../assets/color.js';
import { 
    Container,
    IntineraryArea,
    IntineraryItem,
    IntineraryLabel,
    IntineraryPoint,
    IntineraryTitle,
    IntineraryValue,
    IntineraryPlaceHolder
    } from './styled';
import { SearchBar } from 'react-native-screens';
import {HomeDrawer} from '../../navigators/HomeDrawer'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';


const Page = (props) => {
    const map = useRef();
    const [maploc, setMapLoc] = useState({
        center:{
            latitude:-22.7869589,
            longitude:-45.1800201
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
            Geolocation.getCurrentPosition(async (info)=>{
                console.log("COORDENADAS: ",info.coords);
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
            >
            
            </MapView>  
        </Container>
    );
}

export default Page;
