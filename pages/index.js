import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  // js .map()
const items = [
  "Comment✏️","Award🏆","Share📤","Save🏷️"
]

const nums = [1,2,3,4,5]
const numsMultiplyTwo = nums.map(num=> num * 2) // [2,4,6,8,10]
console.log(numsMultiplyTwo);

const newItems = items.map(item => item)

console.log(newItems);

const buttonArr = items.map(function (value, index){
  // return "aa" + value + "ss";
  // return 'aa' + value + 'ss';

  return <button key={index} className="btn btn-light btn-sm">{value}</button>
  // return <button key={index} styles="margin:10px !important">{value}</button>


  // return <button key={index} type="button" className="btn btn-secondary btn-sm" >{value}</button>

  // return <button key={index} type="button" className="btn btn-secondary btn-sm" styles="margin:100px !important">{value}</button>

});




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="d-flex flex-row">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
            &nbsp;
            <button class="btn btn-outline-success my-2 my-sm-0 ml-5 " type="submit">Search</button>
          </form>
        </div>
      </nav>

        {buttonArr} 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  )
}
