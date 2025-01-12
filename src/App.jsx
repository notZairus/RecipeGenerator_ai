import { useState, useEffect, useRef } from "react"

export default function App() {
  
  const [tryy, setTryy] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.log(error);
      }
    }

    startCamera();
  }, [])


  return (
    <>
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center">
        <main className="min-h-20 w-[360px] bg-zinc-800 rounded text-white py-4 px-2 space-y-4">
          
          <section className="px-2">
            <h1 className="text-4xl font-bold">RG</h1>
          </section>

          <section>
            <video 
              ref={videoRef} 
              className="w-full h-96 bg-black rounded-lg"
              autoPlay
              playsInline
            >
            </video>
          </section>

        </main>
      </div>
    </>
  )
}