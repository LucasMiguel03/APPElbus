import styled from 'styled-components/native';

 /* --------- Estilização e criação de components (tela do Login Inical)--------*/

     /* Estilização do Container */
     export const ScreenInitialLogin = styled.SafeAreaView`
     flex:1;
     justify-content:center;
     align-items:center;
     display:flex;
  `;
       /* Estilização da imagem da primeira tela de login */
  export const ImagePontoGraal = styled.Image`
     flex:1;
     display:flex;
     width:100%;
     background-color:#dad9d9;
     opacity:0.737;
  `;
       /* Estilização do container da página */
  export const ViewInitialLogin = styled.View`
     width:100%;
     height:100%;
     margin-top:-200%;
  `;

       /* Estilização do container do conteúdo */
  export const ViewStylePage = styled.View`
     flex-direction:column;
     justify-content:center;
     align-items:center;
     display:flex;
  `;
      /* Estilização do container do logo */
  export const ViewStyleLogo= styled.View`
     margin-top:47px;
  `; 
      /* Estilização do Logo Busaqui */
  export const LogoBusaqui = styled.Image`
     width:157px;
     height:51.02px;
  `;
        /* Estilização do container do título */
  export const ViewStyleTitle = styled.View`
     margin-top:76.98px;
     width:270px;
     height:135px;
     justify-content:center;
     align-items:center;
  `;
        /* Estilização do título */
  export const Title = styled.Text`
     font-family:Montserrat-Medium;
     font-size:42px;
     font-weight:normal;
     color:#ffffff;
     text-shadow: 1px 1px 1px #777;
  `;
        /* Estilização do container do subtítulo */
  export const ViewStyleSubtitle = styled.View`
     width:309px; 
     height:63px;
     justify-content:center;
     align-items:center;
     margin-top:21px;
  `;
        /* Estilização do subtítulo */
  export const Subtitle = styled.Text`
     font-family:Montserrat-Medium;
     font-weight:normal;
     font-size:13px;
     color:#ffffff; 
     text-shadow: 1px 1px 1px #777;
  `;
       /*Estilização do botão de Entrar em Login */
  export const ButtomSubscribe = styled.TouchableHighlight`
     width: 169px;
     height: 56px;
     border: 2px solid #FFFFFF;
     border-radius: 8px;
     justify-content:center; 
     align-items: center; 
     padding: 14px 18px;
     margin-top:77px;
   `;
       /*Estilização do texto do botão de Entrar em Login */
  export const ButtomSubscribeText = styled.Text`
     color: #FFF;
     font-size: 15px;
     font-family:Montserrat-Medium;
  `;
       /*Estilização do botão de cadastrar Login */
  export const ButtomSignIn = styled.TouchableOpacity`
     width: 191px;
     height: 17px;
     margin-top:40px;
     text-align:center;
     justify-content:center;
     background-color:#0000;
  `;
       /*Estilização do texto do botão de cadastrar Login */
  export const ButtomSignInText = styled.Text`
     font-size:14px;
     color:#ffffff;
     font-family:Montserrat-normal;
     font-weight:normal;  
  `;