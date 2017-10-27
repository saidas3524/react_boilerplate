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

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{news.title}</h3>
            </div>
            <div class="panel-body"> {news.message} </div>
        </div>
    );



};

export default NewsCard;