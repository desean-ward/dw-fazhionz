import toast from "react-hot-toast";
import { ToastContainer, ToastImage } from "./toast.styles";

export const itemAdded = ({ imgUrl, name, text }) =>
  toast.custom((t) => (
    <ToastContainer
      className={`${t.visible ? "animate-enter" : "animate-leave"} `}
      color='black'
    >
      <ToastImage>
        <img src={imgUrl} alt='' />
      </ToastImage>
      <div className='flex flex-col gap-2'>
        <span className='text-md font-medium text-gray-900'>{name}</span>{" "}
        <span className='text-sm text-gray-500'>{text}</span>
      </div>
    </ToastContainer>
  ));

export const error = ({ text }) =>
  toast.custom((t) => (
    <ToastContainer
      className={`${t.visible ? "animate-enter" : "animate-leave"} `}
      color='maroon'
    >
      <div>
        <span className='text-sm text-gray-500'>{text}</span>
      </div>
    </ToastContainer>
  ));

  export const success = ({ text }) =>
  toast.custom((t) => (
    <ToastContainer
      className={`${t.visible ? "animate-enter" : "animate-leave"} `}
      color='black'
    >
      <div>
        <span className='text-sm text-gray-500'>{text}</span>
      </div>
    </ToastContainer>
  ));
