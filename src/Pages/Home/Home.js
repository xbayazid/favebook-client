import React from 'react';
import Banner from './Banner/Banner';
import NewsFeed from './NewsFeed/NewsFeed';
import DiscoverBooks from './DiscoverBooks/DiscoverBooks';
import MyPassion from './MyPassion/MyPassion';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import PostsModal from '../../components/PostsModal/PostsModal';

const Home = () => {
    return (
        <div>
            <Banner/>
            <NewsFeed/>
            <DiscoverBooks/>
            <MyPassion/>
            <JoinCommunity/>
            <PostsModal />
        </div>
    );
};

export default Home;