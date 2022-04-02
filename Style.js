import {StyleSheet} from 'react-native';

backgroundColor_default = "#FBFBFB";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor_default,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_button: {
      color: '#1962D0',
      fontStyle: 'normal',
      textAlignVertical: 'auto',
      fontFamily:"Poppins", 
    },
    container_input:{
      flexDirection: 'row',
      margin:"4%",
      alignSelf:"flex-start",
    },
    container_input_2:{
      margin:"4%",
      alignSelf:"flex-start",
    },
    input:{
      minWidth: "75%",
      marginHorizontal:"4%",
      borderBottomWidth : 1,
      borderBottomColor : '#DDDEE1',    
      fontFamily : "Poppins",
    },
    input_2:{
      minWidth: "50%",
      marginHorizontal:"4%",
      borderBottomWidth : 1,   
      fontFamily : "Poppins",
    },
    text_input:{
      fontFamily : "Poppins", margin:"3%", fontSize:14,    
    },

    button_Login:{
      backgroundColor:"#0065FF",
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 20,
      alignSelf: "center",
      marginHorizontal: "5%",
      minWidth: "90%",
      textAlign: "center",
    },
    button_ForgetPassword:{
      backgroundColor:"#0065FF",
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 20,
      alignSelf: "center",
      marginHorizontal: "5%",
      minWidth: "60%",
      textAlign: "center",
    },
    button_SignUp:{
      backgroundColor:"#0065FF",
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 20,
      marginTop:'15%',
      alignSelf: "center",
      marginHorizontal: "5%",
      minWidth: "60%",
      textAlign: "center",
    },
    button_Text:{
      color:"#FFFFFF",
      fontFamily:"Poppins",
      fontSize:18,
      textAlign: "center",
    },
  });
