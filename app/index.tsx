import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { Provider as PaperProvider } from 'react-native-paper'
import { Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
import { Arvo_400Regular } from '@expo-google-fonts/arvo'
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes'
import theme from './theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Arvo_400Regular,
    Nunito_800ExtraBold
  });

  useEffect(() => {
    async function handleSplashScreen() {
      try {
        await SplashScreen.preventAutoHideAsync();

        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
        
      } catch (error) {
        console.warn(error);
      }
    }

    handleSplashScreen();
  }, [fontsLoaded]);

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
  );
}