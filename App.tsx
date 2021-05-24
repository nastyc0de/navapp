import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LateralMenu from './src/navigator/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigator/> */}
        <LateralMenu/>
        {/* <Tabs/> */}
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
