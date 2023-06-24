import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

const Topbar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery('(min-width:600px)');

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
      </Box>
    </Box>
  );
};

export default Topbar;
