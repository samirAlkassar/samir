import { CheckSquare } from "lucide-react";

const Toast = ({ message } : {message: string}) => {
  const toastTimeout = 6000;
  setTimeout(() => {
    const toastElement = document.querySelector('.toast');
    if (toastElement) {
      toastElement.remove();
    }
  }
  , toastTimeout);

  return (
    <div className="toast fixed bottom-4 right-4 px-8 py-4 rounded-lg shadow-lg text-gray-700 bg-[#f1eeeb] border-slate-200">
      {message} <CheckSquare className="inline-block ml-2 mb-1 text-green-500"/>
    </div>
  )
}

export default Toast;