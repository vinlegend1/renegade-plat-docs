import React from 'react'
import allTheMoves from "../minjson/pokemonMoves.min.json";

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
            <h3>Move Learned by Level Up</h3>
            <p>{pokemonName} learns the following moves in Pokemon Renegade Platinum at the specified levels below.</p>
            <div className="label-group">
                <div className="learnset-label">Lv.</div>
                <div className="learnset-label">Move</div>
                <div className="learnset-label">Type</div>
                <div className="learnset-label">Cat.</div>
                <div className="learnset-label">Power</div>
                <div className="learnset-label">Acc.</div>
                <div className="learnset-label">Sec. Effect</div>
            </div>
            <div className="learnset-data-group">
                {learnset.map(({ level, move }, index) => {
                    const selectedMove = allTheMoves.find(m => m["Name"].toLowerCase() === move.toLowerCase())
                    // console.log("move: ", move)
                    // console.log("selectMove: ", selectedMove)
                    return (
                        <div key={move + index} className="pkmn-move-data">
                            <div>{level}</div>
                            <div>{move}</div>
                            <div>{selectedMove["Type"]}</div>
                            <div>{selectedMove["Cat."]}</div>
                            <div>{selectedMove["Att."]}</div>
                            <div>{selectedMove["Acc."]}</div>
                            <div>{selectedMove["secEffect"]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LearnsetCard
