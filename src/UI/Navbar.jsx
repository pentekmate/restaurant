import logo from '../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
export default function Navbar() {
    return (
        <div className="w-full h-[70px] flex items-center justify-between ">
            <div>
                <img className='xl:h-[41px] xl:w-[108px] md:h-[39px] md:w-[78px] ' src={logo} alt="" />
            </div>
            <div className='flex xl:gap-20 md:gap-6 text-text-black'>
                <p>Home</p>
                <p>Menu</p>
                <p>Services</p>
                <p>Offers</p>
            </div>
            <div className='flex items-center md:gap-5 xl:gap-12'>
                <div>
                    <CiSearch color='#272727' size={24} />
                </div>
                <div>
                    <CiShoppingCart color='#272727' size={24} />
                </div>
                <div className='flex cursor-pointer bg-default-green py-2 rounded-3xl w-[130px] justify-center items-center gap-2'>
                    <LiaPhoneVolumeSolid size={14} color='white'/>
                    <p className='text-white' >Contact</p>
                </div>
            </div>
        </div>
    )
}