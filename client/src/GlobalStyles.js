import { createGlobalStyle } from 'styled-components/macro';
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
   
    font-family: "Architects Daughter", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
}
body{
    margin: 0;
    background: var(--mainblue);
 
}
h1, h2, h3, h4 {
    margin: 0;
}
:root{
    --mainblue: #39495D;
    --mainorange: #CE844A;
    --mainwhite: #FFFFFF;
    --darkblue:#242E3E;
    --otherorange:#725543;
}
`
export default GlobalStyle