import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CreateTodos = ({task, setTask, taskItems, setTaskItems}) => {
const navigation = useNavigation();
 function AddTasks(){
     setTaskItems([...taskItems, task]);
     setTask(null);
    }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Enter A task"
        placeholderTextColor={'#222222'}
        maxLength={30}
        value={task}
        onChangeText={text => setTask(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Task" onPress={() => AddTasks()} />
        </View>
        <View style={styles.testButton}>
        <TouchableOpacity onPress={() => navigation.navigate('StartScreen',{tasks : taskItems})}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateTodos;

const styles = StyleSheet.create({
    rootContainer:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
    },
    inputContainer:{
        bottom:90,
        padding:3,
        width:250,
        height:50,
        borderWidth:2,
        borderRadius:8,
    },
    buttonContainer:{
      flexDirection:'row',
    },
    button:{
      bottom:25,
      right:70,
    },
    testButton:{
    bottom:290,
      right:180,
    },
});
