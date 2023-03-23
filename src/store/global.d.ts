interface ICityList {
  value: string;
  label: string;
}

interface ICategoryItem {
  id: number;
  urlImage: string;
  name: string;
}

interface IRestaurantItem {
  id: number;
  urlImage: string;
  name: string;
  address: string;
  statusOpen: string;
  time_open: string;
  time_close: string;
  saleOff: string;
  isFavorite: boolean;
};

interface IInfoCompanyItem {
  id: number,
  title: string,
};

interface ISocialLink {
  id: number,
  urlImage: string,
  link: string,
}
