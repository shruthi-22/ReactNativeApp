interface Icons {
  [key: string]: {
    outline: string;
    focused: string;
  };
}

export const icons: Icons = {
  Home: {
    outline: 'home-outline',
    focused: 'home',
  },
  Contacts: {
    outline: 'people-outline',
    focused: 'people',
  },
  'My Trips': {
    outline: 'bus-outline',
    focused: 'bus',
  },
  Transfer: {
    outline: 'wallet-outline',
    focused: 'wallet',
  },
  Books: {
    outline: 'library-outline',
    focused: 'library',
  },
};
