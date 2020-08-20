import React from 'react'
import {
  // createMuiTheme,
  makeStyles,
  // ThemeProvider,
  useTheme,
} from '@material-ui/core/styles'

import styled from 'styled-components'
import { Grid, Box, Paper, Typography, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
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
      lineHeight: '1',
      color: theme.palette.text.primaryPurple,
      letterSpacing: '-2px',
    },
    secondaryLine: {
      fontWeight: '600',
      letterSpacing: '-1px',

      // opacity: '75%',

      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      background: `-webkit-linear-gradient(
        153deg,
        rgb(247, 43, 50),
        rgb(27, 0, 249))`,
    },
    grid2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 16px',
    },
    paper: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',

      '& .MuiTextField-root': {
        marginBottom: '16px',
      },
      '& .MuiTypography-root': {
        marginBottom: theme.spacing(3),
      },
    },
  }
})

function NewLogin() {
  // const StyledWrapper = styled.div`
  //   .secondary-line {
  //     font-size: '56px' !important;
  //     -webkit-background-clip: text;
  //     -webkit-text-fill-color: transparent;
  //     background: -webkit-linear-gradient(
  //       153deg,
  //       rgba(250, 50, 57, 1) 100%,
  //       rgba(47, 26, 166, 1) 0%
  //     );
  //   }
  // `
  const classes = useStyles()
  const theme = useTheme()
  console.log('thsi theme', theme)

  const StyledInput = styled.Link`
    --text-color: black;
    max-width: 500px;

    .field {
      width: 100%;
      position: relative;
      border-bottom: 0px solid var(--text-color);
      margin: 1.5rem auto 1.5rem;
    }

    .label {
      color: var(--text-color);
      font-size: 1.2rem;
    }

    .input {
      z-index: 1;
      outline: none;
      border: none;
      overflow: hidden;
      margin: 0;
      width: 100%;
      padding: 0.25rem 0;
      background: none;
      color: black;
      font-size: 1.2rem;
      font-weight: bold;
      position: relative;
    }

    .input:valid {
      color: yellowgreen;
    }
    .input:invalid {
      color: orangered;
    }

    .field::after {
      content: '';
      position: relative;
      display: block;
      height: 4px;
      width: 100%;
      background: ${theme.palette.text.primaryPurple};
      transform: scaleX(0);
      transform-origin: 0%;

      transition: transform 200ms ease;
      top: 2px;
    }
    .field:focus-within::after {
      transform: scaleX(1);
    }

    .label {
      z-index: 0;
      /* display: block; */
      position: absolute;
      /* transform: translateY(-1rem); */
      transform: translateX();
      transform-origin: 0%;
      transition: transform 200ms;
      left: 0;
    }

    .field:focus-within .label,
    .input:not(:placeholder-shown) + .label {
      transform: scale(0.8) translateY(-2rem);
    }
  `
  return (
    // <StyledWrapper>
    <Grid className={classes.grid} container>
      <Grid item className={classes.grid1} xs={12} md={8}>
        <Box display="flex" alignItems="center">
          <Box className={classes.imageContainer} />
          <Box
            // pl={2}
            p={1}
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="center"
            height="100%"
          >
            <Typography gutterBottom className={`${classes.mainLine}`} variant="h2">
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
        <Paper width="100%" height="100%" elevation={8} className={classes.paper}>
          {/* <Box fontWeight={700}>
            <Typography className={classes.mainLine} variant="h4">
              Login
            </Typography>
          </Box> */}
          {/* <Box fontWeight={700} fontSize="h4.fontSize">
            <Typography variant="inherit">Login</Typography>
          </Box> */}

          <Typography className={`${classes.mainLine} login-text`} variant="h4" component="h4">
            Login
          </Typography>
          <TextField label="username" size="small" variant="outlined" />
          <TextField label="password" size="small" variant="outlined" type="password" />
          <Button>This is a button</Button>

          {/* <StyledInput>
            <div className="field">
              <input type="email" name="email" className="input" placeholder="" />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            <div className="field">
              <input type="password" className="input" placeholder="" />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
          </StyledInput> */}
        </Paper>
      </Grid>
    </Grid>
    /* </StyledWrapper> */
  )
}

export default NewLogin
