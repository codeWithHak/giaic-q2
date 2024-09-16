export default function Home({params}:any) {
    return (
      <div>
        <h1>Product Category: {params.category}</h1>
        <h1>Product ID: {params.id}</h1>
      </div>
    );
  }
  