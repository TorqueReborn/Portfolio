import me from '../assets/me.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div className='h-185 overflow-hidden'>
                <img src={me} width={520} alt="Photo of Abhinand" />
            </div>
            <div className='text-8xl'>
                Abhinand Ammanamkandy
            </div>
        </div>
    )
}

export default Banner