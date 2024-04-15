import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Minicart = ({ isMinicart, handleMinicart }: { isMinicart: boolean, handleMinicart : () => void }) => {

    return (
        <>
            <div className={`${isMinicart ? 'block' : 'hidden'} fixed inset-0 bg-brand3 z-40 transition-all duration-500 ease-in-out`} onClick={handleMinicart}></div>
            <div className={` ${isMinicart ? 'animate-minicart-in' : 'hidden'} fixed top-0 bottom-0 right-0 z-50 bg-brand10 py-6 px-4 w-80 md:w-96`}>
                <div className="relative flex items-center justify-center flex-col gap-5 h-full">
                    <div className="absolute right-0 top-0 flex justify-between items-center w-full border-b-2 border-solid border-brand8 pb-3">
                        <p className="text-brand4 text-2xl font-bold flex items-center gap-2"><LiaShoppingBagSolid />Carrinho</p>
                        <FaTimes className="text-brand4 w-5 h-5 cursor-pointer " onClick={handleMinicart} />
                    </div>
                    <FaTimesCircle className="w-16 h-16 mb-4" />
                    <p className="text-base text-brand4 font-bold">Seu Carrinho está vazio</p>
                    <button className="bg-brand1 w-full hover:bg-brand1/70  transition-all duration-500 ease-in-out text-brand10 py-[14px] px-[39.25px] rounded-lg font-normal text-sm leading-5 text-center" onClick={handleMinicart}>Continuar comprando</button>
                </div>
            </div>
        </>
    );
}

export default Minicart;
