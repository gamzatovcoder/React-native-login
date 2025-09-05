export interface cartTariff {
  tariffNumber: number;
  price: number;
  specifications: {
    speed: string | false;
    tv: string | false;
    repair: string | false;
  };
}
