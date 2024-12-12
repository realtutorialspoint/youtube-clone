import React from 'react'
import './card.css'
import cards from '../../assets/cards'

const Card = () => {
    return (
        <>
            {cards.map((card, index) => (
                <div className="cardContainer">

                    <div className='cardImage'>
                        <img src={card.cardImage} alt="card-image" />
                    </div>

                    <div className='cardInfo'>

                        <div className="cardOwner">
                            <img src={card.userImage} alt="user-icon" />
                        </div>

                        <div className="cardTitles">

                            <div className="cardHeroTitle">
                                <h2>{card.cardTitle}</h2>
                            </div>
                            <div className="cardOwnerTitle">
                                <h4>{card.cardOwner}</h4>
                            </div>
                            <div className="cardStats">
                                <h6>{card.cardStats}</h6>
                            </div>

                        </div>

                    </div>

                </div>
            ))}
        </>
    )
}

export default Card