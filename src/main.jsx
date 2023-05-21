import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import '@smastrom/react-rating/style.css'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Route.jsx';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
