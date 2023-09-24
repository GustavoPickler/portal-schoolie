import { DefaultTheme } from 'react-native-paper'
import { theme as globalTheme } from './src/global/styles/theme';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      backgroundColor: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6110',
    backgroundColor: globalTheme.colors.White
  },
}

export default theme