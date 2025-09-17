const Produtos = () => {

   //Objeto da lista de pizzas
   const pizzas = [
    'Pizza de Quatro Queijos',
    'Pizza de Frango com Catupiry',
    'Pizza de Marguerita', 'Pizza de pepperoni', 'Pizza de estrogonofe'
   ]
   // Iteração da lista de pizzas - pizza a pizza (um a um)
   const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
   
   return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
              {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
