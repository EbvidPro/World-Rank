import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Id.module.css'
import { ArrowBackIosRounded } from '@material-ui/icons';

export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();

    const paths = data.map(country => {
        return {
            params: { id: country.alpha3Code }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://restcountries.com/v2/alpha/' + id);
    const data = await res.json();

    return {
        props: {
            country: data
        }
    }
}

const Details = ({ country }) => {
    return (
        <>
            {console.log({ country })}
            <Head>
                <title>{country.name} Details</title>
                <meta name='keywords' content='Ranks of Countries'></meta>
            </Head>
            <div className={styles.backArrow}>
                <Link href='/list'>
                    <a>
                        <ArrowBackIosRounded color='inherit' />
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.Details}>
                    <div className={styles.flag}>
                        <Image
                            src={country.flags.svg}
                            alt='Flag'
                            width={330}
                            height={300}
                            priority='true' />
                        <h1>{country.name}</h1>
                        <p>{country.continent}</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.populationInfo}>
                            <h2>{country.population} </h2>
                            <p>Population</p>
                        </div>
                        <div className={styles.areaInfo}>
                            <h2>{country.area} </h2>
                            <p>Area(km)</p>
                        </div>
                        <div className={styles.region}>
                            <h2>{country.region}</h2>
                            <p>Region</p>
                        </div>
                        <div className={styles.subRegion}>
                            <h2>{country.subregion}</h2>
                            <p>Sub Region</p>
                        </div>
                        <div className={styles.nativeName}>
                            <h2>{country.nativeName}</h2>
                            <p>Native Name</p>
                        </div>
                        <div className={styles.independent}>
                            <h2>{country.independent.toString()}</h2>
                            <p>Independent</p>
                        </div>
                        <div className={styles.capital}>
                            <h2>{country.capital}</h2>
                            <p>Capital</p>
                        </div>
                        <div className={styles.timeZone}>
                            <h2>{country.timezones}</h2>
                            <p>Time Zone</p>
                        </div>

                        {/* <div className={styles.currencyInfo}>
                            {country.currencies.map((currency, index) => <h2 key={index}> {currency.name} ({currency.symbol}) </h2>)}
                            <p>Currency</p>
                        </div>
                        <div className={styles.languageInfo}>
                            {country.languages.map((languageName, id) => <h2 key={id}>{languageName.name}</h2>)}                            
                            <p>Language</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </>

    );
}

export default Details;