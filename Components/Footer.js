import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from './Images/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
export default function Footer() {
  return (
    <>
    <Box sx={{display:"flex" ,   justifyContent:"center" , alignItems:"center" , flexDirection:"row" , flexWrap:"wrap" , marginTop:"10em" }}>
        <Box  sx={{display:"flex"  , alignItems:"center"  , flexWrap:"wrap" , justifyContent:"center"  }}> 
     <Image src={logo} alt="" width={230} height={155} className='logo' />
     <Box sx={{ width:"200px", margin:"2em 6.5em" , display:"flex" , flexDirection:"column" ,alignItems:"center" }}>
        <Typography sx={{fontWeight: "600" , fontSize: "18.8433px" , color:"#7c8fd0"}}>Contact Us</Typography>
        <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"start" , margin:"1em 0" , color:"#646874" }}>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing , XYZ -79005</Typography>
        <Typography sx={{margin:"1em 0" ,  fontSize: "14.6559px"}}>example2020@gmail.com</Typography>
        <Typography>(904)443-0343</Typography>
        </Box>
     </Box>
     </Box>
     <Box sx={{display:"flex"  , alignItems:"center" ,  flexWrap:"wrap" , justifyContent:"center" }}>
     <Box sx={{margin:"2em 6.5em" , display:"flex" , flexDirection:"column" ,alignItems:"center"}}>
        <Typography sx={{fontWeight: "600" , fontSize: "18.8433px" , color:"#7c8fd0"}}>More</Typography>
        <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"start" , margin:"1em 0" , color:"#646874" }}>
        <Typography className='hover' >About Us</Typography>
        <Typography sx={{margin:"1.2em 0" ,  fontSize: "14.6559px"}}  className='hover' >Products</Typography>
        <Typography  className='hover'>Career</Typography>
        <Typography  sx={{margin:"1.2em 0" ,  fontSize: "14.6559px"}}  className='hover'>Contact Us</Typography>
        </Box>
     </Box>
   
     <Box sx={{ margin:"2em 6.5em" , display:"flex" , flexDirection:"column" ,alignItems:"center"}}>
        <Typography sx={{fontWeight: "600" , fontSize: "18.8433px" , color:"#7c8fd0"}}>Social Links</Typography>
        <Box sx={{display:"flex" , justifyContent:"start" , margin:"1em 0" , color:"#646874" , gap:"20px" }}>
         <InstagramIcon sx={{transform:"Scale(1.2)"}} className='social'/>
         <TwitterIcon  sx={{transform:"Scale(1.2)"}} className='social'/>
         < FacebookIcon  sx={{transform:"Scale(1.2)"}} className='social'/>
        </Box>
        <Typography sx={{margin:"4.4em 0" , whiteSpace:"nowrap" , color:"#646874" , fontSize:"14.66px"}}>&#169; 2022 C4Scale Example </Typography>
  </Box>
         
  </Box>
  </Box>
    </>
  )
}
 