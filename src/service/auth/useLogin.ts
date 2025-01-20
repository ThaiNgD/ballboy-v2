// import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { authApi, IResultAuth } from "../axios/authApi";

export const useAuthLogin = (): UseMutationResult<
  IResultAuth,
  Error,
  IFormLogin,
  unknown
> => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: () => {
      // toast.error("Sai thông tin đăng nhập");
    },
  });
};
