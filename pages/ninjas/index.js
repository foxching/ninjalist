import Link from 'next/link'
import Meta from '../../components/Meta'
import { server } from "../../config/index"
import styles from "../../styles/Ninja.module.css"


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/ninjas`)
    const data = await res.json()

    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Meta title="All Ninjas" />
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                        <a className={styles.single}><h3>{ninja.name}</h3></a>
                    </Link>
                ))}
            </div>
        </>

    );
};

export default Ninjas;
