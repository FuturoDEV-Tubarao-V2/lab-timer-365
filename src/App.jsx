import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { CycleProvider } from './contexts/cycle'


function App() {
  return (
    <CycleProvider>
      <RouterProvider router={routes} />
    </CycleProvider>
  )
}


export default App
