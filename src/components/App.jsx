import { useState } from "react"

import { initialItems } from "../lib/constants"

import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ItemList from "./ItemList"
import BackgroundHeading from "./BackgroundHeading"


function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>

      <Footer />
    </>
  )
}

export default App
