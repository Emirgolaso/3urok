import React from 'react'
import { useSelector } from 'react-redux'

const ChangerTitle = () => {
    const { isChangerColor } = useSelector((state) => state);
    const colorStyle = isChangerColor ? 'red' : 'black';
    return (
        <h2 style={{ color: colorStyle }}>xryttyciughojuygftrduigohugyftdufgihogyufttyuioyufh</h2>
    )
}

export default ChangerTitle