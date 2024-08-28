import {useState} from 'react'
import style from './CardCounter.module.css'
const CardCounter = () => {

    const [count, setCount] = useState(0);

    const plusOne = () => {
        setCount(count + 1);
    };

  return (
    <>
    <div className='card w-25 m-auto pd-10'>
        <p className={style.count}>Count: {count}</p>
        <button onClick={plusOne} className='btn btn-primary '>Add One</button>

        <div className={style.caption}>
            <p>React Implementation, React JSX</p>
            <p>Components, Styling Components, Handling of Events</p>
            <p>Using bootstrap, css module, vanila css</p>
            <p>useState (soon to be discuss)</p>

        </div>
    </div>
    </>
  )
}

export default CardCounter