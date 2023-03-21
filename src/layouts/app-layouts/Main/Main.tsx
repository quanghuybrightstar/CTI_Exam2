import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Main.module.scss';
import React from 'react';
import { Select, Button } from 'antd';
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx('main-container')}>
      <div className="container">
        <div className='grid__row'>
            <Sidebar></Sidebar>

            
        </div>
      </div>
    </div>
  );
};

export default Main;
