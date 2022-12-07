import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Navigate = (props) => {
  // console.log(props.route.params?.tasks);
  const navigation = useNavigation();

  // navigation.dispatch(
  //   CommonActions.reset({
  //     index: 1,
  //     routes: [
  //       { name: 'HomeScreen' },
  //     ],
  //   })
  // );

//  navigation.reset({
//   index: 1,
//   routes: [{name: 'HomeScreen'}],
// });

  return (
    <View style={styles.rootContainer}>
      {/* <Text>{props.route.params?.tasks}</Text> */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="ADD" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
        <View>
        <Button title="View" onPress={() => navigation.navigate('ListScreen',{
       data : props.route.params?.tasks,
       })} />
      </View>
      </View>
    </View>
  );
};

export default Navigate;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    alignItems:'center',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:100,
  },
  button:{
    marginRight:20,
  },
});
