import { Drawer } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components';
import { DrawerProvider } from './contexts';
import { AppThemeProvider } from './contexts/ThemeContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
