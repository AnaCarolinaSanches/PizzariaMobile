import React from 'react'
import { Appearance } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import { Cabin_400Regular, Cabin_700Bold } from '@expo-google-fonts/cabin'
import { ThemeProvider } from 'styled-components'
import themes from './src/themes'
import Navigation from './src/stack/Navigation'


export default function App() {
  //obtendo o tema padrão do dispositivo móvel
  const deviceTheme = Appearance.getColorScheme()
  const theme = themes[deviceTheme] || themes.light
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold, Cabin_400Regular, Cabin_700Bold
  })

  if (!fontsLoaded) { return <AppLoading /> }
  else {
    return (
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
    )
  }
}