import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface FooterProps extends DefaultElement { }

export default FooterProps;