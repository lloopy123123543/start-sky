import { useEffect, useState } from "react";
import { getRandomInt } from "../../functions/function";

const useStar = (star) => {
const [isView, setIsView] = useState(false);

useEffect(() => {
  return () => {
    setIsView(false);
  }
}, [])

useEffect(() => {
  return () => {
    setTimeout(() => {setIsView(true)}, getRandomInt(1000, 10000));
  }
}, [])

  return {
    star,
    isView,
  };
};

export default useStar;
