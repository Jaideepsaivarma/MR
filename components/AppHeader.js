import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class AppHeader extends React.Component{
  render(){
    return(
       <View style= {styles.textContainer}>
         <Text style={styles.text}>
             Mr. Pronounciator
         </Text>
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
    marginBottom : '0%'
  },
  text:{
    color: 'white',
    padding: 25,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});

export default AppHeader;