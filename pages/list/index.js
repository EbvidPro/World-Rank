import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/List.module.css'
import SearchInput from '../../components/Search.js'
import { KeyboardArrowDownRounded } from '@material-ui/icons';
import React, { useState } from 'react'

export const getStaticProps = async () => {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    return {
        props: {
            countries: data
        }

    }
}

// const orderBy = (countries, direction) => {
//     if (direction === 'asc') {
//         return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1));
//     }
//     if (direction === 'desc') {
//         return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1));
//     }

//     return countries;
// }

const List = ({ countries }) => {
    // const orderedCountries = orderBy(countries, "desc")
    const [keyword, setKeyword] = useState("");

    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(keyword));

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }


    return (
        <>
            <p className={styles.numbCountries}> Found {countries.length} Countries </p>
            <SearchInput
                placeholder="Filter by Name..."
                onChange={onInputChange}
            />
            <div className={styles.heading}>
                <div className={styles.heading_row}>
                    <button className={styles.heading_name}>
                        <div>Name</div>
                        <span>
                            <KeyboardArrowDownRounded color='inherit' />
                        </span>
                    </button>

                    <button className={styles.heading_population}>
                        <div>Population</div>
                        <span>
                            <KeyboardArrowDownRounded color='inherit' />
                        </span>
                    </button>
                    <button className={styles.heading_area}>
                        <div>Area(km)</div>
                        <span>
                            <KeyboardArrowDownRounded color='inherit' />
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.countriesList} >
                {filteredCountries.map((country) => <div className={styles.row} key={country} >
                    <div className={styles.name}>
                        <Link href={'/list/' + country.alpha3Code} key={country.alpha3Code}>
                            <a className={styles.single}>
                                <Image
                                    src={country.flags.svg}
                                    alt='Flag'
                                    width={20}
                                    height={20}
                                    priority='true' />
                                <p>{country.name}</p>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.population}>
                        <Link href={'/list/' + country.alpha3Code} key={country.alpha3Code}>
                            <a>
                                {country.population}
                            </a>
                        </Link>
                    </div>
                    <div className={styles.area}>
                        <Link href={'/list/' + country.alpha3Code} key={country.alpha3Code}>
                            <a>
                                {country.area}
                            </a>
                        </Link>
                    </div>
                </div>

                )}
            </div>
        </>
    );
}

export default List;