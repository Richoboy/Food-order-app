import { Fragment } from 'react';
import mealpic from "../../assets/meal pic1.jpg";
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealpic} alt="A tasty & spicy meal!" />
        </div>
    </Fragment>
  )
}

export default Header