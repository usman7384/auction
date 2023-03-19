import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "../navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Typography } from "@mui/joy";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <ResponsiveAppBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          ml: 2,
          fontSize: '1.5rem',
          display: { xs: 'none', md: 'flex' },
          padding: '1rem',
          // fontWeight: 700,
          // letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
        >  Categories
</Typography>
<Divider/>
        <Box sx={{ overflow: "hidden" }}>
          <List>
            {["All", "Cars", "Electronics", "Furniture"].map((text, index) => (
              <ListItem key={text} 
              sx={{
                ml: 2,
                fontSize: '1.5rem',
                display: { xs: 'none', md: 'flex' },
                padding: '1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
