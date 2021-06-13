import withLayout from '../layout/Layout';
import { Button, Chip, Rating } from '../components';

const Home: React.FC = () => {
    return (
        <>
            <Button>Hello</Button>
            <Chip color='primary'>Hello</Chip>
            <Rating isEditable={true} rating={1} />
        </>
    );
};

export default withLayout(Home);