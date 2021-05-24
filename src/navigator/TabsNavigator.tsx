import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import TopTabsNavigator from './TopTabsNavigator';
import Icon from 'react-native-vector-icons/Fontisto';

const Tabs = () =>{
return Platform.OS === 'ios'
    ?<TabsIOS/>
    :<TabsAndroid/>
}
export default Tabs;

// Tabs para android
const NavTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid =() => {
  return (
    <NavTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colors.primary
        
      }}
      screenOptions={({route}) => ({
        tabBarIcon:({color}) => {
            let iconName:any;
            switch (route.name) {
                case 'Inicio':
                    iconName = <Icon name="home" size={20} color={colors.secondary} />;
                    break;
                case 'Nosotros':
                    iconName = <Icon name="persons" size={20} color={colors.secondary} />
                    break;
                case 'Configuración':
                    iconName = <Icon name="spinner-cog" size={20} color={colors.secondary} />;
                    
                    break;
        
                default:
                    break;
            }
            return <Text>{iconName}</Text>
        }
    })}
    >
      <NavTabsAndroid.Screen options={{}} name="Inicio" component={Tab1Screen} />
      <NavTabsAndroid.Screen options={{}} name="Nosotros" component={TopTabsNavigator} />
      <NavTabsAndroid.Screen options={{}} name="Configuración" component={Tab3Screen} />
    </NavTabsAndroid.Navigator>
  );
}

// Tabs para IOS
const NavTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <NavTabsIOS.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        tabBarOptions={{
            activeTintColor:colors.primary,
            style:{
                borderTopColor:colors.primary,
                borderTopWidth:0,
                elevation:0
            },
            labelStyle:{
                fontSize:15
            }
        }}
        screenOptions={({route}) => ({
            tabBarIcon:({color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Inicio':
                        iconName='INI'
                        break;
                    case 'Nosotros':
                        iconName='US'
                        break;
                    case 'Configuración':
                        iconName='CONF'
                        break;
            
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
      <NavTabsIOS.Screen options={{}} name="Inicio" component={Tab1Screen} />
      <NavTabsIOS.Screen options={{}} name="Nosotros" component={TopTabsNavigator} />
      <NavTabsIOS.Screen options={{}} name="Configuración" component={Tab3Screen} />
    </NavTabsIOS.Navigator>
  );
}