export const colors = {
  primary: '#283d8d',
  primaryLight: '#506dd5',
  secondary: '#a99e1a',
  secondaryLight: '#c4bb56',
  white: '#FFFFFF',
  black: '#000000',
  error: 'red',
  transparent: 'transparent',
}

export const shadows = {
  hover: '0px 0 10px 5px rgba(0, 0, 0, 0.5)',
  active: '0px 0 10px 5px rgba(0, 0, 0, 0.5)',
}

export type Color = keyof typeof colors
export type Shadows = keyof typeof shadows
