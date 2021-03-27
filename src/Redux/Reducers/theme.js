import { TOGGLE_THEME } from '../constants';

export const THEMES = {
   light: {
      bg_color: '#F5F6F9',
      txtColor: '#000',
      iconColor: '#606770',
      gameColor: '#EBEDF0',
      divide_color: '#CCD0D5'
   },
   dark: {
      bg_color: '#0b0b0b',
      txtColor: 'white',
      iconColor: '#a0a0a0',
      gameColor: '#1C1E21',
      divide_color: '#303338'
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