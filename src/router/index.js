import { Routes, Route } from "react-router-dom";
import CeBooks from "../pages/Cebooks";
import Ftshirts from "../pages/Ftshirts";
import Btextbooks from "../pages/Btextbooks";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Createbooks from "../pages/Createbooks";
import Bookedit from "../pages/Bookedit";
import DisplayBooks from "../pages/Displaybooks";
import Maindisplay from "../pages/Maindisplay";


function MyRouter(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c-eBooks" element={<CeBooks />} />
            <Route path="/free-tshirts" element={<Ftshirts />} />
            <Route path="/browse-textbooks" element={<Btextbooks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create-books" element={<Createbooks />} />
            <Route path="/books" element={<Maindisplay />} />
            <Route path="/:id/edit" element={<Bookedit />} />
            <Route path="/:id/view" element={<DisplayBooks />} />
        </Routes>
    )
}

export default MyRouter;