import { useState ,useEffect } from "react";
import Banner from "./conpoments/Banner";
import Header from "./conpoments/Header";
import MoiveList from "./conpoments/MoiveList";

function App() {
  const [movie, setMovie] = useState([]);
  const [movie1, setMovie1] = useState([]);
  useEffect(() => {
    const fetchMovie = async () =>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1';
      const [res1 ,res2] = await Promise.all([
        fetch(url1, options), 
        fetch(url2, options)
      ]);

      // const response = await fetch(url, options);
      // const data = await response.json();
      // console.log(data);
      // setMovie(data.results);

      const data1 = await res1.json();
      const data2 = await res2.json();
      // console.log(data1);
      setMovie(data1.results);
      setMovie1(data2.results);
    }
    fetchMovie();

  }, [])
  return (
    <>
      <div className="bg-black pb-5">
       <Header />
       <Banner />
       <MoiveList title={'Phim Hot'} data={movie}  />
       <MoiveList title={'Phim De Cu'} data={movie1}/>
      </div>
    </>
  );
}

export default App
