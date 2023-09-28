import './App.css'
import { ConfigProvider } from 'antd'
import PageContent from './Components/PageContent/PageContent'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/Sidebar'

function App() {
  
  return (
    <> 
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#218256',
          colorText:"#218256"
     
        },
      }}
    >
      <div className="app">
        <section className='section-one'>
          <SideBar/>
        </section>
        <section className='section-two'>
          <Header/>
          <PageContent/>
        </section>
      </div>
    </ConfigProvider>
    </>
  )
}

export default App
