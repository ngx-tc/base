export interface TcView {
  tcView: string | view;
}

export enum view {
  primary = 'primary',
  accent = 'accent',
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
