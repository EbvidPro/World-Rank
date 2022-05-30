import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({ children }) => {
    return (
        <div className={styles.body}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;