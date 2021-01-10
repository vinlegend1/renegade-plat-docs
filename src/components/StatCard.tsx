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
    if (barPercent > 60) return statColours.overpowered
    if (barPercent > 48) return statColours.excellent
    if (barPercent > 34) return statColours.good
    if (barPercent > 26) return statColours.ok
    if (barPercent > 23) return statColours.subpar
    return statColours.bad
}

const StatCard: React.FC<Props> = ({ HP, Atk, Def, SpA, SpD, Spe }) => {

    return (
        <div className="pkmn-base-stats">
            <h3>Base Stats</h3>
            <div className="pkmn-stat">
                <p className="stat-name">HP</p>
                <p className="stat-value">{HP}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(HP)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(HP)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p className="stat-name">Attack</p>
                <p className="stat-value">{Atk}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(Atk)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Atk)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p className="stat-name">Defense</p>
                <p className="stat-value">{Def}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(Def)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Def)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p className="stat-name">Sp. Attack</p>
                <p className="stat-value">{SpA}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(SpA)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(SpA)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p className="stat-name">Sp. Defense</p>
                <p className="stat-value">{SpD}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(SpD)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(SpD)) }}
                />
            </div>
            <div className="pkmn-stat">
                <p className="stat-name">Speed</p>
                <p className="stat-value">{Spe}</p>
                <div
                    className="stat-bar"
                    style={{ width: `${getBarWidthPercent(Spe)}%`, height: "1rem", borderRadius: "10px", backgroundColor: getBarColor(getBarWidthPercent(Spe)) }}
                />
            </div>
            <div className="pkmn-stat pkmn-total">
                <p className="stat-name">Total</p>
                <p className="stat-value">{HP + Atk + Def + SpA + SpD + Spe}</p>
            </div>
        </div>
    )
}

export default StatCard
