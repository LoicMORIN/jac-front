import React from "react";
import { Text, View, Button } from "react-native";


import Style from "../../Style";

function ForgetPassword({navigation}:any) {
    return(
        <View style={Style.container}> 
            <Text>Forget Password </Text>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    )

}

export default ForgetPassword; 