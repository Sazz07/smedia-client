import React from 'react';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import SharePost from '../../SharePost/SharePost';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <div>
      <div className="flex py-5">
        <div className="hidden lg:block w-[20%]">
          <LeftSideNav />
        </div>
        <div className="lg:w-[60%] w-full">
          <SharePost />
          <Posts></Posts>
        </div>
        <div className="hidden  lg:block w-[20%]">
          <RightSideNav />
        </div>
      </div>
    </div>
    );
};

export default Home;