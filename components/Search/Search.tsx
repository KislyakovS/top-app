import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Input } from '..';
import SearchIcon from './icons/search.svg';

import styles from './Search.module.css';

const Search: React.FC = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onKeyDownSearch = (e: KeyboardEvent) => {
        if (e.key === 'Enter') goToSearch();
    };

    const goToSearch = () => {
        router.push(`/search?q=${search}`);
    };

    return <form className={styles.search} role="search">
        <Input className={styles.input} placeholder="Поиск..." value={search} onChange={onChangeSearch} onKeyDown={onKeyDownSearch} />
        <Button type="button" className={styles.button} onClick={goToSearch} aria-label="Искать по сайту"><SearchIcon /></Button>
    </form>;
};

export default Search;