import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputProps extends DefaultElement { }