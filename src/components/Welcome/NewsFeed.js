import React, { Component } from 'react';

import NewsCard from './NewsCard';



const NewsFeed = ({newsFeed}) => {
    return (
        <div className="col-xs-12">
            {newsFeed.map((news) => {
                                return <NewsCard key={news.Id} news={news}/>
                            })}
        </div>
    );
};

export default NewsFeed;