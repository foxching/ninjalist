import Meta from '../../components/Meta'
import { server } from "../../config/index"


const Details = ({ ninja }) => {
    return (
        <>
            <Meta title={ninja.name} />
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </>
    )
}



export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/ninjas/${context.params.id}`)

    const ninja = await res.json()

    return {
        props: {
            ninja,
        },
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/ninjas`)

    const data = await res.json()


    const ids = data.map((ninja) => ninja.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}


export default Details