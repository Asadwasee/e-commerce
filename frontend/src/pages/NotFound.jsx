import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-l from-[#141414] to-[#0c2025]">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
             <div className="flex justify-center mt-5">
                <button className="px-4 py-2 mr-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" onClick={() => navigate('/login')}>Login</button>
                <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </div>
    )
}

           
