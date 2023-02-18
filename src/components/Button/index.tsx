import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/btn-pokeball.svg';

type ButtonProps = {
    pathTo: string;
};

export function Button({ pathTo }: ButtonProps) {
    return (
        <NavLink to={pathTo}>
            <img
                src={pokeball}
                alt="imagem de uma pokebolla"
            />
        </NavLink>
    );
}
