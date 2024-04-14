import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage'
import SearchResults from './Components/SearchResults';
import Error from './Components/Error';
export const appRuoter = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path: "/results",
      element: <SearchResults />

    }
  ]
}])

function App() {
  return (

    <div  >
      <Head />
      <Body />
    </div>

  );
}

export default App;
