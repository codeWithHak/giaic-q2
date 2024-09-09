const iceCreams = [
  {
    id: 1,
    title: "Vanilla Delight",
    description: "A classic vanilla ice cream scoop, smooth and creamy, perfect for a hot day.",
    image: "https://cdn.pixabay.com/photo/2017/08/30/12/45/vanilla-ice-cream-2690261_960_720.jpg",
    price: 3.99
  },
  {
    id: 2,
    title: "Chocolate Heaven",
    description: "Rich chocolate ice cream made with real cocoa, ideal for chocolate lovers.",
    image: "https://cdn.pixabay.com/photo/2017/06/09/13/55/ice-2386127_960_720.jpg",
    price: 4.50
  },
  {
    id: 3,
    title: "Strawberry Bliss",
    description: "Fresh strawberry ice cream with real strawberry chunks, bursting with flavor.",
    image: "https://cdn.pixabay.com/photo/2015/09/16/21/07/strawberry-ice-cream-947029_960_720.jpg",
    price: 4.20
  }
];

const listItems = iceCreams.map((icCream)=>{
  const icCreamText = `${icCream.title} - $${icCream.price}`
  return (
  <li>{icCreamText}</li>
  );
})

// const listItems = iceCreams.map((icCream)=>{
//   return <li>{icCream.title} - {icCream.price}</li>
// })

function App() {

  return (
    <>
    <h1>Our Best Sellers</h1>
      <ol>
        {listItems}
      </ol>
    </>
  )
}

export default App
