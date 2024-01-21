import { NasaApodElement } from '@interfaces/nasa';

export interface CounterState {
  value: number;
}

export interface AuthState {
  isLoggedIn: boolean;
}

export interface NasaState {
  nasaApodElement: NasaApodElement | null;
  nasaApodElementLoading: boolean;
  nasaApodElementError: string | null;
}
