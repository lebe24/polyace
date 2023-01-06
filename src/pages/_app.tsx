import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ContractsProvider } from "src/context/contractContext";


export default function App({ Component, pageProps }: AppProps) {
  return (

    <ContractsProvider>
      <Component {...pageProps} />
    </ContractsProvider>

    
  )
}
