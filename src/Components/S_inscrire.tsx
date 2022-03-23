import React from "react";
import { Text, View } from "react-native";
import Style from "../../Style";

const S_inscrire = ({navigation}:any) => {
    return (
      <View style={{flexDirection: 'row',alignSelf: "center", marginBottom: 20, marginTop: 20,}}>
       <Text> Pas encore inscrit ? </Text>
       <Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>    
      </View>
    );
  }
  
export default S_inscrire;