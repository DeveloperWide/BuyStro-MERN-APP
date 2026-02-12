import axios from "axios";
import { useEffect } from "react";

const Wishlist = () => {
  useEffect(() => {
    axios
      .get("/wishlist/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Wishlist</div>;
};

export default Wishlist;
