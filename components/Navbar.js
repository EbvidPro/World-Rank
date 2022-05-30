import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <Image src="/Logo.svg" alt='Logo' width={200} height={50} />
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;