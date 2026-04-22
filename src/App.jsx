import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Pages/Home/Home"

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Layout/>,children:[
      {index: true, element: <Home/>}
    ]}
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
