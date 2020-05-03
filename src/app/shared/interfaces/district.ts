export interface IDistrict {
  confirmed: number;
  deceased: number;
  recovered: number;
  active: number;
  delta: {
    confirmed: number;
    deceased: number;
    recovered: number;
  };
}
