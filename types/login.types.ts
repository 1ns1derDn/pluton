export interface ILogin {
  password: string;
  email: string;
}

export interface ILoginResponse {
  access: string;
  refresh: string;
}

export interface ILoginError {
  detail: string;
}
