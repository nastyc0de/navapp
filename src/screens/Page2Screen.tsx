import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

const Page2Screen = () => {
    const nav = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 screen</Text>
            <Button
                title='Ir pag. 3'
                onPress={()=>nav.navigate('3page')}
            />
        </View>
    )
}

export default Page2Screen
