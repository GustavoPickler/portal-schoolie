import { useContext } from 'react';
import { SnackBarData, SnackbarContext } from '../context/SnackBarContext';

const useSnackbar = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  function showSnackbar({ message, action, style = { marginBottom: 30 }} : SnackBarData ) {
    setSnackbar({message, action, style});
  }
  return { showSnackbar };
};

export default useSnackbar;