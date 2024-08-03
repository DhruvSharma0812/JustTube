# justTube

justTube is a clone of the popular video-sharing platform YouTube, developed as part of Akshay Saini's Namaste React course. Built with modern front-end technologies like React, Redux Toolkit, TailwindCSS, and other libraries, justTube replicates the UI design and functionalities of YouTube.

## Features
- YouTube Clone: justTube is a replica of the YouTube platform, mirroring its UI design and functionalities.
- YouTube Video List: Displays a paginated list of YouTube videos fetched from the YouTube API, with lazy loading for enhanced performance.
- YouTube Video Preview: Clicking on a video in the list opens a preview window with the video, including its title, description, and view count.
- Search Suggestions: As the user types in the search bar, a dropdown list of suggested search queries is displayed, enhancing the user experience and easing video 
  discovery.
- Search Caching: To improve performance and reduce API calls, justTube caches the results of previous searches. Repeat queries fetch results from the cache        
  instead of making new API calls.
- Optimized Search Using Debouncing and Caching: Debouncing optimizes the search functionality by waiting for the user to stop typing before making an API call.      Caching fetches results faster for previous searches.
- Optimized API Calls Using Debouncing: Debouncing is used throughout the app to reduce API calls and improve performance. For example, additional videos are       
  fetched only after the user has stopped scrolling.
- Comments on YouTube: Includes a comments section where users can view and post comments on videos. Comments are fetched from the YouTube API and displayed in a 
  threaded view for better readability.
- N-Level Deep Comments Using Recursion: Supports nested comments up to any level of depth, implemented using recursion for an intuitive and organized comment        structure.
- Live Chat on YouTube: Features a live chat that allows users to view and send messages in real-time. Implemented with API polling, the app regularly fetches new    messages and updates the UI accordingly.


## To use this project, follow these steps:
- Clone the repository.
- Install the dependencies using npm install.
- Create a .env file in the root directory and add your YouTube API key as GOOGLE_API_KEY=<your-api-key>.
- Start the development server using npm start.
- Open your web browser and navigate to http://localhost:3000.

## Issues Faced
Handling Live API for Live Chat: Implementing live chat required dealing with real-time data, which posed challenges. Data polling was used to fetch live chat data continuously and update the UI seamlessly.
Optimizing Search Functionality: Ensuring efficient and responsive search recommendations involved using debouncing to skip unnecessary API calls and caching to reduce latency.

## Conclusion
justTube demonstrates how to build a modern web application using React, Redux Toolkit, TailwindCSS, and other libraries. The project includes features like search suggestions, search caching, optimized search and API calls using debouncing, a comments section, live chat, and deep nested comments using recursion. These features not only replicate YouTube's functionalities but also showcase techniques applicable to any large-scale web application.

## Dependencies
This project uses the following dependencies:
- React
- Redux Toolkit
- React Router DOM
- TailwindCSS
These dependencies are listed in the package.json.
