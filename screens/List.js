import { FlatList, StyleSheet, View, Button, Modal, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import MultipleTexts from '../components/Text';


const List = (props) => {
  let itemsCopy = [...props.route.params?.data];
  let [task, setTask] = useState(itemsCopy);
  let [showModal, setShowModal] = useState(false);
  let [modalData, setModalData] = useState([]);
  let [modalTitle, setModalTitle] = useState('');

  function sendData(title,description){
    setModalTitle(title);
    setModalData(description);
    setShowModal(!showModal);
  }

  // console.log(task, "task");
  function deleteItem(item) {
    var items = [...task]; // make a separate copy of the array
    var index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(items, index);
     setTask(items);
    }
  }

  function EditText(items){
  }

  return (
    <View style={styles.rootContainer}>
       <FlatList
          style={styles.list}
          data={task}
          key={'_'}
          keyExtractor={(item) => item.item}
          renderItem={(item,index) => {
            return (
              <>
              <View>
                <View style={styles.button}>
                <Button title="DELETE" onPress={() => deleteItem(item?.item)}/>
                </View>
                <View style={styles.button2}>
                <Button title="EDIT" onPress={() => sendData(item.item)}/>
                </View>
                <MultipleTexts text={item.item} key={item?.index}  />
                </View>
              </>
            );
          }}
          />
           <Modal
           animationType="slide"
           transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
            <View style={styles.modal}>
              {/* <Text style={styles.text}>{modalTitle}</Text> */}
              {/* <Text style={styles.text}>{modalData}</Text> */}
              <View style={styles.outputContainer}>
                <TextInput style={styles.textOutput} placeholder="Output" value={modalTitle} />
              </View>
              <View style={styles.buttonsContainer}>
            <Button
              title="Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <View style={styles.editBtn}>
            <Button  title="Edit Text" onPress={() => EditText(itemsCopy)} />
            </View>
            </View>
          </View>
        </Modal>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
rootContainer:{
    flex:1,
    borderWidth:2,
    borderTopColor:'#242424',
    backgroundColor:'#afadad',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    left:0,
    marginTop:40,
},
buttonsContainer:{
  marginTop:80,
  alignItems:'center',
  flexDirection:'row',
},
outputContainer:{
  padding:3,
  width:200,
  top:50,
  height:50,
  borderWidth:2,
  borderRadius:8,
},
textOutput:{
padding:10,
},
list:{
  left:20,
},
button:{
  width:70,
  left:290,
  top:95,
},
button2:{
  width:70,
  top:60,
  marginBottom:10,
  left:200,
},
editBtn:{
  marginLeft:40,
},
modal:{
  flex:1,
  alignItems:'center',
  backgroundColor:'#e1dfdf',
},
text:{
  color:'#cccccc',
  marginTop:20,
  padding:20,
},
});
