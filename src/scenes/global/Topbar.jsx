import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AuthContext } from '../../context/authContext';

const Topbar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const { loggedIn, setLogout } = useContext(AuthContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ICONS */}
      <Box display="flex">
        {/* only show the menu icon if in mobile */}
        {isNonMobile ? null : (
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
        )}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <h6>{loggedIn ? 'Logged In :' : 'Logged Out :'}</h6>
        <button onClick={setLogout}>Logout</button>
        <h6>{localStorage.getItem('token')}</h6>
      </Box>
    </Box>
  );
};

export default Topbar;
