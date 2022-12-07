import { View, Button, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CreateTodos from './CreateTodos';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
const navigation = useNavigation();
    function navigate(){
    navigation.navigate('OutputScreen',{
        data:taskItems,
    });
}
  return (
    <ScrollView>
    <View style={styles.rootContainer}>
        <CreateTodos task={task} setTask={setTask} taskItems={taskItems} setTaskItems={setTaskItems} />
        <View style={styles.buttonContainer}>
        <Button title="Show All Todos" onPress={() => navigate()}/>
        </View>
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    borderWidth:2,
    borderTopColor:'#242424',
    backgroundColor:'#afadad',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical:300,
    paddingHorizontal:100,
    marginTop:40,
  },
    buttonContainer:{
      left:70,
      bottom:60,
    },
});

