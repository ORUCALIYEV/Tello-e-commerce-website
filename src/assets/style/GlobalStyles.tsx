import { createGlobalStyle } from "styled-components";
import Reset from "./Reset";
import Typography from "./Typography";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
${Reset}
${Typography}
${Variables}
`;

export default GlobalStyle;
