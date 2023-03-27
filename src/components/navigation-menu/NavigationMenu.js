import React, { useEffect } from 'react'
import LogoNavigationMenu from '../../assets/icons/logo-navigation-menu.svg'
import IconEditProfiles from '../../assets/icons/icon-edit-profiles.svg'
import IconDashboard from '../../assets/icons/icon-dashboard.svg'
import IconApprovals from '../../assets/icons/icon-approvals.svg'
import IconMyclients from '../../assets/icons/icon-my-clients.svg'
import IconBurger from '../../assets/icons/icon-burger.svg'
import Avatar from '../../assets/images/avatar.png'

function NavigationMenu (props) {
  const handleResize = () => {
    window.innerWidth < 1224 ? hideMenu('hidden') : hideMenu('block')
  }
  const hideMenu = (val) => {
    props.onEvent(val)
  }
  useEffect(()=> {
    window.addEventListener('resize', handleResize)
  })
  return (
    <div className="h-screen bg-white min-[1224px]:w-[295px] w-screen shadow-md">
      <div className="bg-[#1E67AF] py-[22px] pl-[23px] w-full flex justify-between">
        <img src={ LogoNavigationMenu } alt="" />
        <div className="mr-7 min-[1224px]:hidden block cursor-pointer" onClick={ () => hideMenu('hidden') }>
          <img src={ IconBurger } alt="" />
        </div>
      </div>
      <div className="mt-[59px] ml-[25px]">
        <img src={ Avatar } alt="" />
      </div>
      <div className="mt-[12px] ml-[29px]">
        <p className="text-[16px] font-[700]"> Radhika Dhawan Puri </p>
        <p className="text-[14px] font-[400]"> Senior Client Services </p>
      </div>
      <div className="px-[29px] mt-[29px]">
        <hr></hr>
      </div>
      <div className="mt-[29px] ml-[29px]">
        <p className="text-[11px] font-[400]"> NAVIGATION </p>
        <div className="flex mt-[12px] cursor-pointer">
          <img src={ IconDashboard } alt='' />
          <p className="text-[#1E67AF] text-[16px] font-[700] ml-[12px]"> Dashboard </p>
        </div>
        <div className="flex mt-[10px] cursor-pointer">
          <img src={ IconApprovals } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> Approvals </p>
        </div>
      </div>
      <div className="px-[29px] mt-[44px]">
        <hr></hr>
      </div>
      <div className="mt-[29px] ml-[29px] cursor-pointer">
        <p className="text-[11px] font-[400]"> MY ACCOUNT </p>
        <div className="flex mt-[12px]">
          <img src={ IconMyclients } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> My clients </p>
        </div>
        <div className="flex mt-[10px] cursor-pointer">
          <img className="" src={ IconEditProfiles } alt='' />
          <p className="text-[16px] font-[700] ml-[12px]"> Edit profiles </p>
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu