
const srcset = () => {
    return (
        <>
            <img 
                src="/red-example/small-800px.png" 
                srcSet="
                    /red-example/small-800px.png 800w,
                    /red-example/medium-1200px.png 1200w,
                    /red-example/large-1600px.png 1600w,
                "
            />
        </>
    )
}

export default srcset