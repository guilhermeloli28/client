import { Routes, Route, Navigate } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='about' element={<h1>about</h1>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
