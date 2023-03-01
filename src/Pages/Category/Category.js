import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>{categoryNews.name}</h2>
            {categoryNews.map(news => <NewsSummaryCard
            key={news._id}
            news={news}
            ></NewsSummaryCard>)}
        </div>
    );
};

export default Category;