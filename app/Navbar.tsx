import Link from 'next/link'
import React from 'react'
import {MessageSquare} from 'lucide-react'
import {ModeToggle} from '@/components/ModeToggle'
import {Button} from  '@/components/ui/button'
function Navbar() {
  return (
    <div className='max-w-7xl container mx-auto mt-5'>
       <div className="flex justify-between items-center">
         <div>
           <Link href="/">
             <h2 className="text-xl font-medium">ChatApp</h2>
           </Link>
         </div>
         <div className="flex gap-4 items-center">
           <Link href="/chat">
             <MessageSquare />
           </Link>
           
           <ModeToggle />
           <Link href="/auth">
             <Button>Sign in with Google</Button>
           </Link>
         </div>
       </div>
    </div>
  )
}

export default Navbar