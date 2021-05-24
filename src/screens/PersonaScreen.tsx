import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<RootStackParams , 'PersonaScreen'>{};
const PersonaScreen = (props: Props) => {
    const navigation = useNavigation()
    const {route} = props

    const {name} = route.params;


    console.log(route);
    // const {id, nombre} = route.params
    console.log(props);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{name}</Text>
            <Button
                title='Ir pag. 2'
                onPress={()=>navigation.navigate('3page')}
            />
        </View>
    )
}

export default PersonaScreen
