/* eslint-disable prettier/prettier */
import React, {useRef, useState, useEffect} from 'react';
import {
  StatusBar,
  Image,
  Text,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';
import {MapsAPI} from '../../services/config.js';
import color from '../../assets/color.js';
import {
  Container,
  SearchArea,
  Area,
  Menu,
  MenuIcon,
  SearchInput,
  Result,
  ResultText,
  Scroll,
  ViewButton,
} from './styled';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {DrawerActions} from 'react-navigation-drawer';
import {StackActions, NavigationActions} from 'react-navigation';
// import io from 'socket.io-client/dist/socket.io';

import SearchBox from '../../components/Home/SearchBox';
import {HomeDrawer} from '../../navigators/HomeDrawer';
import BusStopIcon from '../../assets/images/icons/busStop.png';
import BusStopIconBlue from '../../assets/images/icons/busStopBlue.png';
import {ModalBusStopInfo} from '../../components/Home/ModalBusStopInfo/index.js';
import {ReactButton} from 'react-native-gesture-handler';
import {DATA_BUSLIST} from './BUSSTOP_DATA';
import BusList from '../../components/BusList';
import {ModalBusTime} from '../../components/Home/ModalBusTime';

// const socket = io('http://192.168.18.2:4000', {
//     // jsonp: false,'10.0.2.2'
//     transports: ['websocket'],
// });

// socket.on('connect', () => {
//     console.log('socketId: '+ socket.id);
// });

const Home = props => {
  let timer = 0;
  const map = useRef();

  // const [maploc, setMapLoc] = useState({
  //     center:{
  //         latitude:57.78825,
  //         longitude:-122.4322,
  //     },
  //     zoom:18,
  //     pitch:0,
  //     altitude:0,
  //     heading:0
  // });
  const [initialLoc, setInitialLoc] = useState({
    center: {
      latitude: -22.455098333333332,
      longitude: -44.43896500000001,
    },
    zoom: 16,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });
  const [initialDistance, setInitialDistance] = useState(0);

  const [finalLoc, setFinalLoc] = useState({
    center: {
      latitude: -22.4651616667,
      longitude: -44.4511033333,
    },
    zoom: 16,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });

  const [fromLoc, setFromLoc] = useState({
    center: {
      latitude: -22.456124,
      longitude: -44.441584,
    },
    zoom: 16,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });
  const [lastFromLoc, setLastFromLoc] = useState({});
  const [toLoc, setToLoc] = useState({});
  const [showDirections, setShowDirections] = useState(false);
  const [requestDistance, setRequestDistance] = useState(0);
  const [requestTime, setRequestTime] = useState(0);
  const [requestPrice, setRequestPrice] = useState(0);
  const [timeDuration, setTimeDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angleCar, setAngleCar] = useState(0);
  const [angleUser, setAngleUser] = useState(0);
  const [busLoc, setBusLoc] = useState({});

  const [busStopID, setBusStopID] = useState(0);
  const [busStopAddress, setBusStopAddress] = useState('');
  const [busStopImage, setBusStopImage] = useState('');
  const [busStopTime, setBusStopTime] = useState(0);
  const [showBusStopDirection, setShowBusStopDirection] = useState(false);
  const [busStopVisible, setBusStopVisible] = useState(false);
  const [directionsBus, setDirectionsBus] = useState(false);
  const [busStopBuses, setBusStopBuses] = useState([]);
  const [busListVisible, setBusListVisible] = useState(false);
  const [toBusStop, setToBusStop] = useState({
    center: {
      latitude: 57.78825,
      longitude: -122.4322,
    },
    zoom: 25,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });

  const [busTime, setBusTime] = useState(0);
  const [modalTimeVisible, setModalTimeVisible] = useState(false);
  const [routeName, setRouteName] = useState('');
  const [routeID, setRouteID] = useState(0);
  const [formattedTime, setFormattedTime] = useState('');
  const [busChose, setBusChose] = useState(false);
  const [busInfoTime, setBusInfoTime] = useState('');
  const [busDistance, setBusDistance] = useState(0);
  const [onBus, setOnBus] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  // socket.on('connect', () => {
  //     console.log('connected!');
  //   });

//   socket.on('busLocReenvite', busLocReceived => {
//     setBusLoc(busLocReceived);
//     // console.log(busLoc)
//   });

  useEffect(() => {
    Geocoder.init(MapsAPI, {language: 'pt-br'});
    getMyCurrentPosition();
  });

//   useEffect(() => {
//     if (fromLoc.center && toLoc.center) {
//       setShowDirections(true);
//     }
//   }, [toLoc]);

//   useEffect(() => {
//     if (fromLoc.center && toBusStop.center) {
//       setShowBusStopDirection(true);
//     }
//   }, [toBusStop]);

  // useEffect(()=>{
  //     props.results(0);
  //     setResults(results);
  // },[toLoc]);

  useEffect(() => {
    if (busLoc.center) {
      setDirectionsBus(true);
    }
  }, [busLoc]);

//   useEffect(() => {
//     if (searchText) {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(async () => {
//         // console.log("Efetuando a pesquisa");

//         const geo = await Geocoder.from(searchText);
//         // console.log("Resultado:", geo.results.length);

//         if (geo.results.length > 0) {
//           let tmResults = [];
//           for (let i in geo.results) {
//             tmResults.push({
//               address: geo.results[i].formatted_address,
//               latitude: geo.results[i].geometry.location.lat,
//               longitude: geo.results[i].geometry.location.lng,
//             });
//           }
//           setResults(tmResults);
//         } else {
//           setResults([]);
//         }
//       }, 1000);
//     }
//   }, [searchText]);

//   useEffect(async () => {
//     const geoBus = await Geocoder.from(
//       toBusStop.center.latitude,
//       toBusStop.center.longitude,
//     );

//     if (geoBus.results.length > 0) {
//       if (geoBus.results[0].address_components[0].short_name.length > 8) {
//         setBusStopAddress(geoBus.results[0].address_components[0].short_name);
//       } else {
//         setBusStopAddress(geoBus.results[0].formatted_address);
//       }
//     }
//   }, [toBusStop]);

  function calculateAngle(coordinates) {
    let startLat = coordinates[0].latitude;
    let startLng = coordinates[0].longitude;
    let endLat =
      coordinates[1]
        .latitude; /*--------------------- ERRRo nesta Linha-----------------------*/
    let endLng = coordinates[1].longitude;
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }
  const getMyCurrentPosition = props => {
    Geolocation.watchPosition(
      async info => {
        const geo = await Geocoder.from(
          info.coords.latitude,
          info.coords.longitude,
        );

        if (geo.results.length > 0) {
          const loc = {
            name: geo.results[0].formatted_address,
            center: {
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            },

            zoom: 18,
            pitch: 0,
            altitude: 0,
            heading: 0,
          };
          // setMapLoc(loc);
          setLastFromLoc(fromLoc);
          setFromLoc(loc);
        }
      },
      error => {
        () => alert('Erro em encontrar sua localização');
      },
      {
        enableHighAccuracy: true,
      },
    );
  };

  const handleDirectionsReady = r => {
    // console.log("FUNCIONALIDADES: ", r.coordinates);
    // setRequestDistance( r.distance );
    // setRequestTime( r.time );
    // setTimeDuration( r.duration );

    // if(!isReady){
    //     map.current.fitToCoordinates(r.coordinates, {
    //         edgePadding:{
    //             left:50,
    //             right:50,
    //             bottom:50,
    //             top:100
    //         }
    // });
    //   setIsReady(true)
    // }

    // console.log("Resultado: ", r);

    if (r.coordinates.length >= 2) {
      let angle = calculateAngle(r.coordinates);
      setAngleCar(angle);
      //   console.log('angle' + angle)
    }
  };

  const handleUserDirectionsReady = r => {
    // if(r.coordinates.length >= 2) {
    let angle = calculateAngle(r.coordinates);
    setAngleUser(angle);
    //   console.log('angle' + angle)
    // }
  };

  const searchBoxClick = toLoc => {
    const toLocation = {
      center: {
        latitude: toLoc.latitude,
        longitude: toLoc.longitude,
      },

      zoom: 16,
      pitch: 0,
      altitude: 0,
      heading: 0,
    };
    // console.log(toLocation);
    setToLoc(toLocation);
  };

  const handleBusStop = busStopInfo => {
    setBusStopID(busStopInfo.ID);

    setToBusStop({
      center: {
        latitude: busStopInfo.center.latitude,
        longitude: busStopInfo.center.longitude,
      },
      zoom: 18,
      pitch: 0,
      altitude: 0,
      heading: 0,
    });

    setBusStopImage(busStopInfo.image);

    setBusStopBuses(busStopInfo.buses);

    setBusStopVisible(true);
  };

  const showDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <MapView //CONFIGURAÇÕES GERAIS DO MAPA
        ref={map}
        style={{flex: 1}}
        provider="google"
        camera={onBus ? busLoc : fromLoc}>
        {fromLoc.center &&
          !toLoc.center &&
          !onBus && ( //íCONE DO USUÁRIO
            <MapView.Marker
              coordinate={fromLoc.center}
              anchor={{x: 0.5, y: 0.4}}
              flat={true}
              rotation={angleUser}>
              <Image
                source={require('../../assets/images/icons/userIcon.png')}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </MapView.Marker>
          )}

        {busLoc.center && busChose && (
          <Marker //Ícone do ónibus
            coordinate={busLoc.center}
            anchor={{x: 0.5, y: 0.4}}
            flat={true}
            rotation={angleCar}>
            <Image
              source={require('../../assets/images/icons/bus.png')}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </Marker>
        )}

        {showDirections && fromLoc.zoom != 25 && (
          <MapViewDirections //local atual do usuário até o local desejado
            origin={fromLoc.center}
            destination={toLoc.center}
            strokeWidth={5}
            strokeColor={color.Primaria}
            apikey={MapsAPI}
            onReady={handleDirectionsReady}
          />
        )}

        {showBusStopDirection && fromLoc.zoom != 25 && !onBus && (
          <MapViewDirections //Ponto inicial da linha até o ponto de ónibus
            origin={initialLoc.center}
            destination={toBusStop.center}
            strokeColor="transparent"
            apikey={MapsAPI}
            onReady={r => {
              setInitialDistance(r.distance * 1000);
            }}
          />
        )}

        {showBusStopDirection && fromLoc.zoom != 25 && onBus && (
          <MapViewDirections //Local atual do Ónibus até o ponto final da linha
            origin={toBusStop.center}
            destination={finalLoc.center}
            strokeColor={busChose ? color.Azul : 'transparent'}
            strokeWidth={4}
            mode="DRIVING"
            apikey={MapsAPI}
            onReady={r => {
              handleDirectionsReady(r);
            }}
          />
        )}

        {showBusStopDirection &&
          fromLoc.zoom != 25 && ( //Local atual do Usuário até o ponto de ónibus
            <MapViewDirections
              apikey={MapsAPI}
              origin={fromLoc.center}
              destination={toBusStop.center}
              // strokeWidth={5}
              strokeColor="transparent"
              // apikey={MapsAPI}
              onReady={r => {
                setBusStopTime(r.duration);
              }}
              mode="WALKING"
            />
          )}

        {directionsBus && toBusStop.zoom != 25 && !onBus && (
          <MapViewDirections //Local atual do Ónibus até o ponto selecionado
            apikey={MapsAPI}
            origin={busLoc.center}
            destination={toBusStop.center}
            strokeColor={busChose ? color.Azul : 'transparent'}
            strokeWidth={4}
            mode="DRIVING"
            onReady={r => {
              setBusDistance(r.distance * 1000);
              setBusTime(r.duration);
              handleDirectionsReady(r);
            }}
            // onReady={handleDirectionsReady}
          />
        )}

        {fromLoc.center &&
          lastFromLoc.center && ( //Local atual do Usuário até o local anterior do Usuário
            <MapViewDirections
              apikey={MapsAPI}
              origin={lastFromLoc.center}
              destination={fromLoc.center}
              strokeColor={'transparent'}
              // strokeWidth={4}
              mode="WALKING"
              onReady={r => handleUserDirectionsReady(r)}
              // onReady={handleDirectionsReady}
            />
          )}

        {DATA_BUSLIST.map(
          (
            busStop, //Gerador de pontos
          ) => (
            <Marker
              coordinate={busStop.center}
              anchor={{x: 0.4, y: 0.3}}
              flat={true}
              key={'' + busStop.ID}
              identifier={'' + busStop.ID}
              onPress={() => handleBusStop(busStop)}
              image={busStop.ID == busStopID ? BusStopIconBlue : BusStopIcon}
              // style={{height: 50, width: 50}}
              // stopPropagation={true}
            />
          ),
        )}
      </MapView>

      {/* <SearchBox dataClick={searchBoxClick} /> */}

      <SearchArea>
        <Area>
          <Menu onPress={showDrawer}>
            <MenuIcon
              source={require('../../assets/images/icons/menuIcon.png')}
            />
          </Menu>
          <SearchInput
            value={searchText}
            onChangeText={t => setSearchText(t)}
            placeholder="Encontre o seu destino"
            placeholderTextColor="#777"
          />
        </Area>

        {results.length > 0 && (
          <Scroll>
            {results.map(toLoc => {
              return (
                <Result
                  key={toLoc.address}
                  onPress={() => searchBoxClick(toLoc)}
                  underlayColor="#CCCCCC">
                  <ResultText>{toLoc.address}</ResultText>
                </Result>
              );
            })}
          </Scroll>
        )}
      </SearchArea>

      {busStopVisible && (
        <ModalBusStopInfo
          address={busStopAddress}
          time={busStopTime}
          visible={busStopVisible}
          visibleAction={setBusStopVisible}
          busListVisible={setBusListVisible}
          busStopID={setBusStopID}
          image={busStopImage}
        />
      )}

      {busListVisible && (
        <BusList
          busStop={busStopBuses}
          busTime={busTime}
          busListVisible={setBusListVisible}
          modalTimeVisible={setModalTimeVisible}
          routeIDAction={setRouteID}
          routeNameAction={setRouteName}
          formattedTime={setFormattedTime}
          busStopID={setBusStopID}
          busChose={setBusChose}
          busInfoTime={setBusInfoTime}
        />
      )}

      {modalTimeVisible && (
        <ModalBusTime
          visible={modalTimeVisible}
          visibleAction={setModalTimeVisible}
          routeID={routeID}
          routeName={routeName}
          time={formattedTime}
          busStopID={setBusStopID}
          busChose={setBusChose}
          busInfoTime={busInfoTime}
          busDistance={busDistance}
          initialDistance={initialDistance}
          onBusAction={setOnBus}
          onBus={onBus}
        />
      )}
    </Container>
  );
};

export default Home;
