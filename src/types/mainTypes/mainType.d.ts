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
    kilometers: string;
    statusOpen: string;
    time_open: string;
    time_close: string;
    saleOff: string;
    isFavorite: boolean;
  };