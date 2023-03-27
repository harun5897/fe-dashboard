import IconSearch from '../../assets/icons/icon-search.svg'
import IconLogout from '../../assets/icons/icon-logout.svg'
import IconBurger from '../../assets/icons/icon-burger.svg'

function Header (props) {
  const hidePage = () => {
    window.innerWidth < 1224 ? props.onEvent('hidden') : props.onEvent('block')
  }
  return(
    <div className="h-[65px] bg-white text-[#A1A1A1] flex justify-between pr-[30px] drop-shadow-md w-full">
      <div className="py-[24px] ml-[33px] flex items-center text-[14px]">
        <img className="mr-[10px]" src={ IconSearch } alt='' />
        <input className="outline-none" placeholder='Search anything here...'></input>
      </div>
      <div className="flex items-center">
        <div className="mr-3">
          <img src={ IconLogout } alt='' />
        </div>
        <p className="text-[16px] text-[#EE0D0D] font-[700] mr-7"> Logout </p>
        <div className='cursor-pointer' onClick={ hidePage }>
          <img src={ IconBurger } alt='' />
        </div>
      </div>
    </div>
  )
}

export default Header