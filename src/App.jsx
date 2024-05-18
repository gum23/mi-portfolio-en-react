import React, {useState} from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/routes';
import { SideBar } from './components/SideBar';
import { Light, Dark } from './styles/Themes';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark ;


  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              <MyRoutes  />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({theme}) => theme.bgtotal};
    transition: all 0.3s;
    &.active{
      grid-template-columns: 300px auto;
    }
  color: ${({theme}) => theme.color};
`;

export default App
