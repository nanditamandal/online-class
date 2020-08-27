import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    const total =cart.reduce((total, pro)=>total+pro.subject.price, 0);
    const name =cart.reduce((name, pro)=>name+pro.subject.name +",  ", "");
    console.log(cart);

    return (
        <div>
            <h4><strong>Enroll Details</strong></h4>
            <p><strong>Total Subject:</strong> {props.cart.length}</p>
            <p><strong>Course name :</strong>{name}</p>
            <p><strong>Total Price:</strong> {total}</p>
        </div>
    );
};

export default Cart;