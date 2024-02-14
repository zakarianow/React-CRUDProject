import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height: '100vh', flexDirection:'column'}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>status Text : {error.statusText || error.message}</i><br />
        <i>status code : {error.status}</i><br />
        <i>status description : {error.data}</i>
      </p>
    </div>
  );
}

export default ErrorPage
