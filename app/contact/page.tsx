import React from 'react'
import Navbar from '../components/Navbar'

import ContactsHero from '../components/ContactsHero'

const ContactsPage = () => {
  return (
        <div className="h-[100vh] bg-secondary flex">
      <div className="flex flex-1 flex-col">
        <Navbar/>
        <ContactsHero/>

      </div>
    </div>
  )
}

export default ContactsPage