import React, { useEffect } from "react";

const App = () => {
  const randomFlip = () => {
    return Math.random() > 0.5 ? "Head" : "Tails";
  };

  const promise = () => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      let headCount = 0;

      const flip = () => {
        attempts++;
        const result = randomFlip();

        if (result === 'Head') {
          headCount++;
        } else {
          headCount = 0;
        }

        if (headCount === 5) {
          resolve(`${attempts} attempts were made to get 5 consecutive Heads.`);
        } else if (attempts > 100) {
          reject("Too many attempts were made.");
        } else {
          flip();
        }
      };

      flip();
    });
  };

  useEffect(() => {
    promise()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      
    </div>
  );
};

export default App;
