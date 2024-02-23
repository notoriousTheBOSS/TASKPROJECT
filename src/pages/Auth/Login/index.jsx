import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import evakuator from "../../../assets/images/Evakuator.jpg";
import eye from "../../../assets/icons/eye.svg";
import loginAPI from "../../../service/login";
import { Button, message } from "antd";

const index = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [isPassword, setIsPassword] = useState(true);

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAPI.login(loginData);
            const user = response.data.find(
                (val) =>
                    val.username === loginData.username &&
                    val.password === loginData.password
            );
            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                message.success("Login successful!");
                navigate("/dashboard");
            } else {
                message.error("Invalid username or password");
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
            message.error("An error occurred during login");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    return (
        <div className="container border-x">
            <div className="flex items-center">
                <div className="w-[738px]">
                    <img src={evakuator} className="h-screen" alt="" />
                </div>
                <div className="flex w-[702px] items-center justify-center">
                    <div className="w-[538px] h-[764px] flex flex-col justify-between items-center">
                        <h2 className="font-[Bold] text-[48px] place-items-center">
                            Вход в систему
                        </h2>
                        <form
                            onSubmit={handleForm}
                            className="w-full flex items-start justify-between flex-col h-[768px]"
                        >
                            <span></span>
                            <div>
                                <div className="flex flex-col w-full h-[84px] justify-between mb-5">
                                    <label
                                        className="font-[SemiBold] leading-6"
                                        htmlFor="username"
                                    >
                                        Логин
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={loginData.username}
                                        onChange={handleInputChange}
                                        placeholder="Введите логин"
                                        className="border w-[538px] px-3 outline-none h-[48px] rounded-md placeholder:text-[14px] placeholder:text-[#6E8BB7]"
                                    />
                                </div>
                                <div className="flex flex-col w-full h-[84px] justify-between">
                                    <label
                                        className="font-[SemiBold] leading-6"
                                        htmlFor="password"
                                    >
                                        Пароль
                                    </label>
                                    <div className="border w-[538px] px-3 flex items-center justify-between h-[48px] rounded-md gap-2">
                                        <input
                                            className="outline-none w-full placeholder:text-[14px] placeholder:text-[#6E8BB7]"
                                            type={
                                                isPassword ? "password" : "text"
                                            }
                                            name="password"
                                            value={loginData.password}
                                            onChange={handleInputChange}
                                            placeholder="Введите пароль"
                                        />
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setIsPassword(!isPassword)
                                            }
                                        >
                                            <img src={eye} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex rounded-lg py-[20px] justify-center bg-[#36AD49] text-white"
                            >
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
