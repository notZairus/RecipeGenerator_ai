import { useState, useEffect, useRef } from "react"
import cameraIcon from "./assets/camera.svg";

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

  function capturePicture(e) {
    alert('you took a pic');

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const image = canvas.toBlob((blob) => {

    })
  }


  return (
    <>
      <div className="w-screen min-h-screen bg-zinc-800 flex items-center justify-center">
        <main className="w-full h-full rounded text-white py-4 px-2 space-y-4">
          
          <section className="px-2 justify-between items-center">
            <h1 className="text-4xl font-bold">RG</h1>
            <p className="text-white/40 mt-1">Developer: Zairus V. Bermillo</p>
          </section>

          <section className="relative">
            <video 
              ref={videoRef} 
              className="w-full h-96 bg-black rounded-lg"
              autoPlay
              playsInline
            >
            </video>
            <button onClick={capturePicture} className="aspect-square w-20 bg-zinc-800 absolute m-auto flex items-center justify-center rounded-full inset-x-0 bottom-8">
              <img src={cameraIcon} alt="camera-icon" className="w-2/3"/>
            </button>
          </section>

          <section className="w-full h-auto min-h-20 flex justify-center items-center">
            <div className="flex-1 grid grid-cols-4 gap-3 px-8 my-4">
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
              <div class="aspect-square bg-gray-500 rounded-md shadow-md"></div>
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