import tg from './images/icons/tg.webp'
import tiktok from './images/icons/tiktok.png'

export default function Links() {
    return (
        <div className=" lg:w-3/5 h-auto mx-auto pt-20 text-justify ">
            <div className="text-center">
            <span  className="font-semibold font-mono text-5xl lg:text-6xl"><a name='Society'/>Наши Соцсети</span>
            </div>
            <p className="my-20 font-sans lg:text-3xl  text-3xl mx-5"
            >Мы Kuklin Team - участники Школьного Ученического Самоуправления. Каждый из нас помогает сделать жизнь в школе лучше! 
                ыаууууууу ууууууу уууууууууууууы ав</p>
            <div className='lg:mx-0 mx-28'>
            <div className='flex my-5'>
            <img className='w-16 mr-5' src={tg} alt="" /><p className='py-3 text-3xl'>Telegram</p>
            </div>
            <div className='flex '>
            <img className='w-16 mr-5' src={tiktok} alt="" /><p className='py-3 text-3xl'>TikTok</p>
            </div>
            </div>
        </div> 
    
    )
}