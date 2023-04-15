import React from "react";
import eye from "../../../assets/images/icon-eye.svg";
import { logInSchema } from "../../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../server";
import { toast } from "react-toastify";

interface InputTypes {
  email: string;
  password: string;
}

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(logInSchema),
  });

  const submitHandler = async function (data: { email: string }) {
    try {
      await api.post(
        `/customers/email-token`,
        {
          email: data.email,
          base_url: "https://se-final-project.netlify.app/dashboard",
        },
        {
          headers: {
            "X-Authorization":
              "sk_44386cb648d0b470fff3958c1db5c12168d99d319a75a",
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Elektron poçtunuzu yoxlayın !");
      reset({
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Xəta baş verdi!");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="nümunə@gmail.com"
          id="email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifrə</label>
        <div className="form-password">
          <input
            type="password"
            placeholder="Şifrənizi daxil edin"
            id="password"
            {...register("password")}
          />
          <img src={eye} alt="password" />
        </div>
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>
      <p>Şifrəni unutmusunuz?</p>
      <button>Daxil ol</button>
    </form>
  );
};

export default LogInForm;
