import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen"
import HomeScreen from "../screens/HomeScreen"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/Favorites" element={<FavoritesScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes