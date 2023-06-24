import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import SquareIcon from '@mui/icons-material/Square';
import ViewDayIcon from '@mui/icons-material/ViewDay';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHidden, setIsHidden] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box
      stickey="top"
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: `${colors.greenAccent[400]}!important`,
        },
        '& .pro-menu-item.active': {
          color: `${colors.blueAccent[400]} !important`,
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        hidden={isCollapsed ? !isNonMobile : false}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  LEARN WITH GPT
                </Typography>

                {isNonMobile ? (
                  <IconButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    <MenuOutlinedIcon />
                  </IconButton>
                ) : null}
              </Box>
            )}
          </MenuItem>
          <Box sx={{ justifyContent: 'space-between' }}>
            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              {isCollapsed ? (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '30px 0 0px 20px' }}
                >
                  HOME
                </Typography>
              ) : null}
              <Item
                title="HOME"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {isCollapsed ? (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '30px 0 0px 20px' }}
                >
                  BLOCK
                </Typography>
              ) : null}

              <Item
                title="BLOCK CREATOR"
                to="/"
                icon={<SquareIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {isCollapsed ? (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '30px 0px 0px 20px' }}
                >
                  SCENE
                </Typography>
              ) : null}

              <Item
                title="SCENE CEATOR"
                to="/SceneCreator"
                icon={<ViewDayIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              {isCollapsed ? (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '30px 0 0px 20px' }}
                >
                  INFO
                </Typography>
              ) : null}

              <Item
                title="FAQ & DOCs"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
