import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './constants/routes.json'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  /**
   * Routes that should be completely a different page/route should go here
   * https://reactrouter.com/en/main/start/tutorial#adding-a-router
   */
  const router = createBrowserRouter([
    {
      path: routes.Privacy,
      element: <PrivacyPolicy />
    },
    {
      path: routes.Home,
      element: <Home />
    }
  ])

  return (
    <div className="App prose">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
