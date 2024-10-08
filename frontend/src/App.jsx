import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme.js";

import MainLayout from './layouts/MainLayout';
import BudgetPage from './pages/BudgetPage';
import FormPage from './pages/FormPage';
import HistoryPage from './pages/HistoryPage';
import CalendarPage from './pages/CalendarPage';
import LandingPage from './pages/LandingPage';

import axios from 'axios';

axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<BudgetPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;