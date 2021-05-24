import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import Page2Screen from '../screens/Page2Screen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../themes/appTheme';
import Tabs from './TabsNavigator';

const Drawer = createDrawerNavigator();
const LateralMenu = () => {
    return (
        <Drawer.Navigator
        drawerContent={(props) =><InternMenu {...props}/>}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="Page2" component={Page2Screen} />
        </Drawer.Navigator>
    )
}

export default LateralMenu

const InternMenu = (props:DrawerContentComponentProps<DrawerContentOptions>) => {
    
    return(
        <DrawerContentScrollView>
            <View style={styles.avatar_container}>
                <Image
                    source={{
                        uri: 'https://computerrock.com/wordpress/wp-content/uploads/2016/06/avatar_placeholder.png'
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.menu_container}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() =>props.navigation.navigate('Tabs')}
                    >
                        <Text style={styles.menu_text}>Navegacion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() =>props.navigation.navigate('Page2')}
                    >
                        <Text style={styles.menu_text}>Configuración</Text>
                    </TouchableOpacity>
            </View>
        </DrawerContentScrollView>


    );
    
}