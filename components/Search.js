import styles from '../styles/Search.module.css'
import { SearchRounded } from '@material-ui/icons';

const Search = ({ ...rest }) => {
    return (
        <div className={styles.container}>
            <SearchRounded color='inherit' />
            <input className={styles.input} {...rest} />
        </div>
    );
}

export default Search;