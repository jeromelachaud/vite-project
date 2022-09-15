import { useState } from 'react';
import './App.css';

const buildImgUrl = (id: string, width: number, height: number) =>
  `https://picsum.photos/id/${id}/${width}/${height}.jpg`;

const imagesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const [image, setImage] = useState({
    open: false,
    id: 0,
  });
  return (
    <div className="App">
      {imagesArray.map((i) => (
        <span
          key={i}
          onClick={() => setImage({ open: true, id: i })}
          aria-hidden="true"
          style={{ visibility: image.open ? 'hidden' : 'visible' }}
        >
          <img src={buildImgUrl(i.toString(), 150, 150)} alt={i.toString()} />
        </span>
      ))}
      <div
        style={{ visibility: image.open ? 'visible' : 'hidden' }}
        onClick={() => setImage({ open: false, id: 0 })}
        aria-hidden="true"
      >
        <img
          src={`https://picsum.photos/id/${image.id}/450/450.jpg`}
          alt={`https://picsum.photos/id/${image.id}/450/450.jpg`}
        />
      </div>
    </div>
  );
};

export default App;
