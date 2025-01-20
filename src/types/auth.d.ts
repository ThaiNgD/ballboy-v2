export {};

declare global {
  interface IFormLogin {
    email: string;
    password: string;
    is_remember: boolean;
  }
}
