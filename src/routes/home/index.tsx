import { h } from 'preact';
import { add } from '../../engine';

const Home: React.VFC = () => {
  console.log(add(1, 2));

  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;
