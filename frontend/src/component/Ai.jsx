import { useContext, useState } from 'react';
import ai from '../assets/ai.jpg'
import { ShopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

function Ai() {
    let {showSearch, setShowSearch} = useContext(ShopDataContext)
    let navigate = useNavigate();
    let [activeAi, setActiveAi] = useState(false);
    
    function speak(message){
        let utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }

    const speechRecongition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recongnition = new speechRecongition();
    if(!recongnition){
        console.log("not supported");
        
    }

    recongnition.onresult =(e)=>{
        const transcript = e.results[0][0].transcript.trim();
        if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("open") && !showSearch){
            speak("opening search");
            setShowSearch(true);
            navigate("/collection")
        }
        else if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("close") && showSearch){
            speak("closing search");
            setShowSearch(false);
        
        }
        else if(transcript.toLowerCase().includes("collection") || transcript.toLowerCase().includes("collections") || transcript.toLowerCase().includes("products") || transcript.toLowerCase().includes("product")){
            speak("opening collection page");
            navigate("/collection")
        }
        else if(transcript.toLowerCase().includes("about") || transcript.toLowerCase().includes("aboutpage")){
            speak("opening about page");
            navigate("/about")
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("home") || transcript.toLowerCase().includes("homepage")){
            speak("opening home page");
            navigate("/")
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("cart") || transcript.toLowerCase().includes("cartpage") || transcript.toLowerCase().includes("katt") || transcript.toLowerCase().includes("caat")){
            speak("opening cart page");
            navigate("/cart")
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("contact") || transcript.toLowerCase().includes("contactpage")){
            speak("opening contact page");
            navigate("/contact")
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("order") || transcript.toLowerCase().includes("orderpage")){
            speak("opening order page");
            navigate("/order")
            setShowSearch(false);
        }
        else{
            speak("I don't understand");
            toast.error("I don't understand, Try again", {duration: 2000});
        }

        }
        recongnition.onend=()=>{
            setActiveAi(false);
        }
  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[3%] ' onClick={() => {recongnition.start();
        setActiveAi(true);
    }}>
       <img src={ai} alt="" className={`w-[60px] h-[60px] cursor-pointer rounded-full ${activeAi ? 'translate-x-[10%] translate-y-[10%] scale-125' : 'translate-x-0 translate-y-0 scale-100 '} transition-transform`} style={{
        filter: `${activeAi ? "dr-shadow(0 0px 30px #00d2fc)": "drop-shadow(0 0px 20px black)"}`
       }} />
    </div>
  )
}

export default Ai