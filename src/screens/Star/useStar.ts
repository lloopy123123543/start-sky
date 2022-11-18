import { useEffect, useState } from "react";
import { getRandomInt } from "../../functions/function";

export interface IStarViewProps{
  star: any;
  isView: boolean;
}
export interface IStarProps{
  star: any;

}

const useStar = (props: IStarProps): IStarViewProps => {
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
    star: props.star,
    isView,
  };
};

export default useStar;
