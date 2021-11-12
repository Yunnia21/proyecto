import React from "react"
export const ItemListContainer = (props) => {

    return (
        <div>
            <h2>{props.greeting}</h2>
            <h3>{props.user}</h3>            
        </div>
    )
}

export default ItemListContainer