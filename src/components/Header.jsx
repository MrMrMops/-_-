import logo from './images/logo.jpg'


const links = [{title:'Кто мы?',href:'#WhoUs'},{title:'Чем занимаемся?', href:'#WhatWeDo'},{title:'Наши планы', href:'#Plans'},{title:'Обратная связь', href:'#Society'}]

function lst_menu(obj) { 
    return (
    <a key={obj.title} href={obj.href} className='font-sans text-center  text-white 
    mx-1 text-lg h-16 py-2 font-semibold
    sm:mx-6 sm:my-1 sm:text-2xl sm:font-bold sm:h-20
    md:text-3xl
    lg:text-3xl 
    xl:py-4
'>
    
        {obj.title}</a>
)};

export default function Header(){
        
    return (
        <header className='flex w-full align-middle  bg-blue-500 justify-center
        
        lg:h-24 lg:py-2 lg:justify-start lg:px-12'>
            <img className='top-7 text-white text-2xl font-semibold 
            hidden
            lg:h-16 lg:block lg:mt-3
            '
            
             src={logo} alt='лого'></img>
            {links.map(el => lst_menu(el))}
        </header>
    )
}