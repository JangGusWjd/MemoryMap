import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100%;
    height: 100vh;
    margin: 0;
}

ul{
    padding: 0;
}

li{
    list-style: none;
}

button, input, textarea{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
}

h1{
    font-size: 2.25rem;
    font-weight: 900;
    margin: 0;
}

#root{
    width: 100%;
  height: 100vh;
  background: #fafafa;
  margin: 0;
}

.container{
    width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    background: #FAFAFA;
}

.container-map{
    width: 50%;
    max-width: 480px;
    height: 100%;
    border-radius: 15px;
}

.container-form{
    width: 50%;
    max-width: 480px;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #CACACA;
    background: #FFF;
}
`;

export default GlobalStyle;
