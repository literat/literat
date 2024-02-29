import Img from '../Img';
import styles from './HeroImage.module.scss';

function HeroImage({ image, title }) {
  return (
    <div className={styles.heroImage}>
      <Img image={image} alt={title} />
    </div>
  );
}

export default HeroImage;
