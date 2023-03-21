import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import React from 'react';
import { Select, Button } from 'antd';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={'grid__column-3-12'}>
            <div className={cx('sidebar-container')}>
                <ul className={cx('category__list')}>
                    <li className={cx('category__item', 'category__item--active')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>All</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Fast Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Take-away</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                    <li className={cx('category__item')}>
                        <Image src={'/images/allProduct.png'} alt = 'All Product' width={32} height= {32}></Image>
                        <p className={cx('category__title')}>Chinese Food</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;