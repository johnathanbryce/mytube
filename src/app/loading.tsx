import styles from '../styles/loading.module.css';

const LoadingSpinner = () => {
    return (
      <div className={styles.container}>
          <p> Fetching your videos, hang tight! </p>
          <div className={styles.spinner}></div>
      </div>
    );
  };
  
  export default LoadingSpinner;