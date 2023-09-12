import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home/Home'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};
