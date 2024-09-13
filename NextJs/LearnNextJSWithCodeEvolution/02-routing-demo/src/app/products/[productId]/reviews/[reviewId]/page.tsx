export default function ReviewId({
    params
}:{
    params:{
        productId:string,
        reviewId:string
    }
}){
    return(
        <div>
            <h1>Review {params.reviewId} For Product {params.productId}</h1>
        </div>
    )
}