import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {


  
  

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h1 className={classes.h1}> {props.description}</h1>
        </div>
       
      </Card>
    </li>
  );
}

export default MeetupItem;
