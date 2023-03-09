import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
const MainNav =()=>{
    return(
        <header className={classes.header}>
            <div className={classes.log}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active}>All quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quotes' activeClassName={classes.active}>Add a quuote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default MainNav;