import Image from "next/image";
import { AiFillPlusSquare } from "react-icons/ai";
import { CiSquareMinus } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";

export default function Table() {
  return (
    <>
      <table style={{ width: "40%", padding: "10px", margin: "80px" }}>
        <thead style={{ backgroundColor: "#rgb 237, 241, 255" }}>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody style={{ width: "50%" }}>
          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <Image
                className=""
                src="/images/product-1.jpg"
                width={100}
                height={100}
                priority
                alt="product-1"
              />
              <span>Colorful Stylish Shirt</span>
            </td>
            <td>$150</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  textAlign: "center",
                }}
              >
                <AiFillPlusSquare style={{}} />
                <span>1</span>
                <CiSquareMinus style={{}} />
              </div>
            </td>
            <td>$150</td>
            <td style={{ margin: "0 auto" }}>
              <MdOutlineAddBox />
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <Image
                className=""
                src="/images/product-2.jpg"
                width={100}
                height={100}
                priority
                alt="product-2"
              />
              <span>Colorful Stylish Shirt</span>
            </td>
            <td>$150</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  textAlign: "center",
                }}
              >
                <AiFillPlusSquare style={{}} />
                <span>1</span>
                <CiSquareMinus style={{}} />
              </div>
            </td>
            <td>$150</td>
            <td>
              <MdOutlineAddBox />
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <Image
                className=""
                src="/images/product-3.jpg"
                width={100}
                height={100}
                priority
                alt="product-3"
              />
              <span>Colorful Stylish Shirt</span>
            </td>
            <td>$150</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  textAlign: "center",
                }}
              >
                <AiFillPlusSquare style={{}} />
                <span>1</span>
                <CiSquareMinus style={{}} />
              </div>
            </td>
            <td>$150</td>
            <td>
              <MdOutlineAddBox />
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <Image
                className=""
                src="/images/product-4.jpg"
                width={100}
                height={100}
                priority
                alt="product-4"
              />
              <span>Colorful Stylish Shirt</span>
            </td>
            <td>$150</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  textAlign: "center",
                }}
              >
                <AiFillPlusSquare style={{}} />
                <span>1</span>
                <CiSquareMinus style={{}} />
              </div>
            </td>
            <td>$150</td>
            <td>
              <MdOutlineAddBox />
            </td>
          </tr>
          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <Image
                className=""
                src="/images/product-5.jpg"
                width={100}
                height={100}
                priority
                alt="product-5"
              />
              <span>Colorful Stylish Shirt</span>
            </td>
            <td>$150</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  textAlign: "center",
                }}
              >
                <AiFillPlusSquare style={{}} />
                <span>1</span>
                <CiSquareMinus style={{}} />
              </div>
            </td>
            <td>$150</td>
            <td>
              <MdOutlineAddBox />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
