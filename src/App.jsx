
import './App.css'
import { RouterProvider, createBrowserRouter, useNavigation } from 'react-router-dom';

import Categories from './Pages/Categories';
import HomePage from './Pages/Homepage';


async function loaderFunction(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
  return res.json()
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: 'categories/:id',
    loader: ({ params }) => {
      return loaderFunction(params.id)
    },
    element: <Categories></Categories>

  }

])



function App() {
  return <RouterProvider router={router} ></RouterProvider>
}

export default App
