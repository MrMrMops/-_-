
const links = [{title:'Кто мы?',href:'#'},{title:'Чем занимаемся?', href:'#'},{title:'Наши планы', href:'#'},
    {title:'Последние события', href:'#'},{title:'Обратная связь', href:'#'}]

function lst_menu(obj) { 
    return (
    <a href={obj.href} className='mx-6 text-white text-2xl font-semibold'>{obj.title}</a>
)};

export default function Header(){
    
    return (
        <header className='flex w-full bg-blue-600 h-24 p-6'>
            <img className='mx-6 text-white text-2xl font-semibold' src='' alt='лого'></img>
            {lst_menu()}
            




        </header>
    )
}