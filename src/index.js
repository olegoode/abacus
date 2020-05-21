import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import 'normalize.css';
import './index.css';

const root = globalThis.document.getElementById('root');

render(<App />, root);