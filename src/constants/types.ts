export interface cartTariff {
  tariffNumber: any;
  price: number;
  specifications: {
    speed: string | false;
    tv: string | false;
    repair: string | false;
  };
}
