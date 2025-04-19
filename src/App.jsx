import './App.css'
import './index.css'
import { Provider } from "react-redux"
import Body from "./components/Body.jsx"
import Head from "./components/Head.jsx"
import store from "./utils/store.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer.jsx"
import WatchPage from "./components/WatchPage.jsx"
import SearchPage from "./components/SearchPage.jsx"
import VideoContainer from './components/VideoContainer.jsx'
import ButtonVideoContainer from './components/ButtonVideoContainer.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />,
        children:[
          {
            path:"/",
            element:<VideoContainer />

          },
          {
            path:"/buttonSearch/:key",
            element:<ButtonVideoContainer />
          }

        ]
      },
      {
        path:"/watch",
        element:<WatchPage />
      },
      {
        path:"/search/:searchQuery",
        element:<SearchPage />
      }

    ]
  }
])

function App() {
  

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
    
    
    
  )
}

export default App
