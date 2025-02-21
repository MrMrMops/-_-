import anyacatobr from './images/anyacatobr.png'
import './support-classes.css'
import anyazal from './images/anyazal.png'

export default function WhoUs() {

    function NoteCreate(event) {
        const note = document.getElementById('appleBanner')
        note.style.opacity = 1
        console.log('down')
    }
    
     function NoteDelete(event){
        const note = document.getElementById('appleBanner')
        note.style.opacity = 0

        console.log('on')
    }

    return(
        <>
        
        <div className="opacity-0" id='appleBanner'>Аня</div>
        <div className='relative lg:mx-96'>
        <img className='relative h-96' src={anyazal} alt='anyata'></img>
        <img className='absolute top-0 duration-75 lg:hover:scale-125 h-96 ' onMouseOver={NoteCreate} onMouseOut={NoteDelete}  src={anyacatobr} alt='anya'></img>
        </div>
        </>
    )}
