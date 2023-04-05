import { DefaultTheme } from 'react-native-paper'

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
    backgroundColor: '#FF6110'
  },
}

export default theme