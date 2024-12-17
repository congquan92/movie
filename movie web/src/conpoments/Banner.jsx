import iconRating from '../assets/rating.png';
import iconRatingHalf from '../assets/rating-half.png';
import play from '../assets/play-button.png';
import name from '../assets/ngau.jpg';

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-cover bg-no-repeat relative flex justify-center items-center">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20 w-[50%]">
            <div className='flex flex-col space-y-5 items-baseline'> 
                <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3">TV-Show</p>
                <div className="flex flex-col space-y-4">
                <h2 className="text-white text-[30px] font-bold">Queen Of Tears</h2>
                <div className="flex items-center space-x-3">
                    <img src={iconRating} alt="rating" className='w-8 h-8' />
                    <img src={iconRating} alt="rating" className='w-8 h-8' />
                    <img src={iconRating} alt="rating" className='w-8 h-8' />
                    <img src={iconRating} alt="rating" className='w-8 h-8' />
                    <img src={iconRatingHalf} alt="rating" className='w-8 h-8' />
                </div>
                <p className='text-white'>Tập cuối của "Nữ hoàng nước mắt" (Queen of Tears) lên sóng và ghi nhận lượt người xem kỷ lục, đưa bộ phim này trở thành phim có lượt xem cao nhất lịch sử đài tvN (Hàn Quốc).</p>
                <div className='flex items-center space-x-4'>
                    <button className='p-3 text-white bg-black font-bold text-sm'>Chi tiet</button>
                    <button className='p-3 text-red-500 bg-black font-bold text-sm'>Xem Phim</button>
                </div>
            </div>
            </div>
        </div>
        <div className= "w-[50%] flex justify-center items-center">
            <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                <img src={name} alt="" className='w-full h-full object-cover' />
                <div className='w-full h-full absolute top-0 left-0 justify-center flex items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <img src= {play} alt="" className='w-16 h-16 relative z-30' />
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Banner
 
// rafce