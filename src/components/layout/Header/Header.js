import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Phone from '../Phone/Phone';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    number: PropTypes.string,
  }

  getNumbers(){
    const currentTime = new Date().getUTCHours();
    console.log(currentTime);

    if (currentTime >= 8 && currentTime <= 12) {
      return  'Amanda, 678.243.8455';
    } else if (currentTime > 12 && currentTime <= 16) {
      return  'Tobias, 278.443.6443';
    } else if (currentTime > 16 && currentTime < 22) {
      return  'Helena, 167.280.3970';
    } else {
      return  'The office opens at 8:00 UTC';
    }
  }

  render(){
    let number = this.getNumbers();
    console.log(number);
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <Link to='/'>
                <div className={styles.logo}>
                  <Icon name='compass' />
                  <span className={styles.name}>Travel Agency</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to='/trips' activeClassName='active'>Trips</NavLink>
                <NavLink to='/countries' activeClassName='active'>Countries</NavLink>
                <NavLink to='/regions' activeClassName='active'>Regions</NavLink>
                <NavLink to='/info' activeClassName='active'>Contact</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name='phone' />
                <Phone number={number}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
