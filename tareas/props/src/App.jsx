import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './components/Producto'

function App() {
  const productos = {
    producto1: {
      nombreProducto: "Laptop Gamer",
      precio: 1500.99,
      descripcion: "Laptop de alto rendimiento con procesador Intel i7 y tarjeta gráfica RTX 3060.",
      enStock: true
    },
    producto2: {
      nombreProducto: "Smartphone 5G",
      precio: 799.49,
      descripcion: "Teléfono inteligente con conectividad 5G, pantalla AMOLED de 6.5 pulgadas y cámara de 64 MP.",
      enStock: false
    },
    producto3: {
      nombreProducto: "Auriculares Inalámbricos",
      precio: 120.75,
      descripcion: "Auriculares con cancelación de ruido y batería de larga duración.",
      enStock: true
    },
    producto4: {
      nombreProducto: "Monitor 4K",
      precio: 450.00,
      descripcion: "Monitor 4K UHD de 27 pulgadas con tecnología HDR para colores vibrantes y nítidos.",
      enStock: true
    }
  }

  return (
    <div className='box-flex'>
      <Producto {...productos.producto1}/>
      <Producto {...productos.producto2}/>
      <Producto {...productos.producto3}/>
      <Producto {...productos.producto4}/>
    </div>
  )
}

export default App
