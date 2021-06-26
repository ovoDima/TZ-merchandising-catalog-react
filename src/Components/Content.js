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
                <p className = 'position'>{item.position}</p>
                <h2>{item.name}</h2>
                <p className='price'>{item.price + ' ' + item.currency}</p>
            </div>
        </div>)
        
        return (
        <div>
            <h1 className = 'heading'>Наша Продукция</h1>
            <div className = 'grid-container'>
                {product}
            </div>
        </div>
    )
}

export default Content
