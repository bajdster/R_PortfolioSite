import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from './components/Portfolio';

const router = createBrowserRouter([
  {
    path: "/", element: <Root/>, children: [
      {
        index: true, element: <Home/>
      },
      {
        path: '/about', element: <About/>
      },
      {
        path: "/portfolio", element: <Portfolio/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
