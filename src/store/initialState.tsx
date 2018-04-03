import IStoreState from './IStoreState';

const initialState: IStoreState = {
  suggestions: {
    data: [],
    loading: false,
    error: null,
  }
};

export default initialState;
