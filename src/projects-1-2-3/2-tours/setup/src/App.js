// //
// //

import React, { useState, useEffect } from 'react';
import Loading from './Loading';

import Tours from './Tours';
import './index.scss';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <main className='bozo_title'>
        <h2>No tours left Bozo</h2>
        <button onClick={() => fetchTours()}>Refresh</button>
      </main>
    );
  }

  if (loading) {
    return (
      <div className='app2__main-container'>
        <main>
          <Loading />
        </main>
      </div>
    );
  }

  return (
    <div className='app2__main-container'>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import Loading from './Loading';
// import Tours from './Tours';

// import './index.scss';

// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN

// const url = 'https://course-api.com/react-tours-project';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const fetchTours = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch(url);
//       const tours = await response.json();

//       setLoading(false);
//       setTours(tours);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTours();
//   }, []);

//   if (loading) {
//     return (
//       <main className='app2__main'>
//         <Loading />
//       </main>
//     );
//   }

//   return (
//     <main className='app2__main'>
//       <Tours tours={tours} />
//     </main>
//   );
// }

// export default App;