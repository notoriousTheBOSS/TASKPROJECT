import React from "react";
import deleteIcon from "../assets/icons/deleteIcon.svg";
import edit from "../assets/icons/edit.svg";

const EditDeleteModal = () => {
    return (
        <div className="w-[251px] flex flex-col border rounded-lg">
            <button className="w-full flex items-center gap-3 p-2 rounded-s-sm">
                <span className="h-[32px] w-[32px] bg-[#36AD490D] rounded-md grid place-content-center ">
                    <img src={edit} alt="" />
                </span>
                Редактировать
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-s-sm border-t">
                <span className="h-[32px] w-[32px] bg-[#FEE8E6] rounded-md grid place-content-center ">
                    <img src={deleteIcon} alt="" />
                </span>
                Удалить
            </button>
        </div>
    );
};

export default EditDeleteModal;
