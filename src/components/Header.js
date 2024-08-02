import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { LOGO, YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${searchQuery}`); // Navigate to Results page with search query
    }
  };

  useEffect(() => {
    const getSearchSuggestions = async () => {
      if (!searchQuery) {
        setSuggestions([]);
        return;
      }
      try {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1] || []);
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/results?search_query=${suggestion}`);
  };

  return (
    <div className='grid grid-flow-col p-3 shadow-lg bg-white items-center'>
      {/* Left Section with Hamburger Logo and Youtube Logo */}
      <div className='flex items-center col-span-1 gap-4'>
        <img
          onClick={toggleMenuHandler}
          className='h-6 cursor-pointer'
          src={LOGO}
          alt="Youtube Hamburger img"
        />

        <a href="/">
          <img
            className='h-6 cursor-pointer'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
          />
        </a>
      </div>

      {/* Middle Section with Search Bar and Search Icon */}
      <div className="col-span-10 z-20">
        <div className='flex justify-center items-center'>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 p-2 px-5 border border-gray-700 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={handleSearch}
            className="p-3 bg-gray-100 hover:bg-gray-300 border border-gray-700 rounded-r-3xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img className='h-4' src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="Search Icon" />
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className='absolute w-[36.9%] left-[34.33333%] bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((s) => (
                <li 
                  key={s} 
                  onMouseDown={() => handleSuggestionClick(s)}
                  className='flex cursor-pointer items-center gap-2 py-2 px-3 shadow-sm hover:bg-gray-100'>
                  <img className='h-4' src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="Search Icon" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Last Section with User icon */}
      <div className='col-span-1'>
        <lord-icon
          src="https://cdn.lordicon.com/hrjifpbq.json"
          trigger="hover">
        </lord-icon>
      </div>
    </div>
  );
};

export default Header;
