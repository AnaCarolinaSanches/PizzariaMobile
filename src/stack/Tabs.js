import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
import Home from '../views/Home'
import Perfil from '../views/Perfil'
import Produtos from '../views/Produtos'
import themes from '../themes'

export default function Tabs(){
return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: themes.padrao.colors.brand.amarelo,
            tabBarInactiveTintColor: themes.padrao.colors.neutral.neutral_100,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: themes.padrao.colors.brand.vermelho,
                borderTopColor: themes.padrao.colors.neutral.neutral_0,
                paddingTop: 4,
                height: 60
            }
        }} >
            <Tab.Screen name="Perfil"  component={Perfil}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'human-greeting'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />
             <Tab.Screen name="Menu Principal"  component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'heart'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />
             <Tab.Screen name="Produtos"  component={Produtos}
            options={{
                tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name={'office-building'}
                color={focused ? themes.padrao.colors.brand.amarelo
                               : themes.padrao.colors.neutral.neutral_100}
                size={35}/>               
                )
            }} />

    </Tab.Navigator>
)

}