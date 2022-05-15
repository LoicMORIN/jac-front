import React, {useState} from 'react';
import {Text, View,Image} from 'react-native';
import Style from '../../Style';

import ButtonLogin from '../Components/login/Button_login';
import Email from '../Components/Input_Email';
import Password from '../Components/login/Input_Password';
import { useAuth } from "../Context/AuthContext";


function LoginView({navigation}:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
      login(email, password);
    }

    return (
      <View style={Style.container}>
        <Image style={{marginBottom:"6%"}} source={require('../../assets/logo_UNICEF.png')} />
        <Text style={{fontSize:24,fontFamily:'Poppins', fontWeight:'bold',margin:"4%",marginRight:"28%" }}>Connexion à mon compte UNICEF</Text>
        <Email email={email} handleChange={setEmail} />
        <Password password={password} handleChange={setPassword}/>
        <View style={{marginHorizontal:25, marginBottom:40, marginTop:10, width:"85%", flexDirection:"row-reverse"}}>
          <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
        </View>
        <ButtonLogin handlePress={handleLogin} />
        <View style={{flexDirection: 'row', alignSelf: "center", marginTop: "40%"}}>
          <Text style={{fontFamily:'Poppins'}}> Pas encore inscrit ? </Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>    
        </View>
      </View>
    );
}

  
export default LoginView;


