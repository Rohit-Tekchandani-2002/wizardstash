import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout';
import CategoriesPage from '../pages/CategoriesPage';
import HomePage from '../pages/HomePage';
import ToolDetailPage from '../pages/ToolDetailPage';
import ToolsPage from '../pages/ToolsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/tools" replace />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/:slug" element={<ToolDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<Navigate to="/tools" replace />} />
      </Route>
    </Routes>
  );
}
