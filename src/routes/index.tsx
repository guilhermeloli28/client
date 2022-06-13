import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Button variant='contained' color='primary'>
            Teste
          </Button>
        }
      />
      <Route path='about' element={<h1>about</h1>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
