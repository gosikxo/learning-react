import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <span className={styles.logo}>
              <Switch>
                <Route exact path='/info' component={() => <Icon name={settings.info.icon} />} />
                <Route exact path='/faq' component={() => <Icon name={settings.faq.icon} />} />
                <Route path='/' component={() => <Icon name='cat' />} />
              </Switch>
            </span>
            <Search/>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;