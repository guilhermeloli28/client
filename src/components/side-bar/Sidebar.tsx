import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import logo from '../../assets/marques.png';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
  children: ReactNode;
}

interface IListItemLinkProps {
  label: string;
  icon: string | ReactNode;
  to: string;
  onClick?: () => void;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ListItemButton onClick={handleClick} selected={!!match}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const Sidebar: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { toggleTheme } = useAppThemeContext();
  const { drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer variant={smDown ? 'temporary' : 'permanent'}>
        <Box
          width={theme.spacing(32)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{
                height: theme.spacing(17),
                width: theme.spacing(17),
              }}
              src={logo}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map((option) => (
                <ListItemLink
                  key={option.path}
                  label={option.label}
                  icon={option.icon}
                  to={option.path}
                />
              ))}
            </List>
          </Box>
          <Box sx={{ mb: 3 }}>
            <ListItemButton onClick={toggleTheme}>
              <ListItemIcon>
                <Icon>{<DarkModeIcon />}</Icon>
              </ListItemIcon>
              <ListItemText primary='Alterar tema' color='primary' />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(32)}>
        {children}
      </Box>
    </>
  );
};
