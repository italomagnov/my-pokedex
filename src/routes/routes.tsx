import { Route, Routes } from 'react-router-dom';
import { DefaultPage } from '../pages/DefaultPage';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
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
                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
