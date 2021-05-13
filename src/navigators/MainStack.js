import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//ÁREA DE IMPORTAÇÀO DAS TELAS
import Preload from '../screens/Preload';
import Login from '../screens/Login';
//import HomeStack from './HomeStack';

//ÁREA DE SEQUÊNCIA DE "CHAMADA" DAS TELAS
export default createAppContainer(createStackNavigator({
    Preload,
    Login,
    //HomeStack
},{
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        headerShown: false
    }
}));