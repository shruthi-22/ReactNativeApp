interface Icons {
  [key: string]: {
    focused: string;
    outline: string;
  };
}

export const icons:Icons = {
  home: {
    focused: 'home',
    outline: 'home-outline',
  },
  workers: {
    focused: 'person-circle',
    outline: 'person-circle-outline',
  },
  operations: {
    focused: 'calendar',
    outline: 'calendar-outline',
  },
  finances: {
    focused: 'wallet',
    outline: 'wallet-outline',
  },
  settings: {
    focused: 'settings',
    outline: 'settings-outline',
  },
};
