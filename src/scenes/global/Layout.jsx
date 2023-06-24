import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function Layout() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />{' '}
        {/* this is for global styles, sets css to material ui baseline*/}
        <Box overflow="hidden" height="100%">
          <div className="app">
            <Sidebar
              isSidebar={isSidebar}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            <main className="content">
              <Topbar
                setIsSidebar={setIsSidebar}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
              <Box overflow="auto" height="100%">
                <Outlet context={[]} />
              </Box>
            </main>
          </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
