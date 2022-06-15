import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../themes';

type ThemeName = 'light' | 'dark';

type Props = {
  children: ReactNode;
};

interface IThemeContextData {
  themeName: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          width='100vw'
          height='100vh'
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
