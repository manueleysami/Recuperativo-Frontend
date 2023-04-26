import Buscador from './buscador'
function Nav (){
  
        return (
          <div className='flex justify-between items-center h-14 p-2 w-screen bg-slate-400 sm:h-24 lg:h-32'>
            <h1 className='text-2xl text-gray-700 font-BrunoSC sm:text-3xl lg:text-5xl'>MoviesTop</h1>
             
            <div><Buscador/></div>
            
          </div>
        );
}

export default Nav;