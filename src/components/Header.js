import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch (toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-3 shadow-lg bg-white items-center'>

      {/* Left Section with Hamburger Logo and Youtube Logo */}
      <div className='flex items-center col-span-1 gap-4'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-6 cursor-pointer'
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="Youtube Hamburger img"
        />

        <img
          className='h-6 cursor-pointer'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>

      {/* Middle Section with Search Bar and Search Icon  */}
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-1/2 p-2 px-5 border border-gray-700 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className=" p-3 bg-gray-100 hover:bg-gray-300 border border-gray-700 rounded-r-3xl focus:outline-none focus:ring-2 focus:ring-blue-500">
          <img className='h-4' src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" />
        </button>
      </div>


      {/* Last Sectino with User icon  */}
      <div className='col-span-1'>
      <lord-icon
    src="https://cdn.lordicon.com/hrjifpbq.json"
    trigger="hover">
</lord-icon>
      </div>
    </div>
  )
}

export default Header
