import { h } from "preact";
import { add } from "../../engine";

export default function Home() {
  console.log(add(1, 2));
  
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
}
