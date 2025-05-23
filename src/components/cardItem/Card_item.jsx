import './card_item.css'

function Card_item(list) {
    const lista = list.list
    console.log(lista)
    
    const name = lista.name
    const category = lista.category.name
    const sprite = lista.sprites.default
    const id = lista.id
    
    
    return(
        <>
        <section className='card_item'>
            <img src={sprite} alt={name} />
            <p>{name}</p>
            <p># {id}</p>
        </section>
        </>
    )
}


export default Card_item