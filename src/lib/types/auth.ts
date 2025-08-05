export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: "-3.6807";
      longitude: "-156.4041";
    };
    timezone: {
      offset: "-5:00";
      description: "Eastern Time (US & Canada), Bogota, Lima";
    };
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
