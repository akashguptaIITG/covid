export interface IDistrict {
  state: string;
  district: string;
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
