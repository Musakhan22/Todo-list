import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Navigate from './screens/Navigate';
import ShowTodos from './screens/ShowTodos';
import List from './screens/List';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
    <StatusBar hidden={true} />
    <NavigationContainer>
    <Tab.Navigator screenOptions={({route}) => ({
      headerTitleAlign:'center',
      headerShadowVisible:false,
      tabBarIcon:({focused, color, size}) =>{
        let iconName;
        let rn = route.name;

        if (rn === 'StartScreen'){
          iconName = focused ? 'home' : 'home-outline';
        } else if (rn === 'HomeScreen'){
          iconName = focused ? 'add-outline' : 'add-outline';
        } else if (rn === 'OutputScreen'){
          iconName = focused ? 'menu-outline' : 'document-text-outline';
        } else if (rn === 'ListScreen'){
          iconName = focused ? 'list' : 'list-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="StartScreen" component={Navigate}  />
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="OutputScreen" component={ShowTodos} />
      <Tab.Screen name="ListScreen" component={List} />
    </Tab.Navigator>
    </NavigationContainer>
    {/* <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#f6f5f5'},
        headerTintColor:'#101010',
        headerTitleAlign:'center',
        contentStyle:{backgroundColor:'#f6f5f5'},
        headerShadowVisible:false,
      }}>
        <Stack.Screen name="StartScreen" component={Navigate} options={{
          title:'Start',
        }}/>
        <Stack.Screen name="HomeScreen" component={Home} options={{
          title:'Home',
        }}/>
        <Stack.Screen name="CreateScreen" component={CreateTodos} options={{
          title:'Create',
        }}/>
        <Stack.Screen name="OutputScreen" component={ShowTodos} options={{
          title:'Display',
        }}/>
        <Stack.Screen name="ListScreen" component={List} options={{
          title:'View',
        }}/>
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  );
};

export default App;

