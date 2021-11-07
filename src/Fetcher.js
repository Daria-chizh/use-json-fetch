import React from 'react';
import useJsonFetch from './useJsonFetch';

const Fetcher = (props) => {
  const [data, loading, error] = useJsonFetch(props.url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{data.status}</div>;
};

export default Fetcher;
