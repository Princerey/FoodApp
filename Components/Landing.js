import React from 'react'
import food from './Images/food.png'
import Image from 'next/image';
import { Button,Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
export default function Landing() {
  const isSmallerScreen = useMediaQuery('(max-width:900px)');
  return (
      <>
      <Box sx={{display:"flex" , justifyContent:"space-around",alignItems:"center",flexDirection:{xs:"column",md:"row"}}} className='landing'>
         <div style={{ height:"100vh",  display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"40px"}} className='left'>
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"start"}} className='bold'>
            <h2 style={{textAlign:"start", fontSize:"50px" , color:"#7c8fd0"}}>Discover the <br /> <span style={{color:" #e23744"}}>Best</span> Food <br /> and Drinks</h2>
            <p style={{textAlign:"start" , fontSize:"17px" , position:"relative" , bottom:"1.7em",color:"#bfbfbf"}}>Naturally made Healthcare Products for the <br /> better care & support of your body</p>
            <Button sx={{padding: "12px 30px",  borderRadius:"34px" , color:"white" ,  background:" #e23744", border:"none"  , fontWeight:"600"}} className='explore'>Explore Now!</Button>
            </div>
         </div>
         {/* <div style={{background: `url(${poster})`, height: "580px",    width: "500px" , borderRadius:"0 0 0 192.902px" , position:"relative" , bottom:"3em",backgroundSize:"100% 100%"}} className='landingimage'>
         <img src={design} height="100%"  alt="" className='image' />
         </div> */}
          <div style={{position:"relative" , bottom:"3em" }} className='landingimage'>
            <Image src={food} alt="" className='image' style={{width:isSmallerScreen ? '65vw' : '38vw',height:"auto"}}/>
          </div>
      </Box>
      </>
  )
}
