import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
    Page1Screen: undefined,
    Page2Screen: undefined,
    Page3Screen: undefined,
    PersonaScreen: {id:number, name:string}
}

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    elevation:0,
                    shadowColor:'transparent',
                    // backgroundColor:'#199274',
                },
                cardStyle:{
                    backgroundColor:'#199274',
                }
            }}
        >
            <Stack.Screen name='1page' options={{title:'Página 1'}} component={Page1Screen}/>
            <Stack.Screen name='2page' options={{title:'Página 2'}} component={Page2Screen}/>
            <Stack.Screen name='3page' options={{title:'Página 3'}} component={Page3Screen}/>
            <Stack.Screen name='Persona' options={{title:'Persona'}} component={PersonaScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator
