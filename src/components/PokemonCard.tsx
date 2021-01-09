import Link from 'next/link';
import React from 'react'
import { colours } from '../constants';

interface Props {
    imgSrc: string;
    name: string;
    nationalId: string;
    type1: string;
    type2: string;
    id: string;
}

const PokemonCard: React.FC<Props> = ({ imgSrc, name, nationalId, type1, type2, id }) => {

    return (
        <div className="pokemon-card" id={id}>
            <img src={imgSrc} className="pokemon-img" />
            <div className="pokemon-metadata">
                <div className="pokemon-id">{nationalId}</div>
                <Link href={`/pokedex/${id === "giratina-altered" ? "giratina" : id}`}><a className="pokemon-name">{name}</a></Link>
                <div className="pokemon-type">
                    <div className="pokemon-type1" style={{ color: colours[type1.toLowerCase()] }}>{type1}</div>
                    {type2 === "" ? null : (
                        <div className="pokemon-type2" style={{ color: colours[type2.toLowerCase()] }}>
                            {type2}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
