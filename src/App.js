
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './CRUD/components/RootLayout';
import ErrorPage from './CRUD/pages/ErrorPage';
import EditPost from './CRUD/pages/EditPost';
import Detail from './CRUD/pages/Detail';
import Feed from './CRUD/components/Feed';
import { Provider } from 'react-redux';
import store from './CRUD/store/index';
import InsertPost from './CRUD/pages/InsertPost';


function App() {
  
  const postParamHandler = ({ params }) => {
    
    if(isNaN(params.id)){
      throw new Response("Bad Request", {
        statusText : "Please, make sure to insert correct post id",
        status: 400,
      });
    }
    return params.id;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true , element: <Feed />},
        {path: "post/add", element: <InsertPost/>},
        {path: "post/:id/edit", element: <EditPost />, loader: postParamHandler},
        {path: "post/:id", element: <Detail />, loader: postParamHandler}
        ]
    }
  ])

  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
