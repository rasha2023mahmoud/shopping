'use client'
import Payment from"./Payment"
export default function OrderTotal(){
    return(
        <>
        <div>
            <div className="orderTotal-container" style={{display:"flex", flexDirection:"column", border:"2px solid #EDF1FF"}}>
        <h2 style={{backgroundColor:"#6c757d54"}}>Order Total</h2>
        <div className="side-info">
            <h4 style={{padding: "5px", margin:"5px"}}>Products</h4>
            <div className="style-data" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold", padding:"5px", margin:"5px"}}>
                <p className="stylish">Colorful stylish shirt 1
                </p>
                <span>150$</span>
            </div>
            <div className="style-data" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold", padding:"5px", margin:"5px"}}>
                <p className="stylish">Colorful stylish shirt 2
                </p>
                <span>150$</span>
            </div>
            <div className="style-data" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"200px", fontWeight:"bold", padding:"5px", margin:"5px"}}>
                <p className="stylish">Colorful stylish shirt 3
                </p>
                <span>150$</span>
            </div>
        </div>
        <div className="sub-info" style={{borderTop:"2px solid #EDF1FF"}}>
            <div className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"spaceBetween", flexDirection:"row",  gap:"300px", fontWeight:"bold", padding:"5px", margin:"5px"}}>
                <p>Subtotal</p>
                <span>150$</span>
            </div>
            <div className="stylish" style={{display:"flex", alignItems:"center", justifyContent:"spaceBetween", flexDirection:"row",  gap:"300px", fontWeight:"bold", padding:"5px", margin:"5px"}}>
                <p>Shipping</p>
                <span>10$</span>
            </div>
        </div>
        <div className="total-price" style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row",  gap:"300px", fontWeight:"bold", borderTop:"2px solid #EDF1FF", padding:"5px", margin:"5px"}}>
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