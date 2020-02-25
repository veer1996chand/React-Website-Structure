import React from 'react';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 

 





const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#CF4954',
    },
  },
});

export default function CustomizedButtons() {
   

  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Button className="m-4" variant="contained" color="primary" >
          Theme Provider
        </Button>
      </ThemeProvider> 
    </div>
  );
}
