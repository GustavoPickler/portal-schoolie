import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { Provider as PaperProvider } from 'react-native-paper'
import { Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
import { Arvo_400Regular } from '@expo-google-fonts/arvo'
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'
import theme from './theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Arvo_400Regular,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (__DEV__) {
    require('react-devtools');
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <Routes />
    </PaperProvider>
  )
}