import React from 'react'
import { connect } from 'react-redux'
import {
  BottomNavigation,
  Grid,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography
} from '@material-ui/core'
import TranslateIcon from '@material-ui/icons/Translate';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

import { useStyles } from './style'
import logo from '../../assets/img/logo-crushing-footer.png'



const Footer = () => {
  const classes = useStyles()

  const [anchorTranslate, setAnchorTranslate] = React.useState(null);
  const [anchorScale, setAnchorScale] = React.useState(null);

  const handleClickTranslate = (event) => {
    setAnchorTranslate(event.currentTarget);
  }

  const handleCloseTranslate = () => {
    setAnchorTranslate(null);
  }

  const handleClickScale = (event) => {
    setAnchorScale(event.currentTarget);
  }

  const handleCloseScale = () => {
    setAnchorScale(null);
  }
  
  return (
    <BottomNavigation className={classes.root}>
        <Grid container className={classes.NavAll} direction="row" justify="center" alignItems="flex-start" >
          <Grid item xs={4} sm={2}>
            <img alt='Logo' src={logo} className={classes.logo} />
          </Grid>
          <Grid item xs={4} sm={4} >
            <Box>
              <Button className={classes.options} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickTranslate}>
                <TranslateIcon  style={{marginRight: '5px'}} /> ESPAÑOL
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorTranslate}
                keepMounted
                open={Boolean(anchorTranslate)}
                onClose={handleCloseTranslate}
              >
                <MenuItem onClick={handleCloseTranslate}>ESPAÑOL</MenuItem>
                <MenuItem onClick={handleCloseTranslate}>ENGLISH</MenuItem>
              </Menu>
            </Box>
            
            <Box mt={2}>
              <Button className={classes.options} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickScale}>
                <AspectRatioIcon style={{marginRight: '5px'}} /> CENTIMETRO
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorScale}
                keepMounted
                open={Boolean(anchorScale)}
                onClose={handleCloseScale}
              >
                <MenuItem onClick={handleCloseScale}>CENTIMETRO</MenuItem>
                <MenuItem onClick={handleCloseScale}>PULGADA</MenuItem>
              </Menu>
            </Box>
          </Grid>
          <Grid item xs={4} sm={2} style={{textAlign: 'right'}}>
            <Typography>
              Copyright © 2020 <a href='https://wisely.cl' rel="noopener noreferrer">Wisely</a>. All Rights Reserved. 
            </Typography>
          </Grid>
        </Grid>
    </BottomNavigation>
  )
}

const connected = connect()(Footer)
export { connected as Footer }
