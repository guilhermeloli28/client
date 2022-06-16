import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components';
import { DrawerProvider } from './contexts';
import { AppThemeProvider } from './contexts/ThemeContext';
import { AppRoutes } from './routes';
import { ConfirmProvider } from 'material-ui-confirm';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <ConfirmProvider>
          <BrowserRouter>
            <Sidebar>
              <AppRoutes />
            </Sidebar>
          </BrowserRouter>
        </ConfirmProvider>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
