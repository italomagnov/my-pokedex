import { Route, Routes } from 'react-router-dom';
import { DefaultPage } from '../pages/DefaultPage';
import { Home } from '../pages/Home';
import { Pokemon } from '../pages/Pokemon';

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<DefaultPage />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="pokemon/:id"
                    element={<Pokemon />}
                />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
