export default function ReviewId ({params}:{
    params:{
        reviewId:string,
        productId:string
    }
}){
    return(
        <h1>Review {params.reviewId} of product {params.productId} </h1>
    )
}