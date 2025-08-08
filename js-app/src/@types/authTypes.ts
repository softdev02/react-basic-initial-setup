export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  token: string;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string; // Optional
};
