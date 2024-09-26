
export default function Detals({ params }: { params: { details: string[] } }) {

    
  if (params.details.length === 3) {
    return (
      <div>
        <h1>Product's Category: {params.details[0]}</h1>
        <h1>Product: {params.details[1]}</h1>
        <h1>Id: {params.details[2]}</h1>
      </div>
    );
  } else if (params.details.length === 2){
    return(
        <div>
        <h1>Product's Category: {params.details[0]}</h1>
        <h1>Product: {params.details[1]}</h1>
        </div>
    )
  }
  return(
    <h1>Product's Category: {params.details[0]}</h1>
  )
}
