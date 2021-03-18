export interface IAuthForm {
  email: string;
  password: string;
}

export interface ILoginForm extends IAuthForm {
  returnSecureToken: boolean;
}

export interface ISignUpForm {
  email: string;
  idToken: string;
  localId: string;
}

export interface IUserData {
  email: string;
  nickname: string;
}
