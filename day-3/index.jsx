import {createRoot} from "react-dom/client";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

const root = createRoot(document.getElementById("root"));


function Page(){
    return(
       <section>
        <Navbar/>
        <Main/>
       </section>
    )
}




root.render(
  <Page/>
)