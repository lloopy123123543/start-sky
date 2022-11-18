import React, {Fragment} from "react";
import styles from './Moon.module.scss';
import {ReactComponent as IconMoon} from "../../icons/moon.svg"
import { IMoonProps } from "./useMoon";


const MoonView = (props: IMoonProps) => {
  const {} = props;
  return (
  <div className={styles._}>
    <div className={styles.block}></div>
    <div className={styles.light}></div>
    <IconMoon fill="#f7ca26" height={72} width={72} />
  </div>
  );
};

export default MoonView;
