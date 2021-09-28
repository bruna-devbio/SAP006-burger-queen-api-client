import React from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';

import './Cart.css'

function Cart({
    cartItem
}) {
    return (

        <div className='container-cart'>

            <div className='data-clients'>
                <Input type='text'
                    placeholder='Nome'
                    className='data-clients-input'
                    name='email'>Cliente</Input>
                <Input type='text'
                    placeholder='Mesa'
                    className='data-clients-input'
                    name='email'>Mesa</Input>
            </div>

            <div>
                <ul className='list'>
                    <li>Nome</li>
                    <li>Quantidade</li>
                    <li>Valor</li>
                </ul>
            </div>

            {Object.keys(cartItem).map((item, index) => {
                return (
                    <div className='order-list'>
                        <p className='each-item-cart' key={index}>{cartItem[item].name} {cartItem[item].price}</p>
                    </div>
                )
            })}

            <div className='order-total'>
                <p>Total:</p>
                <p>R$12,00</p>
            </div>

            <Button
                buttonText='Enviar pedido'
                className='button-menu'
            >
            </Button>
        </div>
    );
}

export default Cart;