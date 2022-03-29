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
    },
    container_input:{
      flexDirection: 'row',
      margin:20,
    },
    input:{
      minWidth: 200,
      marginHorizontal: 20,
      borderBottomWidth : 1,
      borderBottomColor : '#DDDEE1',    
      fontFamily : "Poppins",
    },
    button:{
    
    }
  });
