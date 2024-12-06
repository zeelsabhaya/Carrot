import { BiSearch } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

const Fheder = () => {
    return (
        <div className="header py-4 border-bottom d-flex justify-content-between align-items-center">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
            <div className="rounded border border-success ps-2 d-flex overflow-hidden">
                <input type="text" placeholder="Search For items..." className="input" />
                <select class="form-select rounded-0 border-0 border-start border-success w-25" aria-label="Default select example">
                    <option selected>All Categories</option>
                    <option value="1">Mens</option>
                    <option value="2">Womens</option>
                    <option value="3">Electronics</option>
                </select>
                <button type="search" className="bts1 bg-success border-0 text-white"><BiSearch size={20} /></button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="ms-3 d-flex justify-content-center align-items-center">
                    <LuUser size={22} />
                    <p className="m-0 ps-2 fw-semibold">Account</p>
                </div>
                <div className="ms-3 d-flex justify-content-center align-items-center">
                    <GoHeart  size={22} />
                    <p className="m-0 ps-2 fw-semibold">
                        Wishlist</p>
                </div>
                <div className="ms-3 d-flex justify-content-center align-items-center">
                    <RiShoppingCartLine  size={22} />
                    <p className="m-0 ps-2 fw-semibold">
                        Cart</p>
                </div>
            </div>
        </div>
    )
}
export default Fheder