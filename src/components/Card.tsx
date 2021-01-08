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
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
        </div>
    )
}

export default Card
