import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ItemList from "./ItemList"
import BackgroundHeading from "./BackgroundHeading"


function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default App
