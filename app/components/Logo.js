"use client";
import Image from "next/image";
export default function Logo(){
    return (
        <>
        <div className="logo-container">
            <Image src="/images/vendor-1.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
            <Image src="/images/vendor-2.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
            <Image src="/images/vendor-3.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
            <Image src="/images/vendor-4.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
            <Image src="/images/vendor-5.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
            <Image src="/images/vendor-6.jpg" alt="vendor" className="logo-img"  width={200} height={100} priority/>
        </div>
        </>
    )
}