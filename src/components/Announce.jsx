import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Announce= () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
            <div>Announcement</div>
          <aside className="lg:col-span-1 space-y-6">
            <Search/>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Announce