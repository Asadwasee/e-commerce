import contact from '../assets/contact.jpg'
import NewLetterBox from '../component/NewLetterBox'
import Title from '../component/Title'

function Contact() {
  return (
    <div className='w-[100%] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] '>
      <Title text1={'Contact'} text2={'Us'} />
      <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row ">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center ">
          <img src={contact} alt=""  className='lg:w-[70%] w-[50%] shadow-md shadow-black rounded-sm '/>
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-0 ">
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] fon-bold'> 
            123456 Random Station
            <p> random city, state 12345</p>
          </p>
          
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] fon-bold '>
            Phone: (123) 456-7890
            <p>Email: 0E6Y8@example.com</p>
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-white  lg:text-[18px] mt-[10px] font-bold '> Careers at OneCart</p>
          <p className='lg:w-[80%] w-full text-white md:text-[16px] text-[13px] fon-bold ' >
            Learn more about careers at OneCart and join our team.
          </p>
          <button className='px-[20px] py-[15px] flex items-center justify-center text-white bg-transparent border active:bg-slate-600 rounded-lg '>Explore Job</button>
          
          </div>
      </div>
       <NewLetterBox />
    </div>
  )
}

export default Contact