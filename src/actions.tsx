import store from './store';

export const search = async (query: string) => {
  const iQuery = query.toLowerCase();
  return {
    locations: store.locations.filter(location => location.name.toLowerCase().includes(iQuery)),
    users: store.users.filter(user => user.user.toLowerCase().includes(iQuery))
  };
};
