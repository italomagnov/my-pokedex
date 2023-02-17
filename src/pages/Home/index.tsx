import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/btn-pokeball.svg';

export function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <input
                className="w-full px-4 py-2 rounded-lg outline-none shadow-lg"
                type="text"
                placeholder="Digite o ID ou o nome do pokemon"
            />
            <NavLink to="/">
                <img
                    src={pokeball}
                    alt=""
                />
            </NavLink>
        </div>
    );
}
