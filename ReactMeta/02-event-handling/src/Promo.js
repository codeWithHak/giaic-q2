import PromoHeading  from "./PromoHeading"

const data = {
    heading:"80% of on all items",
    callToAction:"Order now"
}

function Promo () {
    return(
        <PromoHeading heading={data.heading} callToAction={data.callToAction}/>
    )
}

export default Promo