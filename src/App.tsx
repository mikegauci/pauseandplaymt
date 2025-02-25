import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const Team = React.lazy(() => import('./pages/Team'));
const TeamMember = React.lazy(() => import('./pages/TeamMember'));
const TheatreStudies = React.lazy(() => import('./pages/TheatreStudies'));
const Events = React.lazy(() => import('./pages/Events'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Programme = React.lazy(() => import('./pages/Programme'));
const TheFestival = React.lazy(() => import('./pages/TheFestival'));
const GettingThere = React.lazy(() => import('./pages/GettingThere'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          } />
          <Route path="team" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Team />
            </React.Suspense>
          } />
          <Route path="team/:id" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <TeamMember />
            </React.Suspense>
          } />
          <Route path="theatre-studies" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <TheatreStudies />
            </React.Suspense>
          } />
          <Route path="events" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Events />
            </React.Suspense>
          } />
          <Route path="getting-there" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <GettingThere />
            </React.Suspense>
          } />
          <Route path="partners" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Partners />
            </React.Suspense>
          } />
          <Route path="contact" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </React.Suspense>
          } />
          <Route path="faq" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <FAQ />
            </React.Suspense>
          } />
          <Route path="programme" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Programme />
            </React.Suspense>
          } />
          <Route path="the-festival" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <TheFestival />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;