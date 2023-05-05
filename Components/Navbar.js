import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './Images/logo.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Products'];

function Navbar(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
   
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY <= 200) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Image src={logo} height={70} width={90} alt=""  />
      </Typography>
      <Divider sx={{background:"#bfbfbf"}} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Link href={'#'+item} style={{textDecoration:"none" , color:"white"}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item} sx={{textAlign:"center"}} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windows !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
          color:"#bfbfbf",
          background: isTransparent ? '#1e1e1e' : 'none',
          backdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(180%)',
          transition: 'all 0.5s ease',
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:"#fff"}}/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Image src={logo} height={50} width={70} alt="" />
          </Typography>
          <Box  sx={{ display: { xs: 'none', sm: 'block'  , margin:"0 1em"} }}>
            {navItems.map((item) => (
              <Link href={'#'+item}><Button wkey={item} sx={{ color: '#bfbfbf' , margin:"0 0.7em" , fontSize:{ md:"13px" , sm:"10px" , xl:"14px"} }}>
                {item}
              </Button></Link>
            ))}
          </Box>
          <Link href="#foot"><Button sx={{padding: "4px 14px",  borderRadius:"34px" , background:" #e23744", border:"none" , color:"white" , fontWeight:"600" , textTransform:"none"}} className='explore'>Get In Touch</Button></Link>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,background:"#1e1e1e",backdropFilter:'blur(14px) saturate(180%)',WebkitBackdropFilter:'blur(14px) saturate(180%)',color:"#fff"},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box> */}
    </Box>
  );
}
export default Navbar;