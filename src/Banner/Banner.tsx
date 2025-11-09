import me from '../assets/me.jpg';

const Banner = () => {
  return (
    <div className='flex relative'>
        Full Stack <br />
        Developer
        <img src={me} width={200} className='absolute right-0' alt="Photo of Abhinand" />
    </div>
  )
}

export default Banner