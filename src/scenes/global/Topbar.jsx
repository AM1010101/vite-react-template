import { Box, IconButton, useTheme, Button } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Topbar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const { loggedIn, setLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      p={2}
    >
      <Box display="flex" alignItems="center">
        {mobileMenuButton()}
        {lightDarkButton()}
      </Box>
      <Box display="flex" alignItems="center">
        {userLogInOutButton()}
        {userSignUpButton()}
      </Box>
    </Box>
  );

  function lightDarkButton() {
    return (
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    );
  }

  function mobileMenuButton() {
    {
      /* only show the menu icon if in mobile */
    }
    return isNonMobile ? null : (
      <IconButton
        hidden={isNonMobile}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {theme.palette.mode === 'dark' ? (
          <MenuOutlinedIcon />
        ) : (
          <MenuOutlinedIcon />
        )}
      </IconButton>
    );
  }

  function userLogInOutButton() {
    const handleButtonClick = () => {
      navigate('/login');
    };
    return (
      location.pathname !== '/login' &&
      (loggedIn ? (
        <Button onClick={setLogout}>Logout</Button>
      ) : (
        <Button
          variant="contained"
          color="inherit"
          onClick={handleButtonClick}
        >
          Login
        </Button>
      ))
    );
  }

  function userSignUpButton() {
    const handleButtonClick = () => {
      navigate('/signup');
    };
    return (
      location.pathname !== '/signup' &&
      (loggedIn ? null : (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleButtonClick}
          sx={{ marginLeft: '1rem' }}
        >
          Sign Up
        </Button>
      ))
    );
  }
};

export default Topbar;
