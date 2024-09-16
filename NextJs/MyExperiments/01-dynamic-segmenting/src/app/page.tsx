import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hellooo</h1>
      <button><Link href="/products">Products</Link></button>
    </div>
  );
}
