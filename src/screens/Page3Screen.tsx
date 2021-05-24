import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};
const Page3Screen = ({navigation}:Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>(
                <Button
                    title="Menu"
                    onPress={()=>navigation.toggleDrawer()}
                />
            )
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 screen</Text>
            {/* <Button
                title='Regresar'
                onPress={()=>navigation.goBack()}
            />
            <Button
                title='Ir a la página 1'
                onPress={()=>navigation.popToTop()}
            /> */}
            
        </View>
    )
}

export default Page3Screen
