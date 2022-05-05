import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';
import Login from '../Login/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </BrowserRouter>
     )

}

export default AppRouter;