import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{};
const Page1Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 screen</Text>
            <Button
                title='Ir pag. 2'
                onPress={()=>navigation.navigate('2page')}
            />
            <Text>Navegar usando argumentos</Text>
            
            <TouchableOpacity
                style={styles.buttons}
                onPress={()=>navigation.navigate('Persona',{
                    id:1,
                    name: 'Andres'
                })}
            >
                <Text style={styles.textButtons}>Ir a persona</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttons}
                onPress={()=>navigation.navigate('Persona',{
                    id:2,
                    name: 'XXXXX'
                })}
            >
                <Text style={styles.textButtons}>Ir a nombre</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Page1Screen
