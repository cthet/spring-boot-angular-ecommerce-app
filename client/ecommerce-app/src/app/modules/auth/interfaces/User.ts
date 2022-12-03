export interface User {
  id: number | null;
  email: string;
  role: string;
}
export interface Credentials {
  email: string;
  password: string;
}