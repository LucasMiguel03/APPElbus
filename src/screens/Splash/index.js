import React from 'react';
import {LogoSplash,PageSplash} from './Styled'
 
export default function SplashBusaqui(){
  return (
       /* Container da Primeira tela (Page) */
    <PageSplash> 
        {/* Logo centralizada em linha e coluna */}
        <LogoSplash source={require('../../assets/Images/Icons/Busaqui01.svg')} resizeMode="cover"/>
    </PageSplash>  
  );
}