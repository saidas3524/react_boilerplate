import React from 'react';
import PropTypes from 'prop-types';




const Card = function ({ card }) {
    return (
        <div>
            {card &&
                <div>
                    <div className="card bordered">
                        <span className="glyphicon glyphicon-remove"></span>
                        <div className="card-block">
                            This is some text within a card block.
                         </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;