import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import SuggestionVideos from './SuggestionVideos';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const videoId = searchParams.get("v");

  return (
    <div className="w-full mt-20 flex flex-col lg:flex-row">
      {/* Video + Comments Section */}
      <div className="w-full lg:w-[65%]">
        {/* Video Player */}
        <div className="px-4 lg:px-5 w-full">
          <iframe
            className="w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[64vh]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Comments */}
        <div className="px-4 lg:px-5">
          <CommentsContainer vid={videoId} />
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="w-full lg:w-[35%] px-4 mt-4 lg:mt-0">
        <SuggestionVideos />
      </div>
    </div>
  );
};

export default WatchPage;
