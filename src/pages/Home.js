import IconPlus from '../assets/icons/icon-plus.svg'
import Table from '../components/table/Table.js'
import Card from "../components/card/Card.js"

function Home () {
  return (
    <div className="text-[#323A46] w-full pr-[36px] mt-[33px] pt-[59px]">
      <div className="ml-[33px]">
        <p className="text-[28px] font-[700]"> Hi Radhika, welcome back! </p>
      </div>
      <div className="mt-[44px] ml-[33px]">
        <p className="text-[20px] font-[700] leading-[27px]"> Your client list </p>
        <p className="text-[14px] font-[400] leading-[19px]"> You currently servicing 3 clients </p>
      </div>
      <Card />
      <div className="flex flex-wrap justify-between mt-[56px] items-end">
        <div className="ml-[33px]">
          <p className="text-[20px] font-[700] leading-[27px]"> Recent approvals </p>
          <p className="text-[14px] font-[400] leading-[19px]"> You can find the recent on-going approvals here </p>
        </div>
        <div className="ml-[33px] mt-7 sm:mt-0">
          <button className="bg-[#1E67AF] text-white py-[6px] px-[25px] rounded-[53px] leading-[19px] text-[16px] flex items-center">
            <img className="mr-3" src={ IconPlus } alt='' />
            <span> Create new approval </span> 
          </button>
        </div>
      </div>
      <Table />
      <div className="ml-[33px] mt-2 mb-10 cursor-pointer">
        <p className="text-[#1E67AF] text-[16px] font-[700]"> See all approvals here </p>
      </div>
    </div>
  )
}

export default Home