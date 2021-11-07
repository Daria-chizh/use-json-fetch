import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url, opts)
      .then((res) => res.json())
      .then((parsed) => setData(parsed))
      .catch(() => setError(true))
      .then(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}
