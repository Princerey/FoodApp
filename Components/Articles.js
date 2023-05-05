import { Box, Typography,Button } from '@mui/material'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tomato from './Images/tomato.png'
import meal from './Images/meal.png'
import workout from './Images/workout.png'
import corn from './Images/corn.png'
import wrap from './Images/wrap.png'
import soup from './Images/wrap.png'
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
 justifyContent:"center",
 alignItems:"center",
 display:"flex",
 color:"#bfbfbf",
 backgroundColor:"transparent",
 flexDirection:"column"
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  border:"none",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Articles() {

  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

 
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1250 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1250, min: 850 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 850, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
      <Box sx={{height:"100vh" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <Box sx={{ width:"100%" , height:"500px" , display:"flex" , flexDirection:"column"}}>
          <Typography sx={{fontSize:"35px" , color:"#7c8fd0" , fontWeight:"600" , marginLeft:"3em"}}>Latest Articles</Typography>
          <Box sx={{ marginTop:"5em" , marginLeft:{ lg:"6.5em" , md:"6.5em" ,sm:"8em" , xs:"1.5em"} }} >
          <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px" , marginBottom:"3em",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={tomato} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >Grilled Tomatoes at Home</h2>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  
  </div>
  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={meal} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >Snacks for Travel</h2>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  </div>
  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={workout} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >Post-workout Recipes</h2>
 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  </div>
  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={corn} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >How to Grill Corn</h2>
 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  </div>
  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={wrap} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >CrunchWrap Supreme</h2>
 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel2d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  </div>
  <div className='cards' style={{ maxWidth: "381px", height: "500px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background: "rgb(56 50 50 / 25%)",
border: "1.37039px solid rgba(147, 162, 211, 0.38)" , 
borderRadius: "20.937px",gap:"10px"}}>
  <div style={{  minWwidth:"326px", borderRadius:"21px"}}>
  <Image height={200} src={soup} alt="" />
  </div>
  <h2 style={{color: "#7c8fd0" , fontSize:"21px"}
  } >Broccoli Cheese Soup</h2>
 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel2d-header">
        <Button sx={{margin:"1em 0" , padding: "10px 26px" , 
borderRadius: "21px",background:"#e23744",color:"#fff"}}>Read More</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
  </div>
</Carousel>
            
</Box>
        </Box>
      </Box>
    </>
  )
}