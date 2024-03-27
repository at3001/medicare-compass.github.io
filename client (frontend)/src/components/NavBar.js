

/* NEED TO EDIT THIS!! JUST OUTLINE FOR NOW */

import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import '../pages/pages.css';

// The hyperlinks in the NavBar contain a lot of repeated formatting code so a
// helper component NavText local to the file is defined to prevent repeated code.
const NavText = ({ href, text, isMain }) => {
  return (
    <Typography
      variant={isMain ? 'h5' : 'h7'}
      noWrap
      style={{
        marginRight: '80px',
        fontFamily: 'Alegreya',
        fontWeight: 700,
        letterSpacing: '.3rem',
      }}
    >
      <NavLink
        to={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {text}
      </NavLink>
    </Typography>
  )
}

// Here, we define the NavBar. Note that we heavily leverage MUI components
// to make the component look nice. Feel free to try changing the formatting
// props to how it changes the look of the component.
export default function NavBar() {
  return (
    <AppBar style={{backgroundColor: '#051c3b', color: 'white'}} position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NavText href='/' text='HOME' isMain />
          <NavText href='/itinerary' text='BUILD AN ITINERARY' />
          <NavText href='/restaurants' text='RESTAURANTS' />
          <NavText href='/attractions' text='ATTRACTIONS' />
          <NavText href='/airbnbs' text='AIRBNBS' />
        </Toolbar>
      </Container>
    </AppBar>
  );
}