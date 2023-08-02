import { useState } from 'react'
import './detail.css'

const Detail = () => {
    const df = {
        id: 3,
        urlImg: "https://media.slovoidilo.ua/media/publications/19/184138/184138-1_large.jpg",
        title: "У столиці рф вкотре пролунали вибухи, росЗМІ кажуть про нову атаку на Москва-сіті",
        body: "Про це повідомляють російські ЗМІ та новинні Telegram-канали. На опублікованих у соцмережах відео видно, що як мінімум один дрон влучив до однієї з веж «Москва-Сіті», біля неї видніється дим. Очевидці повідомляють про звук вибуху та потрапляння безпілотника у будівлю. Біля хмарочоса поліцейські перекрили рух, накопичується спеціальна техніка. Перед атакою безпілотників на «Москву-Сіті» дрони були помічені у кількох містах Підмосков'я. Повідомляється, що нібито один із дронів було знищено на підльоті до столиці країни-агресора, в районі Кубинки.«Кілька безпілотників під час спроби прольоту до Москви були збиті засобами ППО. Один долетів до тієї ж вежі в «Сіті», що й минулого разу. Пошкоджено фасад на рівні 21 поверху. Екстрені служби працюють на місці події», - заявив мер міста Сергій Собянін.",
        urlNew: "https://www.slovoidilo.ua/2023/08/01/novyna/svit/stolyczi-rf-vkotre-prolunaly-vybuxy-roszmi-kazhut-pro-novu-ataku-moskva-siti"
    }
    const [curentNew, setCurentNew] = useState(df);
    
   
    return (
        <div className='block_details'>
            <h1 className='name_new'>{curentNew.title}</h1>
            <img src={curentNew.urlImg} alt='phot new'></img>
            <p className='body_new'>{curentNew.body}</p>
            <div className='body_comment'>
                <h3 className='comment_title'>Experts Comment</h3>
                <p className='coment_body'>grherthrhrth sdvv efsv eew  tg t g r r rtg rtg rt r  s dfbvfdbdg trg twrvertrga</p>
            </div>
        </div>
    )
}

export {Detail} 