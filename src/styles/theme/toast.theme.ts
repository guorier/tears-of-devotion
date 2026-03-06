export interface ToastStyle {
  root: {
    base: string;
    closed: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
  stateIcon: string;
}

const toastConfig: ToastStyle = {
  root: {
    base: "flex items-center p-4 w-full min-w-72 max-w-lg rounded-lg bg-white text-silver-800 shadow",
    closed: "opacity-0 ease-out",
  },
  toggle: {
    base: "-mx-1.5 -my-1.5 ml-auto p-1.5 flex justify-center items-center size-8 rounded-lg bg-white text-silver-400 hover:bg-silver-100 hover:text-silver-900",
    icon: "size-5 shrink-0",
  },
  stateIcon: "flex justify-center items-center  size-8 rounded-lg"
};

export default toastConfig