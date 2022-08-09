import Image from 'next/image'

const single = () => {
    return (
        <>
            <h2>Single Image</h2>
            <Image 
                src="/photos/hello.jpg"
                alt="watch"
                layout="fill"
                objectFit='cover'
            />
        </>
    )
}

export default single