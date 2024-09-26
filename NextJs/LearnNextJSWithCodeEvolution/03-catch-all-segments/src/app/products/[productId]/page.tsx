export default function ProductId ({params}:{
    params:{
        productId:string
    }
}){
    return(
        <div>
            <h1>Preview of product {params.productId}</h1>
        </div>
    )
}