export interface IState {
  active: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  deltaconfirmed: number;
  deltarecovered: number;
  deltdeaths: number;
  state: string;
  statecode: string;
  statenotes: string;
}
