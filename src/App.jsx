import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = 'https://backend-para-integrar-com-frontend.onrender.com/personagem'

    const response = await fetch(apiUrl).catch(function (error) {
      console.error('Erro ao chamar endpoint /personagem', error)
      toast.error('Algum erro ocorreu na API.')
    })

    if (response.ok) {
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de DevMon.')
    }
  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      <div className='cards'>
        {devmons.map(function (devmon, index) {
          return <Card key={index} item={devmon} />
        })}
      </div>
      <ToastContainer />
    </>
  )
}

export default App