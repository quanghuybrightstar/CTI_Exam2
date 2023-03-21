import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Header.module.scss';
import React from 'react';
import { Select, Button } from 'antd';
import Input from 'rc-input';
import { GoSearch } from 'react-icons/go';

const cx = classNames.bind(styles);
const { Option } = Select;

const Header: React.FC = () => {
  const cityList = [
    {
      value: '1',
      label: 'Ha noi',
    },
    {
      value: '2',
      label: 'TP.HCM',
    },
    {
      value: '3',
      label: 'Da Nang',
    },
    {
      value: '4',
      label: 'Nam Dinh',
    },
    {
      value: '5',
      label: 'Hoi An',
    },
  ];

  return (
    <div className={cx('header_container')}>
      <div className={cx('container-inner')}>
        <a href="#" className={cx('header_logo')}>
          <Image
            src="/images/logo.png"
            alt="Logo Capachi"
            width={138}
            height={41}
          />
        </a>
        <ul className={cx('header__nav')}>
          <li className={cx('nav__item')}>
            <Select
              showSearch
              className={cx('select')}
              placeholder="Chọn thành phố"
              defaultValue={'Ha noi'}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={cityList}
            />
          </li>

          <li className={cx('input-wrap')}>
            <GoSearch className={cx('search-icon')} />
            <Input
              className={cx('nav__input')}
              placeholder="Nhập từ khóa ... "
            ></Input>
          </li>

          <li className={cx('nav__item')}>
            <Button className={cx('submit-btn')}>Order</Button>
          </li>

          <li className={cx('nav__item')}>
            <Select
              className={cx('select')}
              defaultValue = {
                'EN'
              }
              placeholder="Chọn ngôn ngữ"
              optionFilterProp="children"
            >
              <Option className = {cx('language-options')}>
                <Image
                  src={'/images/english.png'}
                  alt="English Langague"
                  width={28}
                  height={20}
                />
                
                <label className={cx('language__label')}>EN</label>
              </Option>

              <Option className = {cx('language-options')}>
                <Image
                  src={'/images/vietnamese.png'}
                  alt="VietNamese Langague"
                  width={28}
                  height={20}
                />
                
                <label className={cx('language__label')}>VIE</label>
              </Option>
            </Select>
          </li>

          <li className={cx('nav__item')}>
            <a href="#" className={cx('nav__login')}>Đăng nhập</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
