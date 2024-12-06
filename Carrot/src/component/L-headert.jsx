import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Lheader = () => {
    return (
        <div className="d-flex justify-content-between align-items-center py-3">
            <button className="border bg-white rounded p-1 px-2"><HiOutlineMenuAlt1 size={20} /></button>
            <nav className=" ">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Category </a></li>
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Products </a></li>
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Pages </a></li>
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Blog</a></li>
                    <li className="nav-item"><a className="nav-link px-3 fw-semibold" href="">Elements</a></li>
                </ul>
            </nav>
            <div className="ms-3 d-flex justify-content-center align-items-center">
                <FiPhone  size={22} />
                <p className="m-0 mb-1 ps-2 fw-semibold">
                +123 ( 456 ) ( 7890 )</p>
            </div>
        </div>
    )
}
export default Lheader