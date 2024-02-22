import React from "react";
import { useState } from "react";
import expandReduce from "../assets/icons/expandReduce.svg";
import allorders from "../assets/icons/allorders.svg";

const Sidebar = () => {
    const [expand, setExpand] = useState();
    return (
        <div className="w-[280px]  h-screen border border-l-0 fixed border-[#E5E9EB]">
            <div className="border-b flex items-center justify-between h-[56px] px-[16px]">
                <h2 className="font-[Bold] text-[24px] leading-9 ">
                    TASK PROJECT
                </h2>
                <button className="flex w-[32px] h-[32px] bg-[#6E8BB71F] rounded-md items-center justify-center">
                    <img src={expandReduce} alt="" />
                </button>
            </div>
            <div className="p-3">
                <div className="flex items-center gap-3 px-[12px] h-[40px]">
                    <img src={allorders} alt="" />
                    <h3 className="font-[Medium] text-[#6E8BB7]">Все заказы</h3>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
