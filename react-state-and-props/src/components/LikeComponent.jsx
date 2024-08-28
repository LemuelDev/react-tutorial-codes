import { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const LikeComponent = ({ onClick }) => {
    const [isClick, setIsClick] = useState(false)

    const handleClick = () => {
        setIsClick(!isClick)
        onClick()
    }

  return (
    <div>
        {isClick ? <AiFillHeart color='red' onClick={handleClick}/> : <AiOutlineHeart color='red' onClick={handleClick}/>}
    </div>
  )
}

export default LikeComponent