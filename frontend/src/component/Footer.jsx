import logo from '../assets/vcart logo.png' 

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-0 '>
        <div className="w-[100%] md:h-[30vh] h-[15vh] md:mb-0 bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px] ">
            <div className="md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px] ">
                <div className="flex items-start justify-center gap-[5px] mt-[10px] md:mt-[40px] ">
                    <img src={logo} alt="" className='md:w-[50px] md:h-[50px] w-[30px] h-[30px]' />
                    <p className='md:text-[19px] text-[20px] text-black'>OneCart</p>
                    
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block '>
                        OneCart is your one-stop destination for all your shopping needs. We offer a wide range of products and services to help you meet your needs and exceed your expectations.
                    </p>
                    <p className='text-[15px] text-[#1e2223] flex md:hidden '>Fast. Easy. Reliable. OneCart Shopping</p>
            </div>
            <div className="md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center ">
                <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px] ">
                    <p className='text-[19px] md:text-[20px] font-sans text-[#1e2223] '>Company</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223]  md:block cursor-pointer '>Home</li>
                     <li className='text-[15px] text-[#1e2223]  md:block cursor-pointer '>About us</li>
                      <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer '>Delivery</li>
                       <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer '>Privacy Policy</li>
                </ul>
            </div>
            <div className="md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center">
                <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
                    <p className='text-[19px] md:text-[20px] font-sans text-[#1e2223] '>Get In Touch</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223] md:block cursor-pointer '>+92 123456789</li>
                     <li className='text-[15px] text-[#1e2223]  md:block cursor-pointer '>contact@onecart.com</li>
                      <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer '>+92 123456789</li>
                       <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer '>admin@onecart.com</li>
                </ul>
            </div>
        </div>
        <div className="w-[100%] h-[1px] bg-slate-400 "></div>
        <div className="w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center">Copyright 2025@onecart.com-All Rights Reserved</div>

    </div>
  )
}

export default Footer