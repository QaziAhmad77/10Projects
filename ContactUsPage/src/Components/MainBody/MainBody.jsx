import { Service } from '../../assets';
import Form from './Form';

const MainBody = () => {
  return (
    <div className=" w-[90%] mx-auto h-screen">
      <div className=" flex flex-col gap-10  pt-14">
        <div className="flex flex-col gap-5 max-w-[975px]">
          <h1 className="text-5xl font-extrabold uppercase">Contact Us</h1>
          <p className="text-[16px] font-bold">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{' '}
          </p>
        </div>
        <div className="flex sml:flex-row flex-col gap-10">
          <div className=" flex-1 flex flex-col gap-5 p-8">
            <div className="w-full flex lg:flex-row flex-col gap-3 text-[16px] font-bold ">
              <button className="flex-1 bg-[#000000] text-white uppercase rounded-md py-3 px-5">
                Via Support Chat
              </button>
              <button className="flex-1 bg-[#000000] text-white uppercase rounded-md py-3 px-5">
                Via Call
              </button>
            </div>
            <button className="w-full uppercase py-3 px-5 rounded-md border-2 border-gray-600 font-bold text-[16px]">
              Via Email Form
            </button>
            <Form />
          </div>
          <div className="bg-white flex items-start flex-1">
            <img className=" w-full" src={Service} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
