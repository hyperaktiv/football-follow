import { TOGGLE_THEME } from '../constants';

export const THEMES = {
   light: {
      bg_color: '#FFF',
      txtColor: '#000',
      iconColor: '#FFA000',
      gameColor: '#FFF',
   },
   dark: {
      bg_color: '#0b0b0b',
      txtColor: '#aaaaaa',
      iconColor: '#a0a0a0',
      gameColor: '#181818',
   }
}

const theme = (state = 'light', action) => {
   if (action.type === TOGGLE_THEME) {
      if (state === 'light') {
         return 'dark'
      } else {
         return 'light'
      }
   }
   return state;
}
export default theme;