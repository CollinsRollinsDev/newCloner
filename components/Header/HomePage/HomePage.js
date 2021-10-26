import Layer1 from '../../Layers/Layer1/Layer1';
import Layer2 from '../../Layers/Layer2/Layer2';
import Layer3 from '../../Layers/Layer3/Layer3';
import Layer4 from '../../Layers/Layer4/Layer4';
import Layer5 from '../../Layers/Layer5/Layer5';
import Header from '../Header';
import styles from './HomePage.module.css';


const HomePage = () => {
    return (
        <section className={styles.container}>
            <Header />
            <Layer1 />
            <Layer2 />
            <Layer3 />
            <Layer4 />
            <Layer5 />
        </section>
    )
}

export default HomePage
