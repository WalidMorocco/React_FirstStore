import React from 'react';

export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff'
    },
    
    dark: {
        foreground: '#fff',
        background: '#242526'
    },
};

export const ThemeContext = React.createContext({
    theme:{},
});

