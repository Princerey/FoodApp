import React from 'react'
import image from './Images/image.png'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
export default function About() {
  return (
    <>
    <Box sx={{ display:"flex", alignItems:"center"}}>
      
  <Box sx={{background:" linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)" , width:"100%" , height:"467px" , display:"flex" , justifyContent:"space-around" , alignItems:"center"}}>
    <Box sx={{width: "384px", height: "468px" , display:{md:"flex" , xs:"none" },justifyContent:"center",alignItems:"center"}}>
        <Image src={image} height={350} alt="" />
    </Box>
    <Box sx={{width:"500px" , height:"300px" , display:"flex" , flexDirection:"column" , gap:"30px" , justifyContent:"center" , alignItems:"start" , margin:{md:"0 5em" , xs:"0 5em"}}}> 
     <Typography sx={{fontSize:"35px" , color:"#7c8fd0" , fontWeight:"600"}}>About Us</Typography>
     <Typography sx={{color:"#bfbfbf"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aliquam nihil quos, modi est id dolore praesentium recusandae numquam cumque eum, animi saepe voluptatem fugit debitis inventore et dolores vitae?</Typography>
     <Button sx={{padding: "7px 10px", width: "132px" , height: "42px" ,   borderRadius:"34px" , background:" #e23744", border:"none"  , color:"white",fontWeight:"600" , textTransform:"none"}} className='explore'>Read More</Button>
    </Box>
  </Box>
    </Box>
    </>
  )
}
