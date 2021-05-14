import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { 
  ScreenInitialLogin,
  ImagePontoGraal,
  ViewInitialLogin,
  ViewStylePage,
  ViewStyleLogo,
  LogoBusaqui,
  ViewStyleTitle,
  Title, 
  ViewStyleSubtitle,
  Subtitle,
  ButtomSignIn,
  ButtomSignInText,
  ButtomSubscribe,
  ButtomSubscribeText
} from './styled';

const Preload = (props) => {
    

    const handleSignUp = async () => {
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
                    NavigationActions.navigate({routeName:'Login'})
                ]
            }));
        }
    }
    
    return (

    <ScreenInitialLogin> 
                {/* Imagem da primeira tela de login */}
      <ImagePontoGraal source={require('../../Assets/Images/ImageGraal.png')} resizeMode="cover"/>    
        {/* Container da página */}   
        <ViewInitialLogin>
            {/* Container do conteúdo */}
            <ViewStylePage> 
            {/* Container do logo Busaqui */}
                <ViewStyleLogo>
                {/* Logo transparente do Busaqui inserido na parte superior centralizada em linha */}
                    <LogoBusaqui source={require('../../Assets/Images/Icons/Busaqui.png')}/>
                </ViewStyleLogo>
                {/* container do titulo */}
                <ViewStyleTitle>
                {/* Título da screen */}
                    <Title>Saiba onde</Title>
                    <Title>seu ônibus</Title> 
                    <Title>está agora!</Title>
                </ViewStyleTitle>
                    {/* Container do subtítulo */}
                <ViewStyleSubtitle>
                    {/* Subtítulo centralizado em linha abaixo do título */}
                    <Subtitle>Assistente de mobilidade urbana, que </Subtitle>
                    <Subtitle>mostra a localização em tempo real dos </Subtitle>
                    <Subtitle>ônibus de sua cidade.</Subtitle>
                </ViewStyleSubtitle>
                    <ButtomSubscribe
                        underlayColor={'#fff4'}
                        onPress={()=> ('')}>
                        {/* Texto do botão de entrar */}
                        <ButtomSubscribeText>Criar sua conta</ButtomSubscribeText>
                    </ButtomSubscribe>
                        {/* Container do botão de cadastrar */}
                        <ButtomSignIn
                        onPress={()=> navigation.navigate('')} activeOpacity={0.4}>
                        {/* Texto do botão de cadastrar */}
                            <ButtomSignInText>Já tem conta?Entrar agora</ButtomSignInText>
                        </ButtomSignIn>
                    
            </ViewStylePage>
        </ViewInitialLogin>
    </ScreenInitialLogin>   
    );
}

 const mapStateToProps = (state) => {
     return{
         token:state.userReducer.token
     };
 }

 export default connect(mapStateToProps)(Preload); 