import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QueryProvider from '@app/providers/query-provider';
import App from '@app/App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>,
);