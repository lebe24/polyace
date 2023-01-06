import {useState , useContext} from 'react'
import Link from 'next/link';
import Logo from 'public/assets/polygon.svg'
import Image from 'next/image';
import sty from  'styles/Nav.module.css'
import { ContractsContext } from "src/context/contractContext";
import { shortenAddress } from 'src/utils/shortAddress';
import MenuItem from "./MenuItem";



const Navbar = () => {

  const style = {
    wrapper :`bg-mainBg  w-full border-b top-0 border-slate-400/5 z-20 shadow-lg text-2xl`,
    container: `px-4 py-5 mx-auto animate-fade-in-up sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8`,
    nav:`relative flex items-center justify-between`,
    logo: `inline-flex items-center`,
    logo_tx: `text-3xl font-raj font-semibold tracking-wider text-white`,
    logo_span:`text-logo-gradient`,
    ul:`hidden mf:flex font-medium items-center text-slate-300 uppercase space-x-8`,
    li: `tracking-wide ${sty.hoverEffect}`,
    btn_ul:`hidden mf:flex items-center space-x-8`,
    btn_add:`p-3 w-[13rem] border border-2 rounded-md border-[#a696e7] bg-[#6f4cff14] ${sty.btn_shadow}`,
    btn_span:`text-white text-center uppercase text-sm p-1`,
    btn_tog:`absolute right-6 mf:hidden top-[5px] scale-150`

  }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentAccount, connectWallet } = useContext(ContractsContext);

    const showMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.nav}>
          <Link className={style.logo} title='company' href="/">
            <Image src={Logo} className="mr-1" alt='polycrypto' height={30}/>
            <span className={style.logo_tx}>Poly<span className={style.logo_span}>ace</span></span>
          </Link>

          {/* Navigation Buttons */}

          <ul className={style.ul}>
            <li>
              <Link className={style.li} href="/buytoken">
                Buy Token
              </Link>
            </li>
            <li>
              <Link className={style.li} href="/lottery">
                Lottery
              </Link>
            </li>
            <li>
              <Link className={style.li} href="/send">
                 Send Ether
              </Link>
            </li>
          </ul>

          {/* Button */}

          <ul className={style.btn_ul}>
            <li>
              {
                !currentAccount &&(
                  <>

                      <button type='button' onClick={connectWallet} className={style.btn_add}>
                        <span className={style.btn_span}>connect</span>
                      </button>
                      
                  </>
                )
              }
              {
                currentAccount && (
                  <>
                  
                      <button className={style.btn_add} onClick={
                        () => window.open('http://www.website.com/page')
                      }>
                        <span className={style.btn_span}>{shortenAddress(currentAccount)}</span>
                      </button>
                    
                  </>
                )
              }
            </li>
          </ul>

          {/* Toggler */}

          <div className={style.btn_tog}>
            <button className={isMenuOpen ?  "menu opened" : "menu"} onClick={showMenu} aria-label="Main Menu">
            <svg width="30" height="30" viewBox="0 -16 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MenuItem
        showMenu={showMenu}
        active={isMenuOpen}
        currentAccount={currentAccount}
      />
    </div>
  )
}

export default Navbar