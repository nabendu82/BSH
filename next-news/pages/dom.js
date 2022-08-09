import styles from '../styles/Dom.module.css'

const dom = ({ developer }) => {
    return (
        <div className='page-container'>
            <div className={styles.main}>
                <h1>Developer Of the Month</h1>
                <div className={styles.developerOfTheMonth}>
                    <h3>{developer.name}</h3>
                    <h6>{developer.position}</h6>
                    <img src={developer.image} alt="developer" />
                    <p>{developer.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const api = await fetch('https://my-json-server.typicode.com/nabendu82/news-next-blog/devOfMonth');
    const developer = await api.json();

    return {
        props: {
            developer
        }
    }
}

export default dom