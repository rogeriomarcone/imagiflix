import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Movie } from "../interfaces/Movie";
import Score from "./Score";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import emitter from "../utils/eventEmitter";
import CONST from '../data/constants';
import { TitleType } from "../interfaces/Title";


import './Poster.css';

interface posterProps extends Movie{
    key: number
}

const Poster = ({ title, name, cover, score, id, key }: 
posterProps) => {

    const handleClick = () => {
        const type = title ? TitleType.Movie : TitleType.Serie;

        emitter.emit(CONST.EVENTS.PosterClick, {type, id});
    };

    return (
        <article className="main relative transition-all duration-500 ease-in-out transform hover:scale-110" 
            key={key}
            onClick={handleClick}>
            <img src={cover} alt={title} className="image"/>
            {name}
            <div className="poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" color="#fff"/>
                <h2 className="text-2x1 text-white">{title}</h2>
                <Score value={score}/>
            </div>
        </article>
    )
}

export default Poster;