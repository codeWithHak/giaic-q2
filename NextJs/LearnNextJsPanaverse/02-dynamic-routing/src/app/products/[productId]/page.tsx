function ProductId({params}:{
    params:{
        productId:string
    }
}) {
  return (
    <div>
        <h1>Product {params.productId}</h1>
    </div>
  )
}

export default ProductId