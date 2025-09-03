import React,{useState} from 'react'

const Welcome = () => {
//   return (
//     <div>
//         <h2>Welcome</h2>
//     </div>
//   )
// }
  const [firmName, setFirmName] = useState("");
 return (
    <div className='welcomeSection'>
        <h2>Welcome {firmName}</h2>
        <div className="landingImage">
          <img src='/assets/chef.jpg' alt='welcome' />
        </div>
    </div>
  )
}
export default Welcome