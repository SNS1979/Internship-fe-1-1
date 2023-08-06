import { useEffect, useState } from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
import { listenerNewID } from '../../firebase/firebaseRDB';
import { InputText } from '../../components/input/InputText.jsx';


const Detail = () => {
    const {id} = useParams();
    const [curentNew, setCurentNew] = useState({});

    useEffect(() => {
        listenerNewID (id, (data) => {
            setCurentNew(data);
        })
    }, [])

   
    return (
        <div className='block_details'>
            <h1 className='name_new'>{curentNew.title}</h1>
            <img src={curentNew.urlImg} alt='phot new'></img>
            <p className='body_new'>{curentNew.body}</p>
            <div className='body_comment'>
                <h3 className='comment_title'>Experts Comment</h3>
                <p className='coment_body'>grherthrhrth sdvv efsv eew  tg t g r r rtg rtg rt r  s dfbvfdbdg trg twrvertrga</p>
                <InputText namebutton= "Отправить"/>
            </div>
        </div>
    )
}

export {Detail} 