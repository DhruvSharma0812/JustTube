import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from '../src/components/MainContainer'
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";

function App() {

  const appRouter = createBrowserRouter ([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },

        {
          path: "watch",
          element: <WatchPage />
        }, 
        
        {
          path: "results",
          element: <Results />
        }
      ]
    }
  ])

  return (
    <div className="">
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
