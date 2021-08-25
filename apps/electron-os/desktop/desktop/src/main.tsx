import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Desktop } from './app';

render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
  document.getElementById('root')
);
