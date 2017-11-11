import React, { Component } from 'react';

import NewsCard from './NewsCard';



const NewsFeed = ({ newsFeed }) => {
    return (
        <div className="row">
           
            { newsFeed && 
                <div>
                <h3 className="col-xs-12">News and Alerts</h3>
                <div className="col-xs-12">
                    { newsFeed.map((news) => {
                        return <NewsCard key={news.MessageId} news={news} />
                    })}
                </div>
                </div>
            }
        </div>
    );
};

export default NewsFeed;