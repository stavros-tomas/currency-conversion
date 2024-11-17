import './App.css'
import Convert from './components/Convert/Convert'

function App() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-4">
      <h1 className="tw-text-3xl tw-font-bold">Currency Conversion</h1>

      <div className="tw-mt-10 tw-w-full tw-max-w-xl">
        <Convert/>
      </div>
    </div>
  )
}

export default App
