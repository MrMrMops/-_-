import football from './images/icons/football.webp'
import voleyball from './images/icons/voleyball2.png'
import teacher from './images/icons/teacher.png'
import hat from './images/icons/hat.png'

import voley_bun from './images/icons/voleyball_tur.png'  
import foot_bun from './images/icons/football_tur.jpg'  
import { act } from 'react'


export default function WhatWeDoBan() {



    let active1=false
    let active2=false
    function onclick(event) {
        const con = document.getElementById('image_and_page_cont')
        const bunner = document.getElementById('bunner')
        const on_img = document.getElementById('on_img')

        switch (event.target.dataset.index) {
            case '0' :
                if (active1) {
                    bunner.src = ''
                    on_img.textContent =''
                    active1 = false
                    
                    break
                
                }
                bunner.src = foot_bun
                on_img.textContent='Турнир по Футболу ВЦО'
                con.style ='display:block'
                active1 = true
                active2 = false
                
                break
            
            case '1' :
                if (active2) {
                    bunner.src = ''
                    on_img.textContent =''
                    
                    active2 = false
                    break}
                bunner.src = voley_bun
                on_img.textContent='Турнир по волейболу "All STARS ВЦО"'
                active2 = true
                active1 = false
                break

        }}

    


    function give_img(el) {

        return(<img key={el.alt} data-index={el.data_index} className='cursor-pointer 
            w-28 mx-2
            sm:w-32 md:w-40 md:mx-5
            lg:w-48 lg:mx-10' src={el.src} alt={el.alt} onClick={onclick} />)
    }

    const attr = [{src:football, data_index:0 , alt:"football icon"},{src:voleyball, data_index:1, alt:"voleyball icon"},
        {src:teacher,  data_index:2,alt:"teacher icon"},{src:hat, data_index:3 ,alt:"hat icon"}]

    return(<>
    <div className="flex flex-wrap justify-center mb-10
    lg:w-full">
        {attr.map(el =>give_img(el))}
        
    </div>
   <div id='image_and_page_cont' className='hidden'>
    <p className=' mt-10 mb-4 text-center
    lg:text-2xl' id='on_img'></p>
    <div className='flex justify-center 
    lg:w-full'> 
    
    <img className='lg:w-1/2 ' id='bunner' src="" alt="" />
    </div>
    </div> 
    </>)}