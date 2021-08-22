import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default (id) => {
  const [name, setName] = useState();
  const [rating, setRating] = useState();
  const [phone, setPhone] = useState();
  const [imageUrl, setImageUrl] = useState();
  const searchApi = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      const { data } = response;
      const { name, rating, display_phone, image_url} = data;
      setName(name);
      setRating(rating);
      setPhone(display_phone);
      setImageUrl(image_url);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    searchApi();
  }, []);

  return [name, rating, phone, imageUrl];
}