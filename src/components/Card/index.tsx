import { useState } from 'react';

const typeColors = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-600',
    rock: 'bg-gray-500',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-500',
    dark: 'bg-gray-800',
    steel: 'bg-gray-600',
    fairy: 'bg-pink-300',
};

export function Card(pokemon: any) {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const typeClass = pokemon.types[0].type.name;

    const bgColor = typeColors[typeClass];

    return (
        <div
            className={`w-full flex items-start justify-center ${bgColor} rounded-3xl py-2 shadow-lg cursor-pointer ${
                expanded ? 'h-80 shadow-lg' : 'h-auto'
            }`}
            onClick={handleToggle}
        >
            {!expanded && (
                <div className="w-full flex items-center justify-center gap-6">
                    <div className="text-center">
                        <p className="text-lg font-bold text-white pb-2">
                            {pokemon.name.toUpperCase()}
                        </p>
                        <div className="flex flex-col gap-2">
                            {pokemon.types.map(
                                (typeInfo: any, index: number) => (
                                    <p
                                        className="bg-white bg-opacity-40 text-white rounded-full px-4 py-1"
                                        key={index}
                                    >
                                        {typeInfo.type.name}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                    <img
                        className="w-40"
                        src={
                            pokemon.sprites.other['official-artwork']
                                .front_default
                        }
                        alt={pokemon.name}
                    />
                </div>
            )}

            {expanded && (
                <>
                    <div className="relative w-full flex flex-col items-center justify-center py-4">
                        <p className="text-2xl font-bold text-white pb-2">
                            {pokemon.name.toUpperCase()}
                        </p>
                        <div className="w-full text-center z-10">
                            <div className="flex items-center justify-center gap-2">
                                {pokemon.types.map(
                                    (typeInfo: any, index: number) => (
                                        <p
                                            className={`bg-white bg-opacity-40 text-white rounded-full px-4 py-1`}
                                            key={index}
                                        >
                                            {typeInfo.type.name}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                        <img
                            className="w-64 z-10"
                            src={
                                pokemon.sprites.other['official-artwork']
                                    .front_default
                            }
                            alt={pokemon.name}
                        />

                        <div className="absolute w-full h-auto top-60 bg-white rounded-3xl shadow-lg">
                            <div className="flex flex-col justify-center gap-4 px-8 py-12">
                                <p className="text-base font-extrabold">
                                    Sobre
                                </p>
                                {pokemon.stats.map(
                                    (stats: any, index: number) => (
                                        <div
                                            className="flex items-center justify-between"
                                            key={index}
                                        >
                                            <p className="text-sm font-light">
                                                {stats.stat.name}
                                            </p>

                                            <span className="text-lg">
                                                {stats.base_stat}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
