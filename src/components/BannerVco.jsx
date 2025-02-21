import shus from './images/shusgrad.jpg'

export default function BannerVco(){
    return(
        
    <div className="relative w-full bg-black">
        <img className="block static w-full h-56 h-500" src={shus} alt='vco'></img>
            <p className='absolute  text-white
            lg:pl-28 lg:top-64 lg:inset-x-1/4 lg:ml-36 lg:text-6xl font-bold
            top-20 ml-14 pl-3 text-4xl
            md:ml-72'  >
            
            KUKLIN TEAM
            </p>
    </div>


    )
}