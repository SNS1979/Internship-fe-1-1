import { useState } from 'react'
import './inputText.css'


function InputText({ namebutton, funnc }) {
    const [text, setText] = useState('');
    return (
        <div className="input_text">
            <textarea
                className='input_text_body'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={(e) => {
                    funnc(text);
                    setText('');
                }}
            >
                {namebutton}
            </button>
        </div>
    )
}
export { InputText }