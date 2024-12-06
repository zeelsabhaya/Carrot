
const Style4Card = ({discount4, img4, name4, reviews4, text4, price4}) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <span className="badge">-{discount4}</span>
                <div className="quick-view">Quick View</div>
                <img src={img4} alt="" />
            </div>
            <div className="product-content">
                <h3 className="product-title">{name4}</h3>
                <div className="product-rating">
                ★★★★☆ <span>({reviews4} reviews)</span>
                </div>
                <p className="product-description">{text4}</p>
                <div className="product-footer">
                    <p className="product-price">${price4}</p>
                    <div>
                        <a href="#" className="product-button">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Style4Card;