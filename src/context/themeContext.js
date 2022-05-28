import React from 'react';

export const themes = {
    purple: {
        foreground: '#fff',
        background: '#511660'
    },
    
    orange: {
        foreground: '#222222',
        background: '#F27F0C'
    },
    
    light: {
        foreground: '#222222',
        background: '#fff'
    },

    dark: {
        foreground: '#fff',
        background: '#222222'
    },
};

export const ThemeContext = React.createContext({
    theme:{},
});

