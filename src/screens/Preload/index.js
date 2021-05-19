import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { 
  ScreenInitialLogin,
  ViewStylePage,
  ViewStyleLogo,
  LogoBusaqui,
  ViewStyleTitle,
  Title, 
  ViewStyleSubtitle,
  Subtitle,
  ButtomSubscribe,
  ButtomSubscribeText,
  Image
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
                    NavigationActions.navigate({routeName:'HomeDrawer'})
                ]
            }));
        }
    }

    function HandleTextButton () {
          if(!props.token){
            return(
                <ButtomSubscribeText>Criar sua conta</ButtomSubscribeText>
            );
        }
        else{
            return(
                <ButtomSubscribeText>Entrar agora</ButtomSubscribeText>
            );
        }
    }
    
    return (
    <ScreenInitialLogin> 
                {/* Imagem da primeira tela de login e container */}
      <Image  source={require('../../assets/Images/ImagemGraal.png')}>  
            {/* Container do conteúdo */}
            <ViewStylePage> 
            {/* Container do logo Busaqui */}
                <ViewStyleLogo>
                {/* Logo transparente do Busaqui inserido na parte superior centralizada em linha */}
                    <LogoBusaqui source={require('../../assets/Images/Icons/Busaqui.png')}/>
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
                        onPress={handleSignUp} activeOpacity={0.4}>

                        {/* Texto do botão de entrar/criar sua conta */}
                        <HandleTextButton/>
                         
                    </ButtomSubscribe>
            </ViewStylePage>
        </Image> 
    </ScreenInitialLogin>   
    );
}

 const mapStateToProps = (state) => {
     return{
         token:state.userReducer.token
     };
 }

 export default connect(mapStateToProps)(Preload); 