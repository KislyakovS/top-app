import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface HeaderProps extends DefaultElement { }

export default HeaderProps;