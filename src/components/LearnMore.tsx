import React from 'react'
import Card from './Card'

const LearnMore = () => {

    const dummyText = `bwigoiwehgowiejgewgwwegwegwengwog
    bwigoiwehgowiejgewgwwegwegwengwog
    bwigoiwehgowiejgewgwwegwegwengwog
    bwigoiwehgowiejgewgwwegwegwengwog
    bwigoiwehgowiejgewgwwegwegwengwog
    `

    const whatIsPokemonRenegadePlatinum = `
    Pokemon Renegade Platinum is a ROM hack of Pokemon Platinum. It utilizes a lot of the graphical and sound capabilities from the game. It is a retelling and an enhancement to Pokemon Platinum because of the new game mechanics implemented (up to Gen 6) and the game difficulty spike compared to the original main series games.
    `

    const whatIsRomHack = `
    ROM hacking is the process of modifying a ROM image or ROM file of a video game to alter the game's graphics, dialogue, levels, gameplay, and/or other elements.`

    const shouldYouPlayRenPlat = `
    Yes. Pokemon Renegade Platinum gives you a bigger pool of pokemon to use in a playthrough because it lessens the complexity of evolving some pokemon and gives you pokemon from previous gens right off the bat. The battles are much more challenging, and button mashing through the game might not be enough, especially on nuzlocke rules.
    `

    return (
        <div id="about">
            <Card imgSrc="/PKMNRenPlatLogo.svg" title="What is Pokemon Renegade Platinum" description={whatIsPokemonRenegadePlatinum} />
            <Card imgSrc="/romhackicon.svg" title="What is a ROM Hack?" description={whatIsRomHack} />
            <Card imgSrc="shouldyouplayicon.svg" title="Should You Play Renegade Platinum?" description={shouldYouPlayRenPlat} />
        </div>
    )
}

export default LearnMore
