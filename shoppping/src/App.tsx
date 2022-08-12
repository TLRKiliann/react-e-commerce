import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Subscribe } from "./pages/Subscribe"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { AuthContextProvider } from "./context/AuthContextProvider"


function App() {
  return (
    <ShoppingCartProvider>
      <AuthContextProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </Container >
      </AuthContextProvider>
    </ShoppingCartProvider>
  );
}

export default App;
