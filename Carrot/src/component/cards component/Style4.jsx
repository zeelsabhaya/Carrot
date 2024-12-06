import Style4Card from "./Style4Card";
import { Col, Row } from "react-bootstrap";

const Style4 = () => {
    const phonedata = [
        {
            discount4: "20%",
            img4: "https://down-th.img.susercontent.com/file/th-11134207-7ras9-m1immmv0r30795",
            name4: "vivo x200 pro",
            reviews4: "120",
            text4: "Connectivity: Stay connected with the latest connectivity options on the Vivo X200 Pro.",
            price4: "1299",
        },
        {
            discount4: "30%",
            img4: "https://mobiletelco.in/wp-content/uploads/2024/06/Vivo-V40-Lite-5G.webp",
            name4: "Vivo V40 Lite 5G",
            reviews4: "100",
            text4: "Vivo V40 Lite 5G Launched, Comes With 6.78-inch Display, Storage 256GB | MobileTelco",
            price4: "1499",
        },
        {
            discount4: "70%",
            img4: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/07/iQoo-Z9-Turbo-launch-date-tipped.png?ssl=1&quality=80&w=f",
            name4: "iQoo Z9 Turbo+",
            reviews4: "400",
            text4: "iQoo Z9 Turbo+ Could Go Official Later This Year, Key Specifications Tipped - Smartprix",
            price4: "1399",
        },
        {
            discount4: "20%",
            img4: "https://down-th.img.susercontent.com/file/th-11134207-7ras9-m1immmv0r30795",
            name4: "vivo x200 pro",
            reviews4: "120",
            text4: "Connectivity: Stay connected with the latest connectivity options on the Vivo X200 Pro.",
            price4: "1299",
        },
        
    ]
    return (
        <div className="container">
            <div className="section-products mb-5 pb-5">
                <h2 className="text-center fw-bolder">Style 4</h2>
                <p className="Lorem text-center mb-5 pb-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                <Row className="d-flex flex-row">
                    {phonedata.map((value1) => (
                        <Col>
                            <Style4Card discount4={value1.discount4} img4={value1.img4} name4={value1.name4} reviews4={value1.reviews4} text4={value1.text4} price4={value1.price4} />
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    )
}
export default Style4;