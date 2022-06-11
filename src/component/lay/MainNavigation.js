import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/favourte-contexts";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Angela</div>

      <nav>
        <ul>
       
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
