import { Route, Routes } from 'react-router-dom';
import { DefaultPage } from '../pages/DefaultPage';
import { Home } from '../pages/Home';

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
            </Route>
        </Routes>
    );
}

export default AppRoutes;
