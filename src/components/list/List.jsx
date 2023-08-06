import { useEffect } from 'react';
import './list.css'

export default function List({ nameList, list }) {
    
    useEffect(() => {
        const listBody = document.getElementById("listBody");
        listBody.scrollTo(0,5000);
    }, [list])
    return (
        <div className="list">
            <h1 className="list_name">{nameList}</h1>
            <div className="list_body" id='listBody'>
            {
                list.map(elem =>
                    <p key={elem.id} className="list_item">{elem.body}</p> 
                )
            }
            </div>
            
        </div>
    )
}