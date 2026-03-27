import classes from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }) => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink to="/" className={getActiveClass}>Home</NavLink>
                <NavLink to="/todo" className={getActiveClass}> ToDo</NavLink>
            </div>
        </header>
    )
}