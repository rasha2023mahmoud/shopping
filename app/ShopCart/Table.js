import Image from "next/image";
import { AiFillPlusSquare } from "react-icons/ai";
import { CiSquareMinus } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";

export default function Table() {
  return (
    <>
      <table
        style={{
          width: "80%",
          margin: "80px auto",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ backgroundColor: "#EDF1FF" }}>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Products</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Price</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Quantity</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Total</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Remove</th>
          </tr>
        </thead>

        <tbody>
          {/* ========== الصف الأول ========== */}
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src="/images/product-1.jpg" width={50} height={50} alt="product-1" />
                <span>Colorful Stylish Shirt</span>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <div className="add-cart" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <AiFillPlusSquare  style={{fontSize: "40px", color: "#D19C97"}}/>
                <span style={{fontSize: "40px", fontWeight: "bold"}}>1</span>
                <CiSquareMinus style={{fontSize: "40px", color: "#D19C97"}}/>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <MdOutlineAddBox  style={{fontSize: "40px", fontWeight: "bold", margin: "0 auto"}}/>
            </td>
          </tr>

          {/* ========== الصف الثاني ========== */}
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src="/images/product-2.jpg" width={50} height={50} alt="product-2" />
                <span>Colorful Stylish Shirt</span>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <div className="add-cart" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <AiFillPlusSquare style={{fontSize: "40px", color: "#D19C97"}}/>
                <span style={{fontSize: "40px", fontWeight: "bold"}}>1</span>
                <CiSquareMinus style={{fontSize: "40px", color: "#D19C97"}}/>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <MdOutlineAddBox style={{fontSize: "40px", fontWeight: "bold", margin: "0 auto"}}/>
            </td>
          </tr>

          {/* ========== الصف الثالث (تم تصحيحه) ========== */}
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src="/images/product-3.jpg" width={50} height={50} alt="product-3" />
                <span>Colorful Stylish Shirt</span>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <div className="add-cart" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <AiFillPlusSquare style={{fontSize: "40px", color: "#D19C97"}}/>
                <span style={{fontSize: "40px", fontWeight: "bold"}}>1</span>
                <CiSquareMinus style={{fontSize: "40px", color: "#D19C97"}}/>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc", fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <MdOutlineAddBox  style={{fontSize: "40px", fontWeight: "bold", margin: "0 auto"}}/>
            </td>
          </tr>

          {/* ========== الصف الرابع ========== */}
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src="/images/product-4.jpg" width={50} height={50} alt="product-4" />
                <span>Colorful Stylish Shirt</span>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc" , fontWeight: "bold"}}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <div className="add-cart" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <AiFillPlusSquare style={{fontSize: "40px", color: "#D19C97"}}/>
                <span style={{fontSize: "40px", fontWeight: "bold"}}>1</span>
                <CiSquareMinus style={{fontSize: "40px", color: "#D19C97"}}/>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc" , fontWeight: "bold"}}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <MdOutlineAddBox  style={{fontSize: "40px", fontWeight: "bold", margin: "0 auto"}}/>
            </td>
          </tr>

          {/* ========== الصف الخامس ========== */}
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src="/images/product-5.jpg" width={50} height={50} alt="product-5" />
                <span>Colorful Stylish Shirt</span>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc",  fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <div className="add-cart" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <AiFillPlusSquare style={{fontSize: "40px", color: "#D19C97"}}/>
                <span style={{fontSize: "40px", fontWeight: "bold"}}>1</span>
                <CiSquareMinus style={{fontSize: "40px", color: "#D19C97"}}/>
              </div>
            </td>
            <td style={{ border: "1px solid #ccc",  fontWeight: "bold" }}>$150</td>
            <td style={{ border: "1px solid #ccc" }}>
              <MdOutlineAddBox  style={{fontSize: "40px", fontWeight: "bold", margin: "0 auto"}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
