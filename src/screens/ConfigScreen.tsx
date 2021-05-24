import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const ConfigScreen = () => {
    const {authState} = useContext(AuthContext)
    return (
        <View>
            <Text>Config Screen</Text>
        </View>
    )
}

export default ConfigScreen
