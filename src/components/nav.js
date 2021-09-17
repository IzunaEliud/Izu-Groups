import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"#363636" }}>
        <Toolbar>
            <Grid container direction="row" alignItems="center" justifyContent="left">
            <Grid item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1,paddingLeft: 10, }}>
                    IZU-MENBERS
                </Typography>
            </Grid>
            </Grid>          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
