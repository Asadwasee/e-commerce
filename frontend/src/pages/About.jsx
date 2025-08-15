import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'
import Title from '../component/Title'

function About() {
  return (
    <div className="max-w-screen min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] overflow-x-hidden">
      <Title text1='About' text2='Us' />
      <div className="w-full flex items-center justify-center flex-col lg:flex-row ">
        <div className="lg:w-[50%] w-full flex items-center justify-center ">
          <img src={about} alt=""  className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm max-w-full'/>
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-0 ">
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] '>
            OneCart born for smart, seamless shopping-created to deliver quality products and services to our customers. We are committed to providing a hassle-free shopping experience, ensuring that you can shop with confidence and convenience.
          </p>
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] '>
            Our goal is to create a platform that connects you with a vast range of products and services, making it easy to find what you need and enjoy a hassle-free shopping experience.
          </p>
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] lg:text-[18px] mt-[10px] font-bold '>
            Our Mission
          </p>
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] '>
            Our mission is to redifine online shopping by offering a user-friendly platform that empowers customers to discover and purchase a wide variety of products and services with ease.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-[10px]">
        <Title text1={'Why'} text2={'Choose Us'} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] ">
          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center flex-col gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]  ">
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Quality Assurance</b>
            <p className='text-[13px] md:text-[15px] '>We prioritize quality in everything we do, ensuring that our products are of the highest standard and meet your expectations.</p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center flex-col gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]  ">
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Convenience</b>
            <p className='text-[13px] md:text-[15px] '> We prioritize quality in everything we do, ensuring that our products are of the highest standard and meet your expectations.</p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center flex-col gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]  ">
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Exceptional Customer Service</b>
            <p className='text-[13px] md:text-[15px] '> Our dedicated customer service team is always available to assist you with any questions or concerns you may have.</p>
          </div>
        </div>
      </div>
      <NewLetterBox />
    </div>
  )
}

export default About