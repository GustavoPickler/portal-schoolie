import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import * as Font from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper'
import { Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
import { Arvo_400Regular } from '@expo-google-fonts/arvo'
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { Roboto_500Medium } from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen';

import Routes from './src/routes'
import theme from './theme'
import { SnackbarContainer } from './src/context/SnackBarContext';
import { SchoolieProvider } from './src/context/SchoolieContext';
import Snackbar from './src/components/Snackbar';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Ubuntu_400Regular,
    Arvo_400Regular,
    Nunito_800ExtraBold,
    Roboto_500Medium
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
      <SafeAreaView style={{ flex: 1 }}>
        <SchoolieProvider>
          <SnackbarContainer>
            <Routes />
            <Snackbar />
          </SnackbarContainer>
        </SchoolieProvider>
      </SafeAreaView>
    </PaperProvider>
  );
}