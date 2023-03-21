import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import Header from './Header';
import { Layout } from 'antd';
import Main from './Main';
import Slider from './Slider';
import Footer from './Footer';

const cx = classNames.bind(styles);

const AppLayout = () => {
  return (
    <Layout>
      <div className={cx('app_container')}>
        <Header></Header>
        <Slider></Slider>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default AppLayout;
