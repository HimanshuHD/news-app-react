import React from "react";
// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
// Until you switch to the new API, your app will behave as if it’s running React 17.
// import { render } from "react-dom";

// Use this instead...
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);