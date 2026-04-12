import { useEffect, useState } from "react";

export const DataFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { data, loading };
};
