import React, { useState } from "react";
import editor from "../assets/icons/editorMenu.svg";

const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toISOString().split("T")[0];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${formattedDate} ${hours}:${minutes}`;
};
const Table = ({ data }) => {
    const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const slicedData = sortedData.slice(0, 10);
    return (
        <div>
            <div className="driverstable">
                <table className="max-w-full w-full border">
                    <thead>
                        <tr className="h-[48px] border-b-2  w-full text-left text-[14px]">
                            <th className="w-[48px] px-4 border-r-[1px]">№</th>
                            <th className="w-[120px] px-4 border-r-[1px]">
                                ID водителя
                            </th>
                            <th className="w-[200px] px-4 border-r-[1px]">
                                ФИО водителя
                            </th>
                            <th className="w-[180px] px-4 border-r-[1px]">
                                Номер телефона
                            </th>
                            <th className="w-[140px] px-4 border-r-[1px]">
                                Все заказы
                            </th>
                            <th className="w-[200px] px-4 border-r-[1px]">
                                Тип пользователя
                            </th>
                            <th className="w-[160px] px-4 border-r-[1px]">
                                Дата создание
                            </th>
                            <th className="w-[48px] px-4 border-r-[1px]">
                                <button>
                                    <img src={editor} alt="" />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    {data?.map((item, index) => {
                        return (
                            <tbody>
                                <tr
                                    key={index}
                                    className={`h-[60px] border-b-2 text-[14px]  w-full ${
                                        (index + 1) % 2 == 1
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="border-r-[1px] text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border-r-[1px] px-4 ">
                                        {+item?.id + 1000}
                                    </td>
                                    <td className="border-r-[1px] px-4 ">
                                        {item?.fullName}
                                    </td>
                                    <td className="border-r-[1px] px-4 ">
                                        +
                                        {item?.number.length > 13
                                            ? `${item.number.slice(0, 13)}`
                                            : item.number}
                                    </td>
                                    <td className="border-r-[1px] px-4  ">
                                        {item?.allOrders}
                                    </td>
                                    <td className="border-r-[1px] px-4  ">
                                        {item?.typeOfUser}
                                    </td>
                                    <td className="border-r-[1px] px-4  ">
                                        {formatCreatedAt(item.createdAt)}
                                    </td>
                                    <td className="border-r-[1px] px-4  ">
                                        <button>...</button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default Table;
