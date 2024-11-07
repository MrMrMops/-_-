import anyacat from './images/anyafon1.png'
import anyacatobr from './images/anyacatobr.png'
import './support-classes.css'
import anyazal from './images/anyazal.png'

export default function WhoUs() {
    
    function NoteCreate(event) {
        const note = document.getElementById('appleBanner')
        note.style.opacity = 1
        
    }
    
     function NoteDelete(event){
        const note = document.getElementById('appleBanner')
        note.style.opacity = 0
        console.log('on')
    }

    return(
        <>
        
        <div className="opacity-0 cursor: default;" id='appleBanner'>Аня я тебя люблю</div>
        <div className='relative mx-96'>
        <img className='relative h-96' src={anyazal} alt='anyata'></img>
        <img className='absolute top-0 duration-75 h-96 hover:scale-125 ' onMouseOver={NoteCreate} onMouseOut={NoteDelete} src={anyacatobr} alt='anya'></img>
        </div>
        </>
    )}
