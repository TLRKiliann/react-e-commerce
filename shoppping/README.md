# React-TypeScript e-commerce shopping-cart & login (sign-up & sign-in)

## Install

npm create vite .

package-name: shopping-cart

1    react

2    react-ts

npm install

npm run dev

npm install react-router-dom

npm install bootstrap react-bootstrap

npm install axios

---

mkdir backend

cd backend

npm init

npm install

npm install express node cors dotenv bcrypt mongoose nodemon

npm start

## Run

Client (Front) :

> npm run dev

Server (Backend) :

> npm start

---

## Structure of routing :

**BACKEND**

- server.js
- routes/
- models/


**FRONTEND**

main.tsx

```
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
```

App.tsx

import { ShoppingCartProvider } from "./context/ShoppingCartContext"

```
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Container >
    </ShoppingCartProvider>
```

## components/

- Navbar.tsx = routes & links
- StoreItem.tsx = functions for btn with img
    It's call ShoppingCartContext.tsx

- ShoppingCart = slide


- CartItem = img + number into slide of cart


## pages/

- Store.tsx

data.json + call StoreItem.tsx

## context/

- ShoppingCartContext.tsx

createContext & useContext
called by App.tsx to wrap routes by ShoppingCartProvider

```
        <ShoppingCartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
```

## data/

- items.json

## hooks/

- useLocalStorage.ts

## utilities/

- formatCurrency.ts

## public/imgs

- images...

---

## components/

- CartItem.tsx = 
- Navbar.tsx (NavLink) = logo cart + circle of n° quantity
- ShoppingCart.tsx =
- StoreItem.tsx = main page of Store

- StoreItem.tsx = main page of Store

---

App.tsx => Navbar.tsx => Store.tsx => StoreItem.tsx => ShoppingCartContext

CartItem.tsx (slide of cart)
Navbar.tsx (open cart)
ShoppingCart (inside slide of cart)
StoreItem (main page)

## Second STEP :

ShoppingCartContext => ShoppingCart.tsx

### All files of components except NavBar call "formatCurrency"!

### All files of components except NavBar call "ShoppingCartContext";

### ShoppingCartContext => useLocalStorage(ts)

### NavBar => Store => StoreItem => ShoppingCartContext


ShoppingCart:

import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";


### Data : ../data/items.json";

In Store & ShoppingCart & CartItem


### ShoppingCartProvider

App.tsx => ShoppingCartContext

---

## Bootstrap cheatcheat

```
    Extra small (xs)
    Small (sm)
    Medium (md)
    Large (lg)
    Extra large (xl)
    Extra extra large (xxl)
```

