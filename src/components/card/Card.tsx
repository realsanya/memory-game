import React, { FC } from 'react'
import KarpovCoursesIcon from '../../assets/images/karpov.svg'
import './Card.css'

type CardProps = {
    data: TCard
    selectCard: (id: CardId) => void
}

export const Card: FC<CardProps> = (props) => {
    const { data, selectCard } = props
    const { id, src, isOpened, isSolved } = data

    const handleSelectCard = () => {
        selectCard(id)
    }

    if (isOpened) {
        return (
            <div className="card-wrapper card-wrapper--opened">
                <img src={src} alt="Карточка открыта" />
            </div>

        )
    }

    if (isSolved) {
        return (
            <div className="card-wrapper card-wrapper--solved" />
        )
    }

    return (
        <div className="card-wrapper" onClick={handleSelectCard}>
            <img src={KarpovCoursesIcon} alt="Карточка закрыта" />
        </div>
    )
}
