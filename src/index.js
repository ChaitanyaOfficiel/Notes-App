import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BookProvider } from './Hook/BookContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewNote from './Pages/NewNote';
import UpdateNote from './Pages/UpdateNote';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/newnote',
    element: <NewNote/>
  },{
    path:'/:id',
    element: <UpdateNote />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
  <React.StrictMode>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </React.StrictMode>
  </BookProvider>
);

