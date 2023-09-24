import React, { createContext, useState } from 'react';
import { Button, StyleProp, ViewStyle } from 'react-native';

import { $RemoveChildren } from 'react-native-paper/lib/typescript/types';

export const SnackbarContext = createContext({
    setSnackbar: ({} : SnackBarData) => {},
    snackbar: {} as SnackBarData,
  });

  export interface SnackBarData {
    message: string,
    action?: $RemoveChildren<typeof Button> & { label: string; },
    style?: StyleProp<ViewStyle>
  }

  interface Props {
    children: React.ReactNode
  }
  
  export const SnackbarContainer = ({ children } : Props) => {
    const [snackbar, setSnackbar] = useState<SnackBarData>({
      message: ''
    } as SnackBarData);
  
    const handleSnackbarSet = ({ message, action, style } : SnackBarData) : void => {
      setSnackbar({
        message,
        action,
        style,
      });
    };
  
    const contextValue = {
      setSnackbar: handleSnackbarSet,
      snackbar,
    };
  
    return (
      <SnackbarContext.Provider value={contextValue}>
        {children}
      </SnackbarContext.Provider>
    );
  };