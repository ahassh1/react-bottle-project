import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlesPromise = fetch('./bottles.json').then(res => res.json());
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/ahassh1/bottles-data/refs/heads/main/bottles.json').then(res => res.json());

const bottlesPromise = fetch('bottles.json').then(res=> res.json())

function App() {

  //  const Bottle =[
  //   {id:1, name:'Pink Nike Bottle', price:350, color: 'pink'},
  //   {id:1, name:'Pink Nike Bottle', price:350, color: 'pink'},
  //   {id:1, name:'Pink Nike Bottle', price:350, color: 'pink'},
  //   {id:1, name:'Pink Nike Bottle', price:350, color: 'pink'},
  //   {id:1, name:'Pink Nike Bottle', price:350, color: 'pink'}
  //  ]   

  return (
    <>
      <div>
        <h1>Buy Awesome Watter Bottle</h1>
        <Suspense fallback={<h2>bottles are looding now ......</h2>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
      </div>
    </>
  )
}

export default App