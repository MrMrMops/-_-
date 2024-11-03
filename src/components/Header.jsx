import logo from './images/logo.jpg'

const links = [{title:'Кто мы?',href:'#'},{title:'Чем занимаемся?', href:'#'},{title:'Наши планы', href:'#'},
    {title:'Последние события', href:'#'},{title:'Обратная связь', href:'#'}]

function lst_menu(obj) { 
    return (
    <a href={obj.href} className='font-sans mx-6 my-3 text-white text-2xl font-bold'>{obj.title}</a>
)};

export default function Header(){
    
    return (
        <header className='flex w-full bg-blue-500 h-24 py-4'>
            <img className='mx-6 top-7 text-white text-2xl font-semibold h-16' src={logo} alt='лого'></img>
            {links.map(el => lst_menu(el))}
        </header>
    )
}