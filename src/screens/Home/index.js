import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar, Text, SafeAreaView, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import  MapView from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import Geocoder from 'react-native-geocoding';
// import { MapsAPI } from '../../services/config';
// import {
//     Container,
//     Header,
//     HeaderContent,
//     Menu,
//     MenuIcon,
//     InputSearch,
//     SearchButton,
//     SearchIcon
//     } from './styled';
// import color from '../../styles/color';
// import { SearchBar } from 'react-native-screens';
import MapView from 'react-native-maps';
import {
    Container,
    ItineraryArea,
    Itinerary,
    ItineraryLabel,
    ItineraryPoint,
    ItineraryTitle,
    ItineraryValue,
    ItineraryPlaceholder

} from './styled';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../../services/config.js';
import MapViewDirections from 'react-native-maps-directions';
import AddressModal from '../../components/AddressModal';

// const Page = () => {

//     const map = useRef();
    
//     const [maploc, setMapLoc] = useState({
//         center:{
//             latitude:-22.4689647,
//             longitude:-44.4554897
//         },
//         zoom:16,
//         pitch:0,
//         altitude:0,
//         heading:0

//     });

//     useEffect(()=>{
//         Geocoder.init(MapsAPI, {language:'pt-br'});
//         getMyCurrentPosition();
//     }, []);

//     const getMyCurrentPosition = () => {
//         Geolocation.getCurrentPosition((info)=>{
//             console.log("COORDENADAS: ", info.coords);
//         },(error)=>{

//         });
//     } 

//     const [Search,setSearch] = useState('');

    // return (
//         <Container>
//             <StatusBar backgroundColor={color.Azul} barStyle="light-content"/>
//                 <Header>
//                     <HeaderContent>
//                         <Menu onPress={()=>{}}>
//                             <MenuIcon source={require("../../assets/Images/Icons/MenuIcon.png")} resizeMode='contain'/>   
//                         </Menu>
//                             <InputSearch 
//                                 value={Search} 
//                                 onChangeText={t=>setSearch(t)} 
//                                 placeholder="Para onde você vai?" 
//                                 placeholderTextColor={color.Cinza}/>
//                                 <SearchButton onPress={()=>{}}>
//                                     <SearchIcon source={require("../../assets/Images/Icons/SearchIcon.png")} />
//                                 </SearchButton>   
//                     </HeaderContent>
//                 </Header>        
//                 <MapView 
//                     ref={map}
//                     style={{flex:1}}
//                     provider="google"
//                     camera={maploc}
//                 ></MapView>   
//         </Container>
//     );
// }

    
    
const Page = (props) => {

    const map = useRef();

    const [mapLoc, setMapLoc] = useState({
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
    const [toLoc, setToLoc] = useState({})
    const [showDirection, setShowDirection] = useState(false);

    const [modalTitle, setModalTitle] = useState();
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(()=>{
        Geocoder.init(MapsAPI,{language:'pt-br'});
        getMyCurrentPosition();
    },[]);

    useEffect(()=>{
        if(fromLoc.center && toLoc.center) {
            setShowDirection(true);
        }
    },[toLoc.center]);

    useEffect(() => {
        if(fromLoc.center){
            setMapLoc(fromLoc)
        }
    },[])
    
    const getMyCurrentPosition = () => {
        Geolocation.watchPosition(async(info)=>{

            const geo = await Geocoder.from(info.coords.latitude,info.coords.longitude);

            if(geo.results.length > 0) {
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
            }, (error)=>{

            
            
        });
    }
       
    const handleFrom = () => {
        setModalTitle('Escolha sua origem');
        setModalVisible(true);

    }

    const handleTo = async () => {
        const geo = await Geocoder.from('Angra dos Reis');
            if(geo.results.length > 0) {
                const loc = {
                    name:geo.results[0].formatted_address,
                    center:{
                        latitude:geo.results[0].geometry.location.lat,
                        longitude:geo.results[0].geometry.location.lng
                    },
                        zoom:16,
                        pitch:0,
                        altitude:0,
                        heading:0
                    };
                
                    setToLoc(loc);
            }
    }

    const handleDirectionsReady = (result) => {
        console.log("Result:", result)
            map.current.fitToCoordinates(result.coordinates, {
                edgePadding:{
                    left:50,
                    right:50,
                    top:660,
                    bottom:60
                }
            })
    }



        return(
        <Container> 
            <StatusBar barStyle="dark-content"/>
                <AddressModal
                    title={modalTitle}
                    visible={modalVisible}
                    visibleActions={setModalVisible}
                />
                    <MapView
                        ref={map}
                        style={{flex:1}}
                        provider="google"
                        camera={mapLoc}
                    >
                        {fromLoc.center &&
                            <MapView.Marker 
                                pinColor="black"
                                coordinate={fromLoc.center}
                            />
                        }
                        {toLoc.center &&
                            <MapView.Marker pinColor="#074DB6" coordinate={toLoc.center} />
                        }
                        {showDirection &&
                            <MapViewDirections
                                origin={fromLoc.center} 
                                destination={toLoc.center} 
                                strokeWidth={5}
                                strokeColor="#2C3A4B"
                                apikey={MapsAPI}
                                onReady={handleDirectionsReady}
                            />
                        }

                    </MapView>
                    <ItineraryArea>
                        <Itinerary onPress={handleFrom} underlayColor="#aaa">
                            <>
                                <ItineraryLabel>
                                    <ItineraryPoint color="#ffaaaa"/>
                                    <ItineraryTitle>Origem</ItineraryTitle>
                                </ItineraryLabel>
                                {fromLoc.name &&
                                <ItineraryValue>{fromLoc.name}</ItineraryValue>
                                }
                                {!fromLoc.name &&
                                <ItineraryPlaceholder>Escolha um local de origem</ItineraryPlaceholder>
                                }
                            </>
                        </Itinerary>
                        <Itinerary onPress={handleTo} underlayColor="#aaa">
                            <>
                                <ItineraryLabel>
                                    <ItineraryPoint color="#affffa"/>
                                    <ItineraryTitle>Destino</ItineraryTitle>
                                </ItineraryLabel>
                                {toLoc.name &&
                                <ItineraryValue>{toLoc.name}</ItineraryValue>
                                }
                                {!toLoc.name &&
                                <ItineraryPlaceholder>Sua Localização</ItineraryPlaceholder>
                                }
                            </>
                        </Itinerary>
                    </ItineraryArea>
            </Container>

    );

}                          

export default Page;
