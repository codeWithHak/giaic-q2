function Docs({params}:{
    params:{
        slug:string[]
    }
}) {
    // must explore optional chaining and double square brackets folder in-depth
    if (params.slug?.length === 2){
        return (
            <h1>Showing docs for feature{params.slug[0]} concept {params.slug[1]}</h1>
        )
    }

    else if (params.slug?.length === 1){
        return(
            <h1>Showing docs for feature {params.slug[0]}</h1>
        )

    }
    return <div>Docs home page</div>    
    
  
}

export default Docs