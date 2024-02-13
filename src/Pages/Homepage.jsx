import { Link, useNavigation } from 'react-router-dom';
import Navbar from '../UI/Navbar';
export default function HomePage() {
    const { state } = useNavigation()


    if (state === 'loading') {
        return <div>loading</div>
    }
    return (
        <div className='px-36'>
            <Navbar></Navbar>
            {/* <div className='bg-slate-500 w-screen h-screen flex items-center '>
                <div className='w-1/2 h-full border border-red-900'>
                    <Link to={"/categories/Breakfast"}>BreakFast</Link>
                    <Link to={"/categories/Dessert"}>Dessert</Link>
                    <Link to={"/categories/Pasta"}>Main Dish</Link>
                    <Link to={"/categories/Vegetarian"}>Vegetarian</Link>
                </div>


            </div> */}
        </div>
    )
}

