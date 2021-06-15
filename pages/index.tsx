import withLayout from '../layout/Layout';
import { Button, Chip, Rating } from '../components';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
}

const Home: React.FC<HomeProps> = ({ menu, firstCategory }) => {
    return (
        <>
            <Button>Hello</Button>
            <Chip color='primary'>Hello</Chip>
            <Rating isEditable={true} rating={1} />
        </>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory,
        }
    };
};

export default withLayout(Home);