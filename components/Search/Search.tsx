import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Input } from '..';
import SearchIcon from './icons/search.svg';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';

const Search: React.FC<SearchProps> = () => {
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

    return <div className={styles.search}>
        <Input className={styles.input} placeholder="Поиск..." value={search} onChange={onChangeSearch} onKeyDown={onKeyDownSearch} />
        <Button className={styles.button} onClick={goToSearch}><SearchIcon /></Button>
    </div>;
};

export default Search;