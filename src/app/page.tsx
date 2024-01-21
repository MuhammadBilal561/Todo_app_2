import { TodoWrapper } from "@/components/TodoWrapper";
import Image from "next/image";
import { FaInstagram , FaFacebook , FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
import {ThemeProvider} from 'next-themes'
import image from '../../public/todoImg.png'

export default function Home() {
  return (
    
    <main className="grid gap-y-1">
    
      <TodoWrapper/>
      <div className="flex justify-center items-center">
        <Image
        src={image}
        alt=""
        height={250}
        width={250}

        />
      </div>

      <div className="flex justify-center items-center gap-x-6 text-white mt-8 mb-3 "  >
      <button className="hover:text-black"><FaGithub  size={25}/>       </button>
     <button className="hover:text-black"><FaInstagram  size={25}/>  </button> 
     <button className="hover:text-black"><FaFacebook size={25} />   </button>
     <button className="hover:text-black"><FaLinkedin size={25} />  </button>
     <button className="hover:text-black"><FaTwitter size={25} />   </button>

      </div>
    </main>
  );
}
