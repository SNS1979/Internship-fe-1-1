import { Link } from "react-router-dom"
import { IconNew } from "../../components/icon_news/IconNew"
import './index.css'
import { useEffect, useState } from "react"
import { listenerNews, toMass } from "../../firebase/firebaseRDB"

const Index = () => {
    

    const [news, setNews] = useState([]);

    useEffect(() => {
        listenerNews((object) => {
            setNews([...toMass(object)]);
        })
    }, [])

    return (
        <div className="index">
            {news.map(item =>
                <Link key={item.id} to={`/articles/${item.id}`}>
                    <IconNew
                        curentNew={item}
                        width={'100%'}  
                    />
                </Link>
            )
            }
        </div>
    )
}

export { Index }