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
                        <div className={styles.currencyInfo}>
                            <h2>{country.currenci.name} ({country.currencies[0].symbol})</h2>
                            <p>Currency</p>
                        </div>
                        <div className={styles.languageInfo}>
                            <h2>{country.languages.name} </h2>
                            <p>Language</p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Details;