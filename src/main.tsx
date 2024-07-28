import '@fontsource/poppins'
import 'animate.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)
