import React from 'react'
import { statColours } from '../constants';

interface Props {
    HP: number;
    Atk: number;
    Def: number;
    SpA: number;
    SpD: number;
    Spe: number;
}

const getBarWidthPercent = (stat: number) => Math.floor((stat / 255) * 100);
const getBarColor = (barPercent: number): string => {
    if (barPercent > 62) return statColours.overpowered
    if (barPercent > 48) return statColours.excellent
    if (barPercent > 34) return statColours.good
    if (barPercent > 26) return statColours.ok
    if (barPercent > 23) return statColours.subpar
    return statColours.bad
}

const StatCard: React.FC<Props> = ({ HP, Atk, Def, SpA, SpD, Spe }) => {

    return (
        <div className="pkmn-base-stats">
            <div className="pkmn-stat">
                <p>HP</p>
                <p>{HP}</p>
                <div
                    style={{ width: `${getBarWidthPercent(HP)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(HP)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p>Attack</p>
                <p>{Atk}</p>
                <div
                    style={{ width: `${getBarWidthPercent(Atk)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Atk)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p>Defense</p>
                <p>{Def}</p>
                <div
                    style={{ width: `${getBarWidthPercent(Def)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Def)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p>Sp. Attack</p>
                <p>{SpA}</p>
                <div
                    style={{ width: `${getBarWidthPercent(SpA)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(SpA)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p>Sp. Defense</p>
                <p>{SpD}</p>
                <div
                    style={{ width: `${getBarWidthPercent(SpD)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(SpD)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p>Speed</p>
                <p>{Spe}</p>
                <div
                    style={{ width: `${getBarWidthPercent(Spe)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Spe)) }}
                />
            </div>
            <div className="pkmn-stat pkmn-total">
                <p>Total</p>
                <p>{HP + Atk + Def + SpA + SpD + Spe}</p>
            </div>
        </div>
    )
}

export default StatCard
