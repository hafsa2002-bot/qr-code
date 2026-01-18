

function App() {


  return (
    <div className="bg-slate-300 font-outfit text-[15px] w-full h-screen flex justify-center items-center ">
      <div className="bg-white lg:w-1/5 w-10/12 rounded-lg p-3 flex-col justify-center items-center">
        <div className="rounded-lg overflow-hidden">
          <img src="/image-qr-code.png" alt="qr-image" />
        </div>
        <h2 className="text-center font-bold text-slate-900 py-2">Improve your front-end skills by building projects</h2>
        <p className="text-center text-slate-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

        <div class="attribution" className="pt-1 text-center flex-col">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-slate-600" target="_blank">Frontend Mentor</a>.<br/> 
          Coded by <a href="#" className="text-slate-600">Hapeusa</a>.
        </div>
      </div>
    </div>
  )
}

export default App
