import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
//import withStyles from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import styled from "styled-components";
import Paper from '@material-ui/core/Paper';

import { Link as RouterLink } from 'react-router-dom';


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 50%,
      rgba(20, 20, 20, 1)
    ),
    url();
  background-size: cover;
`;
// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF"
//   }
// })(Typography);


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

const Home = ( {history} ) => {

  const classes = useStyles();

    const images =  [
      {
        url: 'https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/16:9/w_2560%2Cc_limit/Pushup.jpg',
        title: 'PUSHUP',
        siteurl:'/Push_up',
        width: '30%',
      },
      {
        url: 'https://www.mensjournal.com/wp-content/uploads/2018/02/squats-mens-journal-february-2018.jpg?w=1200&h=920&crop=1&quality=86&strip=all' ,
        title: 'Squat',
        siteurl: '/Squat',
        width: '40%',
      },
      {
        url: 'https://newsimg.sedaily.com/2017/05/23/1OG19KQQ2M_17.jpg',
        title: 'SitUp',
        siteurl: '/Sit_up',
        width: '30%',
      },
      {
        url: 'https://kourage.kr/wp-content/uploads/%E1%84%8F%E1%85%A5%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%82%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1-%E1%84%8B%E1%85%AD%E1%84%80%E1%85%A1-%E1%84%80%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A1-%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A7%E1%86%AB1.jpeg',
        title: 'Yoga',
        siteurl:'/Yoga',
        width: '35%',
      },
      {
        url: 'https://im-media.voltron.voanews.com/Drupal/01live-211/styles/sourced/s3/2019-08/205D3489-D2F9-489A-AA82-9B61F16AF09F.jpg?itok=TBGlB-HL',
        title: 'Taekwondo',
        siteurl:'/Tae',
        width: '30%',
      },
      {
        url: 'https://i.ytimg.com/vi/AoVwE9idERY/maxresdefault.jpg',
        title: 'Dance',
        siteurl: '/Dance',
        width: '35%',
      },
      {
        url: 'http://yonginyoga.com/wp-content/uploads/2016/04/d06d70e205bbb3f7e7e33e331583cd21.jpg',
        title: 'ABOUT',
        siteurl:'/About',
        width: '50%',
      },
      {
        url: 'https://www.wikihow.com/images_en/thumb/0/09/Write-a-Business-Memo-Step-25-Version-3.jpg/v4-460px-Write-a-Business-Memo-Step-25-Version-3.jpg.webp',
        title: 'List',
        siteurl: '/Memo',
        width: '50%',
      },
    ];
  
    return (

    <div>
        <Container component={Paper}>
      <div className={classes.root}>
      
        <Header />
        
        {images.map((image) => ( 
      
         <ButtonBase 
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
            component={RouterLink} to={image.siteurl}
            
          >
            
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
              
            </span>
          </ButtonBase>
       
        ))}
      </div>  
    
    <Footer/>
   </Container>
    </div>
   
    );
}
export default Home;