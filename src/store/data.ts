//Url Image of Sliders
export const slider1URLImg = '/images/sliders/slider1.png';
export const slider2URLImg = '/images/sliders/slider2.jpg';
export const slider3URLImg = '/images/sliders/slider3.jpg';

//Url Image of Categories
const allURLImg = '/images/categories/allProduct.jpg';
const fastFoodURLImg = '/images/categories/fast-food.jpg';
const chineseFoodURLImg = '/images/categories/chinese-food.jpg';
const coffeeURLImg = '/images/categories/coffee.jpg';
const freeShipURLImg = '/images/categories/coffee.jpg';
const giftURLImg = '/images/categories/gift.jpg';
const japaneseFoodURLImg = '/images/categories/japanese-food.jpg';
const milkURLImg = '/images/categories/milk.jpg';
const pizzaURLImg = '/images/categories/pizza.jpg';
const sweetURLImg = '/images/categories/sweet.jpg';
const takeAwayURLImg = '/images/categories/take-away.jpg';
const vegetarianURLImg = '/images/categories/vegetarian.jpg';
const vourcherURLImg = '/images/categories/vourcher.jpg';

//Url Image of Restaurants
const restaurant1URLImg = '/images/restaurants/restaurant1.jpg';
const restaurant2URLImg = '/images/restaurants/restaurant1.jpg';
const restaurant3URLImg = '/images/restaurants/restaurant1.jpg';
const restaurant4URLImg = '/images/restaurants/restaurant1.jpg';

//
export const bookingURLImg = '/images/booking.jpg';

//
export const iosURLImg = '/images/ios.JPG';
export const androidURLImg = '/images/android.JPG';
//
export const privacyURLImg = '/images/privacy.jpg';
//
export const capichiLogoURLImg = '/images/capichi.jpg';
//Socials
const instagramURLImg = '/images/socials/instagram.jpg';
const facebookURLImg = '/images/socials/facebook.jpg';
const googleURLImg = '/images/socials/google.jpg';

//Data of city
export const cityList: ICityList[] = [
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

// Data of Category
export const dataCategories: ICategoryItem[] = [
  {
    id: 1,
    urlImage: allURLImg,
    name: 'All',
  },
  {
    id: 2,
    urlImage: fastFoodURLImg,
    name: 'Fast food',
  },
  {
    id: 3,
    urlImage: takeAwayURLImg,
    name: 'Take-away',
  },
  {
    id: 4,
    urlImage: chineseFoodURLImg,
    name: 'Chinese food',
  },
  {
    id: 5,
    urlImage: japaneseFoodURLImg,
    name: 'Japanese food',
  },
  {
    id: 6,
    urlImage: vourcherURLImg,
    name: 'Vourcher',
  },
  {
    id: 7,
    urlImage: vegetarianURLImg,
    name: 'Vegetarian',
  },
  {
    id: 8,
    urlImage: coffeeURLImg,
    name: 'Coffee',
  },
  {
    id: 9,
    urlImage: pizzaURLImg,
    name: 'Pizza',
  },
  {
    id: 10,
    urlImage: giftURLImg,
    name: 'Gift',
  },
  {
    id: 11,
    urlImage: sweetURLImg,
    name: 'Sweet',
  },
  {
    id: 12,
    urlImage: milkURLImg,
    name: 'Milk',
  },
  {
    id: 13,
    urlImage: freeShipURLImg,
    name: 'Freeship',
  },
];

//Data of Restaurant List

export const dataRestaurants = [
  {
    id: 1,
    urlImage: restaurant1URLImg,
    name: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)',
    statusOpen: 'Đang mở cửa',
    time_open: '08:30',
    time_close: '10:00',
    saleOff: '20%',
    isFavorite: true,
  },
  {
    id: 2,
    urlImage: restaurant2URLImg,
    name: 'Peppo restaurant',
    address: `12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)`,
    statusOpen: 'Đang mở cửa',
    time_open: '08:30',
    time_close: '10:00',
    saleOff: '20%',
    isFavorite: true,
  },
  {
    id: 3,
    urlImage: restaurant3URLImg,
    name: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)',
    statusOpen: 'Đang mở cửa',
    time_open: '08:30',
    time_close: '10:00',
    saleOff: '20%',
    isFavorite: true,
  },
  {
    id: 4,
    urlImage: restaurant4URLImg,
    name: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)',
    statusOpen: 'Đang mở cửa',
    time_open: '08:30',
    time_close: '10:00',
    saleOff: '20%',
    isFavorite: true,
  },
];

//Info Company
export const infoCompany: IInfoCompanyItem[] = [
  {
    id: 1,
    title: 'Giới thiệu & liên hệ',
  },
  {
    id: 2,
    title: 'Trung tâm trợ giúp',
  },
  {
    id: 3,
    title: 'Quy chế',
  },
  {
    id: 4,
    title: 'Điều khoản sử dụng',
  },
  {
    id: 5,
    title: 'Bảo mật thông tin',
  },
  {
    id: 6,
    title: 'Giải quyết khiếu nại',
  },
  {
    id: 7,
    title: 'Hợp tác viên giao nhận',
  },
  {
    id: 8,
    title: 'Đăng ký quán',
  },
  {
    id: 9,
    title: 'Ứng dụng Capichi',
  },
];

export const addressCompany: IInfoCompanyItem[] = [
  {
    id: 1,
    title: 'Công ty cổ phần Capichi',
  },
  {
    id: 2,
    title:
      'Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường Cầu giấy, quận Cầu Giấy, Hà Nội',
  },
  {
    id: 3,
    title:
      'Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021',
  },
];

//
export const socialConnect: ISocialLink[]  = [ 
    {
        id: 1,
        urlImage: facebookURLImg,
        link: 'facebook.com',
    }, 
    {
        id: 2,
        urlImage: instagramURLImg,
        link: 'instagram.com',
    }, 
    {
        id: 3,
        urlImage: googleURLImg,
        link: 'google.com',
    },
]
