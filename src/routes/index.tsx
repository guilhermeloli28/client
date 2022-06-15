import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../contexts';
import { useEffect } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import GroupIcon from '@mui/icons-material/Group';
import ServicesList from '../pages/Services/ServicesList';
import ServicesCreate from '../pages/Services/ServicesCreate';
import ProfessionalsList from '../pages/Professionals/ProfessionalsList';
import ProfessionalsCreate from '../pages/Professionals/ProfessionalsCreate';

export function AppRoutes() {
  const { handleSetDrawerOptions } = useDrawerContext();

  useEffect(() => {
    handleSetDrawerOptions([
      {
        label: 'Agendamentos',
        path: '/schedules',
        icon: <CalendarMonthIcon />,
      },
      {
        label: 'Serviços',
        path: '/services',
        icon: <ContentCutIcon />,
      },
      {
        label: 'Profissionais',
        path: '/professionals',
        icon: <GroupIcon />,
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/schedules' element={<h1>schedules</h1>} />
      <Route path='/schedules/create' element={<h1>schedules</h1>} />

      <Route path='/services' element={<ServicesList />} />
      <Route path='/services/create' element={<ServicesCreate />} />

      <Route path='/professionals' element={<ProfessionalsList />} />
      <Route path='/professionals/create' element={<ProfessionalsCreate />} />

      <Route path='*' element={<Navigate to='/schedules' />} />
    </Routes>
  );
}
