import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage'
import SearchResults from './Components/SearchResults';
export const appRuoter = createBrowserRouter([{
  path: "/",
  element: <App />,
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
