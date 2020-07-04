import React from 'react'
import {
  // createMuiTheme,
  makeStyles,
  // ThemeProvider,
  useTheme,
} from '@material-ui/core/styles'

import styled from 'styled-components'
import {
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'

import './Login.css'

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    grid: {
      backgroundColor: theme.palette.primary.main,
      height: '100vh',
      //   justifyContent: "space-between",
    },
    imageContainer: {
      background: "url('/login-image.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      //   backgroundPosition: "0% -40px",
      //   backgroundSize: "cover",
      backgroundSize: 'contain',
      height: '100%',
      minWidth: '40%',
    },
    grid1: {
      display: 'flex',
    },
    mainLine: {
      fontWeight: '700',
      lineHeight: '0.8',
      color: theme.palette.text.primaryPurple,
      letterSpacing: '1px',
    },
    secondaryLine: {
      fontWeight: '600',
      letterSpacing: '-1.5px',

      opacity: '75%',
    },
    grid2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 16px',
    },
    paper: {
      padding: '16px',
    },
  }
})

function NewLogin() {
  const StyledWrapper = styled.div`
  .secondary-line {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    background: -webkit-linear-gradient(
      153deg,
      rgba(250, 50, 57, 1) 100%,
      rgba(47, 26, 166, 1) 0%
    );
    background-color:'red';
  }
`
  const classes = useStyles()
  const x = 0
  const theme = useTheme()
  console.log('thsi theme', theme.palette.text.primaryPurple)
  return (
    <StyledWrapper>
      <Grid className={classes.grid} container>
        <Grid item className={classes.grid1} xs={12} md={8}>
          <Box display="flex" alignItems="center">
            <Box className={classes.imageContainer} />
            <Box pl={2} display="flex" flexDirection="column" alignItems="left">
              <Typography
                gutterBottom
                className={`${classes.mainLine}`}
                variant="h2"
              >
                The real college social app is finally here...
              </Typography>
              <Typography
                variant="h5"
                className={`secondary-line ${classes.secondaryLine}`}
                gutterBottom
              >
                Sign up and meet others with the same sophistication as you!
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} className={classes.grid2}>
          <Paper
            width="100%"
            height="100%"
            elevation={8}
            className={classes.paper}
          >
            {/* <Box fontWeight={700}>
            <Typography className={classes.mainLine} variant="h4">
              Login
            </Typography>
          </Box> */}
            {/* <Box fontWeight={700} fontSize="h4.fontSize">
            <Typography variant="inherit">Login</Typography>
          </Box> */}

            <Typography
              className={`${classes.mainLine}`}
              variant="h4"
              component="h4"
            >
              Login
            </Typography>
            <TextField label="username" size="small" variant="outlined" />
            <TextField
              label="password"
              size="small"
              variant="outlined"
              type="password"
            />
            <Button>This is a button</Button>
          </Paper>
        </Grid>
      </Grid>
    </StyledWrapper>
  )
}

export default NewLogin
