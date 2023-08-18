import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const handleSend = (e) => {
    e.preventDefault();
    if (name === '') {
      setSuccessMsg('');
      setErrMsg("Name feild can't be empty");
    } else if (email === '') {
      setSuccessMsg('');
      setErrMsg("Email feild can't be empty");
    } else if (text === '') {
      setSuccessMsg('');
      setErrMsg("Text feild can't be empty");
    } else {
      setSuccessMsg(`Thank you ${name}. Your response has been recieved`);
      setErrMsg('');
      setName('');
      setEmail('');
      setText('');
    }
    setTimeout(() => {
      setSuccessMsg('');
      setErrMsg('');
    }, 10000);
  };
  console.log({ name, email, text });
  console.log(errMsg);
  console.log(successMsg);

  return (
    <form onSubmit={handleSend} className="flex flex-col w-full" action="">
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="text-[15px] font-bold w-fit px-3 bg-white  relative top-3 left-5"
        >
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={`${
            errMsg === "Name feild can't be empty" && 'border-red-300'
          } inputClasses`}
          type="text"
        />
      </div>
      <div className="w-full flex flex-col">
        <label
          htmlFor=""
          className="text-[15px] px-3 bg-white font-bold  w-fit relative top-3 left-5"
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`${
            errMsg === "Email feild can't be empty" && 'border-red-300'
          } inputClasses`}
          type="text"
        />
      </div>
      <div className="w-full flex flex-col">
        <label
          className="text-[15px] font-bold px-3 bg-white  w-fit relative top-3 left-5"
          htmlFor=""
        >
          TEXT
        </label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          className={`${
            errMsg === "Text feild can't be empty" && 'border-red-300'
          } areaClass`}
          name=""
          id=""
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        className="uppercase bg-[#000000] py-3 px-5 text-white font-bold w-fit flex mx-auto mt-5 rounded-md text-[16px]"
      >
        Submit
      </button>
      {errMsg && (
        <p className="py-3 mt-5 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
          {errMsg}
        </p>
      )}
      {successMsg && (
        <p className="py-3 mt-5 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
          {successMsg}
        </p>
      )}
    </form>
  );
};

export default Form;
