import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from '../assets/hero.jpg';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import Score from './Score';

const Hero = ({ title = 'Avengrs Endgame', score = 10}) => {



    return (
        <header className="relative box-border">
            <img className='object-cover object-center h-auto w-full' src={placeholder} alt='Filme em destaque' />

            <article className='absolute bottom-0 mb-64 px-8'>
                <p className='text-3xl'>Assista agora:</p>
                <h2 className='text-6xl font-bold'>{title}</h2>

                <p className='text-base '>
                    Nota{' '}
                    <Score value={2} />
                </p>

                <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                    <FontAwesomeIcon className='mr-2' icon={faPlay} />    Assistir
                </button>

                <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                    <FontAwesomeIcon className='mr-2' icon={faPlus} />  Minha Lista
                </button>
            </article>
        </header>
    )
}

export default Hero;