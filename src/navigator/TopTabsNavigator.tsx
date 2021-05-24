import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import ConfigScreen from '../screens/ConfigScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const TopTab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  const {top } = useSafeAreaInsets()
  return (
    <TopTab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      tabBarOptions={{
        pressColor:colors.primary,
        showIcon: true,
        indicatorStyle:{
          backgroundColor:colors.primary,
        },
        style:{  
          elevation:0
        } ,
      }}
      screenOptions = {({route}) =>({
        tabBarIcon: ({color})=>{
            let iconName: any;
            switch (route.name) {
              case 'Chat':
                iconName = <Icon name="commenting" size={20} color={colors.primary} />;
                break;
              case 'Contact':
                iconName = <Icon name="mobile-alt" size={20} color={colors.primary} />;
                break;
              case 'Config':
                iconName = <Icon name="spinner-cog" size={20} color={colors.primary} />;
                break;
            }
            return <Text style={{color}}>{iconName}</Text>
        }
        })
      }
    >
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Config" component={ConfigScreen} />
    </TopTab.Navigator>
  );
}
export default TopTabsNavigator;