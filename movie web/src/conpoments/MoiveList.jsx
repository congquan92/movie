import { useState } from 'react';
import PropTypes from 'prop-types'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const MoiveList = ({title ,data}) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [trailer, setTrailer] = useState('');
  const handleTrailer = async(id) => {
    setTrailer('');
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const moviekey = await fetch(url, options);
      const data = await moviekey.json();
      setTrailer(data.results[0].key);
      setmodalIsOpen(true);
    } catch (error) {
      setmodalIsOpen(false);
      console.log(error);
    }
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="text-white p-10 mb-10 ">
      <h2 className='uppercase text-xl mb-4'>{title}</h2>
      <Carousel responsive={responsive} className='flex items-center space-x-4'>
      {data.length > 0 && data.map((item) => (
          <div key={item.id} onClick={() => handleTrailer(item.id)} className='w-[200px] h-[300px] relative group'>
            <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
               <div className='absolute top-0 left-0 w-full h-full bg-black/30'></div>
               <img src= {`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title || item.original_title} className='w-full h-full object-cover'/>
               <div className='absolute bottom-4 left-2'>
                 <p className='text-white text-md uppercase'>{item.title || item.original_title}</p>
               </div>
            </div>
           </div>
        ))}
        </Carousel>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            zIndex: 9999,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }
        }}
        contentLabel="Example Modal">

         <YouTube videoId={trailer} opts={opts} />

      </Modal>

      </div>
  )
}

MoiveList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default MoiveList