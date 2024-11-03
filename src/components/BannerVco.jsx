import shus from './images/shusgrad.jpg'

export default function BannerVco(){
    return(

    <div className="relative w-full h-96  bg-black">
        <img className="opacity-100 block static w-full h-96" src={shus} alt='vco'></img>
            <p className=' pl-14 top-36 inset-x-1/3 absolute text-6xl font-bold text-white'>
            KUKLIN TEAM
            </p>
    </div>


    )
}