import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

useEffect(() => {
  fetch('/api')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);

export default App
