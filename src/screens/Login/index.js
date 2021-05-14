import React, { useState } from 'react';
import { 
  Container, 
  Header,  
  HeaderTitle, 
  Menu, 
  MenuItem, 
  MenuItemText, 
  Input, 
  InputLabel, 
  ActionButton, 
  ActionButtonText, 
  LoadingArea  
} from './styled';

import { StatusBar, Platform,Text, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import useAppBusaquiApi from '../../services/useAppBusaquiApi';

import color from '../../styles/color';



const Page = (props) => {
    const  api = useAppBusaquiApi();
    const [activeMenu, setActiveMenu] = useState('signin');
    const [name, setName] =  useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
      if(email && password) {
        setLoading(true);
        const res = await api.signin(email, password);
        setLoading(false);
        if(res.error) {
          alert(res.error);
        } else {
          // 1. Guarda token no reducer
          // 2.  Redirecionar para o home, no caso a rota principal
          props.setToken(res.token);
          props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeStack'})
            ]
        }));
        }

      }
    }
    const handleSignUp = async () => {
        if(name && email && password) {
          setLoading(true);
          const res = await api.signup(name, email, password);
          setLoading(false); 
          if(res.error) {
            alert(res.error);
          } else {
            // 1. Guarda token no reducer
            // 2.  Redirecionar para o home, no caso a rota principal
            props.setToken(res.token);
            props.navigation.dispatch(StackActions.reset({
              index:0,
              actions:[
                  NavigationActions.navigate({routeName:'HomeStack'})
              ]
          })); 
          }
  
        }
    }

    return (
      <Container behavior={Platform.OS === 'ios'?'padding':null}>
        <StatusBar barStyle="light-content" />
            <Header>
              <HeaderTitle>Bem-vindo ao Busaqui!!!</HeaderTitle>
            </Header>
        <Menu>
            <MenuItem 
              active={activeMenu == 'signin'} 
              onPress={()=>setActiveMenu('signin')} 
              underlayColor="transparent">

              <MenuItemText>Login</MenuItemText>
            </MenuItem>
            <MenuItem 
              active={activeMenu == 'signup'} 
              onPress={()=>setActiveMenu('signup')} 
              underlayColor="transparent">
                
              <MenuItemText>Cadastrar</MenuItemText>
            </MenuItem>
        </Menu>
        {activeMenu == 'signup' &&
          <InputLabel>Nome</InputLabel>
        }
        {activeMenu == 'signup' &&
          <Input 
            editable={!loading} 
            value={name} 
            onChangeText={t=>setName(t)} 
            placeholder="Digite seu nome" 
            placeholderTextColor = {color.Cinza} />
        }
        <InputLabel>E-mail</InputLabel>
        <Input 
          editable={!loading} 
          value={email} 
          onChangeText={t=>setEmail(t)} 
          keyboardType="email-address" 
          autoCapitalize="none" 
          placeholder="Digite seu e-mail" 
          placeholderTextColor = {color.Cinza} />
        
        <InputLabel>Senha</InputLabel>
        <Input 
          editable={!loading} 
          value={password} 
          onChangeText={t=>setPassword (t)} 
          placeholder="Digite sua senha"  
          placeholderTextColor = {color.Cinza}
          secureTextEntry={true} 
          style={{fontFamily: 'teste'}}/>
          
        {activeMenu == 'signin' &&
          <ActionButton disabled={loading} onPress={handleSignIn}>
            <ActionButtonText>Login</ActionButtonText>
          </ActionButton>
        }
        {activeMenu == 'signup' &&
          <ActionButton disabled={loading} onPress={handleSignUp}>
            <ActionButtonText>Cadastrar </ActionButtonText>
          </ActionButton>
        }

        
        {loading &&
          <LoadingArea>
            <ActivityIndicator size="large" color= {color.Branco} />
          </LoadingArea>
        }
      </Container>
    ); 
  }

const mapStateToProps = (state) => {
    return{
        token:state.userReducer.token
    };
}
const mapDispathToProps = (dispath) => {
  return {
    setToken:(token) => dispath({type:'SET_TOKEN', payload:{token}})
  };
}
export default connect(mapStateToProps, mapDispathToProps)(Page); 