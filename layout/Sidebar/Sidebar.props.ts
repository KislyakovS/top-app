import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface SidebarProps extends DefaultElement { }

export default SidebarProps;