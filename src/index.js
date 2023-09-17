import React from 'react';
import { createRoot } from 'react-dom/client';
import RegistrationForm from './RegistrationForm';

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>
);
