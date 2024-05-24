import HeadBar from './Layouts/HeadBar';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import { motion } from 'framer-motion';
import Routing from './Layouts/Router';
function App() {


  return (
   <>


    <div className='min-h-screen border flex flex-col relative'>
        <HeadBar/>
        <div id="MainView" className='flex flex-grow min-h-full border-2'>
        <Navbar />
      <motion.div
        initial={{
          translateY: "-100px",
        }}
        animate={{
          translateY: "0px",
        }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
        className="w-full"
        >
        <div id='test' className="w-full"><Routing/>
          </div>
      </motion.div>
          </div>
        <Footer/>
    </div>
    </>
  );
}

export default App





// import HeadBar from './Layouts/HeadBar';
// import Navbar from './Layouts/Navbar';
// import Footer from './Layouts/Footer';
// import { motion } from 'framer-motion';
// import Routing from './Layouts/Router';
// function App() {


//   return (
//     <>


//       <div className='min-h-screen border flex flex-col relative'>
//         <HeadBar />
//         <Routing />
//         <Navbar />

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App

