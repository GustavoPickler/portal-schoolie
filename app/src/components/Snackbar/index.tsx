import React, { useContext } from "react";
import { SnackbarContext } from "../../context/SnackBarContext";
import { Snackbar as SnackbarPaper } from "react-native-paper";

export default function Snackbar() {
  const { snackbar, setSnackbar } = useContext(SnackbarContext);
  const { message, action, style } = snackbar;

  function handleClose() {
    setSnackbar({message: ''});
  }

  return (
    <>
        <SnackbarPaper 
        action={action as any} 
        style={style} 
        visible={!!message} 
        duration={5000}
        onDismiss={() => handleClose()}>
            {message}
        </SnackbarPaper>
    </>
  )

}