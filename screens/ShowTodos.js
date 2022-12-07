import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MultipleTexts from '../components/Text';
import { useRoute } from '@react-navigation/native';

const ShowTodos = () => {
  const route = useRoute();
  // console.log(route);
  return (
    <View style={styles.rootContainer}>
      <FlatList
      style={styles.list}
        data={route.params.data}
        renderItem={(item,index) => {
          return <MultipleTexts text={item.item} key={item.index} />;
        }}
        keyExtractor={(item) => item?.id}
        />
      </View>
  );
};

export default ShowTodos;

const styles = StyleSheet.create({
  rootContainer:{
    borderWidth:2,
    borderTopColor:'#242424',
    backgroundColor:'#afadad',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingVertical:300,
    paddingHorizontal:100,
    marginTop:50,
    flex:1,
  },
  list:{
    right:80,
    padding:10,
  },
});

