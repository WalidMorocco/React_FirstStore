import './App.css';
import { Layout } from './components/Layout';
import {ThemeContext, themes} from './context/themeContext';
import React, {useState} from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import Navbar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState(themes);

  const toggleTheme = () => {
    setTheme((previousThemeValue) => 
      previousThemeValue === themes.dark ? themes.light : themes.dark
    );
  };

  const toggleThemeColor = () => {
    setTheme((previousThemeValue) => 
      previousThemeValue === themes.orange ? themes.purple : themes.orange
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme }}>  
      <div>
        <div className='toggle'>
          <div>
            <p className='colorText'>Light/Dark</p>
            <ToggleSwitch onToggle={toggleTheme}/>
          </div>
          <div>
            <p className='colorText'>Purple/Orange</p>
            <ToggleSwitch onToggle={toggleThemeColor}/>
          </div>
          
          
        </div>
        <div className='navbar'>
          <Navbar/>
        </div>
        
        <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground }}>
          <Layout />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
