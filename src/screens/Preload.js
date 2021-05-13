import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';


const Preload = (props) => {
    
        //CONDIÇÃO PARA INDICAR A QUAL TELA IRÁ IR
    if(!props.token) {
        //MANDAR PARA TELA DE LOGIN
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Login'})
            ]
        }));
    } else {
        //MANDAR PARA TELA DE HOME
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeStack'})
            ]
        }));
    }
    
    return null;
}



 const mapStateToProps = (state) => {
     return{
         token:state.userReducer.token
     };
 }

 export default connect(mapStateToProps)(Preload); 