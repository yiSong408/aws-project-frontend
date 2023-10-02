import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import ErrorPage from "./page/ErrorPage";
import CommentPage from "./page/CommentPage";
import Register from "./page/Register";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/home'} element={<Homepage />}></Route>
                <Route path={'/comment'} element={<CommentPage />}></Route>
                <Route path={'/login'} element={<Login />}></Route>
                <Route path={'/register'} element={<Register />}></Route>
                <Route path={'*'} element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
