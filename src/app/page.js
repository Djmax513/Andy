import styles from './vault.module.css'

import { Album, CarouselBox } from '../components/Gallery'
import BackdropAnimation from '../components/BackdropAnimation'

export default function Home() {
  return (
    <div className=''>
      <BackdropAnimation />
      <nav className='fixed flex items-center justify-end p-4 px-8 w-screen'>ola mundo</nav>
      <main className='h-screen w-screen flex flex-col items-center justify-center'>
        {/* <p className='text-2xl mb-4'>ola mundo novo 123</p>*/}
        
        <div className='flex items-center justify-center'>
          <CarouselBox />
        </div>
      </main>
    </div>
  );
}
