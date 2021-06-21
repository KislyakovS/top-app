import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface TextareaProps extends DefaultElement { }