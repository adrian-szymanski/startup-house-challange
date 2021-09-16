import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Posts
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
