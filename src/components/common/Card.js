import React from 'react';
import PropTypes from 'prop-types';




const Card = function ({ card }) {
    return (
        <div>
            {card &&
                <div>
                    <div className="card bordered">
                    {/* <button type="button" class="btn btn-default" aria-label="Right Align"> */}
                        <span className="glyphicon glyphicon-remove"></span>
                    {/* </button> */}
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