'use client'
import Payment from"./Payment"
export default function OrderTotal(){
    return(
        <>
        <div>
            <div className="orderTotsal-container" style={{display:"flex", flexDirection:"column", border:"2px solid #EDF1FF"}}>
        <h2 style={{backgroundColor:"#6c757d54"}}>Order Total</h2>
        <div className="side-info">
            <h4>Products</h4>
            <div >
                <p className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold"}}>Colorful stylish shirt 1
                    <span>150$</span>
                </p>
            </div>
            <div >
                <p className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold"}}>Colorful stylish shirt 2
                    <span>150$</span>
                </p>
            </div>
            <div >
                <p className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold"}}>Colorful stylish shirt 3
                    <span>150$</span>
                </p>
            </div>
        </div>
        <div className="sub-info" style={{borderTop:"2px solid #EDF1FF"}}>
            <div className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"spaceBetween", flexDirection:"row",  gap:"300px", fontWeight:"bold"}}>
                <p>Subtotal</p>
                <span>150$</span>
            </div>
            <div className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"spaceBetween", flexDirection:"row",  gap:"300px", fontWeight:"bold"}}>
                <p>Shipping</p>
                <span>10$</span>
            </div>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"300px", fontWeight:"bold", borderTop:"2px solid #EDF1FF"}}>
            <h2>Total</h2>
            <span>160$</span>
        </div>
        </div>

        <br />
        <Payment/>
        </div>
        </>
    )
}