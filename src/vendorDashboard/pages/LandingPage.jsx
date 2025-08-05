import React, {useState ,useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister , setShowRegister] = useState(false)
  const [showFirm , setShowFirm] = useState(false)
  const [showProduct , setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts , setShowAllProducts] = useState(false)
  const [showLogOut , setShowLogOut] = useState(false)
  const [showFirmTitle , setShowFirmTitle] = useState(true)


  useEffect (()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogOut(true)
      setShowWelcome(true)
    }
  },[])

   useEffect (()=>{
    const firmName = localStorage.getItem('firmName');
    if(firmName){
      setShowFirmTitle(false)
    }
  },[])
  

  const logOutHandler=()=>{
    confirm('Are you sure, to Logout?');
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false)
    setShowFirmTitle(true)

  }
    const showLoginHandler =()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)

  }

  const showRegisterHandler =() => {
    setShowRegister(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)

  }

   const showFirmHandler =() => {
      setShowFirm(true)
    setShowRegister(false)
    setShowLogin(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    
  }

  const showProductHandler =() => {
    if(showLogOut){
      setShowProduct(true)
    setShowFirm(false)
    setShowRegister(false)
    setShowLogin(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    }else{
      alert("please login")
      setShowLogin(true);
    }
  }

  const showWelcomeHandler =() => {
    setShowProduct(false)
    setShowFirm(false)
    setShowRegister(false)
    setShowLogin(false)
    setShowWelcome(true)
    setShowAllProducts(false)

  }

   const showAllProductsHandler =() => {
    if(showLogOut){
      setShowProduct(false)
    setShowFirm(false)
    setShowRegister(false)
    setShowLogin(false)
    setShowWelcome(false)
    setShowAllProducts(true)
    }else{
      alert("please login")
      setShowLogin(true);
    } 
  }

  return (
    <>
        <section className='landingSection'>
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler = {showRegisterHandler} 
            showLogOut={showLogOut} 
            logOutHandler={logOutHandler}/>
            <div className="collectionSection">
            <SideBar showFirmHandler = {showFirmHandler} showProductHandler ={showProductHandler}
            showAllProductsHandler = {showAllProductsHandler} showFirmTitle = {showFirmTitle }
            />
            {showLogin && <Login showWelcomeHandler = {showWelcomeHandler} />}
            {showRegister && <Register showLoginHandler = {showLoginHandler} /> }
            {showFirm && <AddFirm/>}
            {showProduct && showLogOut && <AddProduct/>}
            {showWelcome && <Welcome/>}
            {showAllProducts && showLogOut && <AllProducts/>}
          </div>
        </section>
    </>
  )
}

export default LandingPage