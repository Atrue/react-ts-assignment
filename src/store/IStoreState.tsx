export interface ILocation {
  id: number,
  name: string,
  country: string,
  zone: string,
  country_id: string,
  count: number
}

export default interface IStoreState {
  suggestions: {
    data: ILocation[],
    loading: boolean,
    error: string | null,
  }
}
