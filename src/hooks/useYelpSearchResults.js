import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (price) => {
  const [names, setNames] = useState([]);
  const [urls, setUrls] = useState([]);
  const [ids, setIds] = useState([]);

  const searchApi = async (p) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          location: "Temecula",
          price: `${p}`
        }
      });

      setNames(response.data.businesses.map(({ name }) => {
        return name;
      }));

      setUrls(response.data.businesses.map(({ image_url }) => {
        return image_url;
      }));

      setIds(response.data.businesses.map(({ id }) => {
        return id;
      }))

      console.log("Retrieved Business queries.");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchApi(price);
  }, []);

  return [names, urls, ids, setNames, setUrls, setIds];
};