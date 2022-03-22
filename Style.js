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
      fontSize: 13,
      fontStyle: 'normal',
      textAlignVertical: 'auto',
    },
    container_button:{
      
    },
    container_email:{
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,

    },
    container_password:{
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
    },
    input:{
      alignSelf: "stretch",
      width: "auto",
      minWidth: 50,
      marginLeft: 20,
      marginRight: 20,
      borderBottomWidth : 1,
      borderBottomColor : '#DDDEE1',      
    },

  });
