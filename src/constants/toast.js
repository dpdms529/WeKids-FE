import toast from "react-hot-toast";

export const showToast = {
  error: (message) => {
    const toastId = "error-toast";
    toast.dismiss();
    toast.error(message, {
      duration: 2000,
      toastId,
    });
  },
  success: (message) => {
    const toastId = "success-toast";
    toast.dismiss();
    toast.success(message, {
      duration: 2000,
      toastId,
    });
  },
};
