import React from "react";
import eye from "../../../assets/images/icon-eye.svg";
import { signUpSchema } from "../../../schemas";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../server";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface InputTypes {
  email: string;
  password: string;
  phone: string;
  name: string;
  terms: boolean;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(signUpSchema),
  });

  const submitHandler = async function (data: {
    email: string;
    phone: string;
    name: string;
  }) {
    try {
      await api.post(
        `/customers`,
        {
          email: data.email,
          phone: data.phone,
          firstname: data.name.split(" ")[0],
          lastname: data.name.split(" ")[1],
        },
        {
          headers: {
            "X-Authorization":
              "sk_44386cb648d0b470fff3958c1db5c12168d99d319a75a",
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Qeydiyyat tamamlandı!");
      navigate("../login");

      reset({
        name: "",
        email: "",
        password: "",
        terms: false,
        phone: "",
      });
    } catch (err) {
      toast.error("Bu email ünvanı qeydiyyatda var!");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="name">Ad, Soyad</label>
        <input
          type="text"
          placeholder="Ad və soyadınızı daxil edin"
          id="name"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
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
        <label htmlFor="phone">Mobil nömrə</label>
        <div className=" form-phone">
          <select id="identifier">
            <option>077</option>
            <option>050</option>
            <option>055</option>
          </select>
          <Controller
            control={control}
            name="phone"
            defaultValue="0000000"
            render={({ field: { onChange, name, value } }) => (
              <NumberFormat
                format="### - ## - ##"
                name={name}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        {errors.phone?.message && <p>{errors.phone?.message}</p>}
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
      <div className="form-terms">
        <input type="checkbox" id="terms" {...register("terms")} />
        <label htmlFor="terms">
          <span>İstifadəçi şərtləri </span>ilə razıyam
        </label>
        {errors.terms?.message && <p>{errors.terms?.message}</p>}
      </div>
      <button>Qeydiyyat</button>
    </form>
  );
};

export default SignUpForm;
