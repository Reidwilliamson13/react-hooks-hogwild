import { useState } from "react";

function HogTile({ hog }) {
  const [visibleDetails, setVisibleDetails] = useState(false);

  function handleClick() {
    setVisibleDetails(!visibleDetails);
  }

  return (
    <div>
      <h1>{hog.name}</h1>
      <img onClick={handleClick} height="200" width="200" src={hog.image}></img>
      {visibleDetails ? <hogDetails hog={hog} /> : ""}
    </div>
  );
}

export default HogTile;
