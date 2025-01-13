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
        <main className="w-full h-full bg-zinc-800 rounded text-white py-4 px-2 space-y-4">
          
          <section className="px-2">
            <h1 className="text-4xl font-bold">RG</h1>
          </section>

          <section className="bg-yellow-400 relative">
            <video 
              ref={videoRef} 
              className="w-full h-96 bg-black rounded-lg"
              autoPlay
              playsInline
            >
            </video>
            <button className="aspect-square w-20 bg-zinc-800 absolute m-auto flex items-center justify-center rounded-full inset-x-0 bottom-8">
                Capture
            </button>
            
          </section>

          <section className="w-full h-auto min-h-20 flex">
            <div className="flex-1 grid grid-cols-5 gap-4 px-8 my-4">
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}