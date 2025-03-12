import Image from "next/image"
import Logo from "../../public/Logo Clinica.svg"

export default function () {
    return (
        <div className=" d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
            <div className=" text-center font-weight-bold" style={{ fontSize: '3rem', color: '#4844B6' }}>
            <Image src={Logo} alt="LOGO CLINIC" />
            </div>
        </div>
    )
}