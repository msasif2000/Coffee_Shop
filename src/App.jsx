
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { Link } from 'react-router-dom';
import { RiCupLine } from "react-icons/ri";

function App() {
  const coffees = useLoaderData();


  return (
    <div>
      <div className='md:container mx-auto text-center'>
        <p className='mt-6'>--- Sip & Savor ---</p>
        <h2  className='text-[#331A15] font-rancho text-3xl font-bold py-2'>Our Popular Products</h2>
        <button>
          <Link to="/addCoffee" className='rounded bg-[#E3B577] border-2 border-[#331A15] flex justify-center items-center gap-1 text-white px-2 py-1 font-rancho text-xl'>Add Coffee <RiCupLine className='text-black'></RiCupLine></Link>
        </button>
        <div className='md:grid grid-cols-2 mx-auto gap-6 mt-8'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
