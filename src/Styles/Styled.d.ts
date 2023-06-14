import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      pri: string,
      sec: string,

      title: string,
      subtitle: string,
      paragraph: string,

      button1: string,
      button2: string,
      button3: string,
      button4: string,

      button1text: string,
      button2text: string,
      button3text: string,
      button4text: string,
    
      hover: string,
    }
  }
}