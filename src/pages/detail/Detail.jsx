import { useEffect, useState } from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
import { listenerNewID, toMass, writeExpertComment } from '../../firebase/firebaseRDB';
import { InputText } from '../../components/input/InputText.jsx';
import List from '../../components/list/List';



const Detail = () => {
    const { id } = useParams();
    const [curentNew, setCurentNew] = useState({});
    

    const handlerMessage = (data) => {
        const idComment = Date.now();
        writeExpertComment(id, idComment, data);
    }

    useEffect(() => {
        listenerNewID(id, (data) => {
            setCurentNew(data);
        })
    }, [id])


    return (
        <div className='block_details'>
            <h1 className='name_new'>{curentNew.title}</h1>
            <img src={curentNew.urlImg} alt='phot new'></img>
            <p className='body_new'>{curentNew.body}</p>
            <div className='body_comment'>
                <List nameList= "Comment Expert" list = {toMass(curentNew.analysis)}/>
                <InputText
                    namebutton="Отправить"
                    funnc={handlerMessage}
                />
            </div>
        </div>
    )
}

export { Detail }
