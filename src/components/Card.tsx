import React from 'react'

interface Props {
    imgSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<Props> = ({ description, imgSrc, title }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={title} className="card-img" />
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
        </div>
    )
}

export default Card
