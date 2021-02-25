import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const animals = ['cat', 'dog', 'parrot', 'sparrow', 'sloth', 'penguin', 'puffin']
  const products = [
    {name : 'Photoshop', price : '$90.45'},
    {name : 'Illustrator', price : '$40.45'},
    {name : 'Premiere', price : '$120.45'},
    {name : 'Indesign', price : '$30.45'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            animals.map(animal => <li>{animal}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
        <Product product = {products[0]} ></Product>
        <Product product = {products[1]} ></Product>
        <Product product = {products[2]} ></Product>
        <Product product = {products[3]} ></Product>
        <Person name = 'Sogir' age = '25'></Person>
        <Person name = 'Shah' age = '27'></Person>
        <Person name = 'Uddin' age = '28'></Person>
        <Person name = 'Mahmud' age = '32'></Person>
      </header>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount (count - 1)}>Decrease</button>
      <button onClick = {() => setCount (count + 1)}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data));
  },[])
  
  return (
    <div>
      <h3> Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product (props) {
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left',
    color : 'black',
    margin : '5px'
  }
  const {name , price} = props.product;
  return(
    <div style = {productStyle}>
      <h3>{name} </h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props){
  const personStyle = {
    border : '2px solid cyan',
    margin : '5px',
    padding : '10px'
  }
  return(
    <div style = {personStyle}>
      <h2>Name : {props.name}</h2>
      <p>Age : {props.age}</p>
    </div>
  )
}

export default App;
