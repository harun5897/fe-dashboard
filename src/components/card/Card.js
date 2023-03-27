import LogoProudfoot from '../../assets/images/logo-proudfoot.png'
import LogoRmi from '../../assets/images/logo-rmi.png'
import IconDot from '../../assets/icons/icon-dot.svg'
import LogoDbs from '../../assets/images/logo-dbs.png'

function Card () {
  return (
    <div className="ml-[33px] flex flex-wrap">
      <div className="sm:w-[259px] mt-[24px] h-[184px] bg-white rounded-[5px] p-[21px] relative sm:mr-[15px] mr-0 drop-shadow-md">
        <img className="absolute right-[10px] top-[6px]" src={ IconDot } alt='' />
        <img src={ LogoDbs } alt='' />
        <div className="mt-[16px]">
          <p className="text-[16px] font-[700]"> DBS Bank </p>
          <p className="text-[11px] font-[400] leading-[15px] mt-[4px]"> DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore. </p>
        </div>
      </div>
      <div className="sm:w-[259px] mt-[24px] h-[184px] bg-white rounded-[5px] px-[21px] pt-[10px] relative sm:mr-[15px] mr-0 drop-shadow-md">
        <img className="absolute right-[10px] top-[6px]" src={ IconDot } alt='' />
        <img src={ LogoProudfoot } alt='' />
        <div className="mt-[9px]">
          <p className="text-[16px] font-[700]"> Proudfoot </p>
          <p className="text-[11px] font-[400] leading-[15px] mt-[4px]"> Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place. </p>
        </div>
      </div>
      <div className="sm:w-[259px] mt-[24px] h-[184px] bg-white rounded-[5px] px-[21px] pt-[26px] relative sm:mr-[15px] mr-0 drop-shadow-md">
        <img className="absolute right-[10px] top-[6px]" src={ IconDot } alt='' />
        <img src={ LogoRmi } alt='' />
        <div className="mt-[14px]">
          <p className="text-[16px] font-[700]"> RMI </p>
          <p className="text-[11px] font-[400] leading-[15px] mt-[4px]"> RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service. </p>
        </div>
      </div>
    </div>
  )
}

export default Card