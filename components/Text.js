import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MultipleTexts = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>{props?.text}</Text>
      <View style={styles.line} />
    </View>

  );
};

export default MultipleTexts;

const styles = StyleSheet.create({
  rootContainer:{
    width:70,
  },
    text:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        fontSize:20,
        color:'#1a1a1a',
    },
    line:{
      marginLeft:10,
      borderWidth:1,
      width: 160,
      borderColor:'#232323',
  },
});
