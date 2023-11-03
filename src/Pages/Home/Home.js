import React from 'react';
import Banner from './Banner/Banner';
import NewsFeed from './NewsFeed/NewsFeed';
import DiscoverBooks from './DiscoverBooks/DiscoverBooks';
import MyPassion from './MyPassion/MyPassion';
import JoinCommunity from './JoinCommunity/JoinCommunity';

const Home = () => {
    return (
        <div>
            <Banner/>
            <NewsFeed/>
            <DiscoverBooks/>
            <MyPassion/>
            <JoinCommunity/>
        </div>
    );
};

export default Home;