import React from 'react'
import { isTemplateSpan } from 'typescript'
import productData from '../data/Data'

const Content = () => {
    const product = productData.map((item) => 
    <div className = 'card' key={item.id}>
        <div className = 'card_img'>
            <img src = {item.img}/>
        </div>

        <div className = 'card_header'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className='price'>{item.price + ' ' + item.currency}</p>
        </div>
    </div>)

    return (
        <div>
            <h1 className = 'heading'>Наша Продукция</h1>
            {product}
        </div>
    )
}

export default Content
