import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Container, Header,  HeaderTitle, Menu, MenuItem, MenuItemText, Input, InputLabel, ActionButton, ActionButtonText } from './styled';

const Page = () => {
    const [activeMenu, setActiveMenu] = useState('signin');
    return (
      <Container behavior={Platform.OS === 'ios'?'padding':null}>
        <StatusBar barStyle="light-content" />
            <Header>
              <HeaderTitle>Bem-vindo ao Busaqui!!!</HeaderTitle>
            </Header>
        <Menu>
            <MenuItem active={activeMenu == 'signin'} onPress={()=>setActiveMenu('signin')} underlayColor="transparent">
              <MenuItemText>Login</MenuItemText>
            </MenuItem>
            <MenuItem active={activeMenu == 'signup'} onPress={()=>setActiveMenu('signup')} underlayColor="transparent">
              <MenuItemText>Cadastrar</MenuItemText>
            </MenuItem>
        </Menu>
        {activeMenu == 'signup' &&
          <InputLabel>Apelido</InputLabel>
        }
        {activeMenu == 'signup' &&
          <Input placeholder="Digite seu apelido" placeholderTextColor = "#394452" />
        }
        <InputLabel>E-mail</InputLabel>
        <Input placeholder="Digite seu e-mail" placeholderTextColor = "#394452" />
        
        <InputLabel>Senha</InputLabel>
        <Input placeholder="Digite sua senha"  placeholderTextColor = "#394452" />
        {activeMenu == 'signin' &&
          <ActionButton>
            <ActionButtonText>Login</ActionButtonText>
          </ActionButton>
        }
        {activeMenu == 'signup' &&
          <ActionButton>
            <ActionButtonText>Cadastrar </ActionButtonText>
          </ActionButton>
        }
      </Container>
    ); 
  }

export default Page;