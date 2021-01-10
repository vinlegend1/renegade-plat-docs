import React from 'react'
import { colours } from '../constants';
import allTheMoves from "../minjson/pokemonMoves.min.json";
import Link from "next/link"

interface Props {
    pokemonName: string;
    learnset: {
        level: number;
        move: string;
    }[];
}

const LearnsetCard: React.FC<Props> = ({ pokemonName, learnset }) => {

    return (
        <div className="pkmn-learnset">
            <h3>Moves Learned by Level Up</h3>
            <p>{pokemonName} learns the following moves in Pokemon Renegade Platinum at the specified levels below.</p>
            <div className="label-group">
                <div className="learnset-label level-label">Lv.</div>
                <div className="learnset-label move-label">Move</div>
                <div className="learnset-label type-label">Type</div>
                <div className="learnset-label cat-label">Cat.</div>
                <div className="learnset-label att-label">Power</div>
                <div className="learnset-label acc-label">Acc.</div>
                {/* <div className="learnset-label">Sec. Effect</div> */}
            </div>
            <div className="learnset-data-group">
                {learnset.map(({ level, move }, index) => {
                    const selectedMove = allTheMoves.find(m => m["Name"].toLowerCase() === move.toLowerCase())
                    // console.log("move: ", move)
                    // console.log("selectMove: ", selectedMove)
                    return (
                        <div key={move + index} className="pkmn-move-data">
                            <div className="pkmn-move-level">{level}</div>
                            <Link href={`/moves/${move.toLowerCase().replace(" ", "-")}`}><a className="pkmn-move-move">{move}</a></Link>
                            <div className="pkmn-move-type" style={{ background: colours[selectedMove["Type"].toLowerCase()] }}>{selectedMove["Type"]}</div>
                            <div className="pkmn-move-cat">{selectedMove["Cat."]}</div>
                            <div className="pkmn-move-att">{selectedMove["Att."]}</div>
                            <div className="pkmn-move-acc">{selectedMove["Acc."]}</div>
                            {/* <div>{selectedMove["secEffect"]}</div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LearnsetCard
