import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import GameScreen from "./pages/GameScreen"
import { createGlobalStyle } from 'styled-components';
import Movies from "./pages/Movies";
import {ContextProvider} from "./context/ContextProvider.jsx";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
`;
{/*
Using BrowserRouter for navigation
Maps NavLink paths to respective pages
*/}
function Root() {
  return(
    <>
    <GlobalStyle/>
      <ContextProvider>
        <Routes>
          /*adds routes */
          <Route path ='/' element = {<GameScreen/>}/>
          <Route path = 'Movies' element = {<Movies/>}/>
        </Routes>
      </ContextProvider>
    </>
  )
}

const router = createBrowserRouter([
    {path:'*', Component: Root}
])

function App() {

    return (
        <RouterProvider router ={router}/>
    )
}

export default App
