import { injectGlobal } from 'emotion';
import * as fontFiles from './fonts';

export default injectGlobal`
 
  @font-face {
    font-family: "Museo-Light";
    src: url(${fontFiles.MuseoLight}) format("woff"); 
  }
  @font-face{
    font-family: "Museo-Normal";
    src: url(${fontFiles.MuseoNormal}) format("woff");
  }
  @font-face{
    font-family: "Museo-Bold";
    src: url(${fontFiles.MuseoBold}) format("woff");
  }
 * {
    box-sizing: border-box;
    font-family: Museo-Normal;
  }
  h1{
    font-family: Museo-Normal;
  }
  a {
    color: #bfde63;
  }
  a:hover{
    color: #bfde63;
  }
`;
