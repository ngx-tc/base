import { View } from '../types/view';

export interface TcView {
  tcView: View;
}

export enum view {
  primary = 'primary',
  accent = 'accent',
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
