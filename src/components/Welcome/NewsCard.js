import React from 'react';

const NewsCard = ({ news }) => {
    return (
        // <div className="card">
        //     <div class="card">
        //         <div class="card-header">
        //             {news.title}
        //         </div>
        //         <div className="card-block">
        //             <p className="card-text">{news.message}</p>
        //         </div>
        //     </div>
        // </div>

        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{news.title}</h3>
            </div>
            <div className="panel-body"> {news.message} </div>
        </div>
    );



};

export default NewsCard;