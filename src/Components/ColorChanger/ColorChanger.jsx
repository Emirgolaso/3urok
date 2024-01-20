import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ColorChanger = () => {
    const dispatch = useDispatch();
    const { isChangerColor } = useSelector((state) => state);

    const onChangeColor = () => dispatch({ type: 'CHANGE_COLOR', payload: !isChangerColor })
    return (

        <div>
            <button onClick={onChangeColor}>color chnge</button>
        </div>
    );
};

export default ColorChanger;