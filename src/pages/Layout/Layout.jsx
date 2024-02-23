import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import add from "../../assets/icons/add.svg";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import ModalEdit from "../../components/ModalEdit";
import driversAPI from "../../service/drivers";

const Layout = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [editingDriver, setEditingDriver] = useState(null);
    const itemsPerPage = 10;

    const getDrivers = () => {
        driversAPI
            .getDrivers()
            .then((res) => {
                console.log("res drivers", res);
                setData(res?.data);
            })
            .catch((err) => {
                console.log("err courses", err);
            });
    };
    const postDrivers = (data) => {
        driversAPI
            .postDrivers(data)
            .then((res) => {
                console.log("post drivers", res);
                setData((prevData) => [...prevData, res.data]);
                setIsModalVisible(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleEditClick = (driver) => {
        setEditingDriver(driver);
        setIsModalVisible2(true);
    };

    // const putDriver = (id, updatedData) => {
    //     driversAPI
    //         .editDrivers(id, updatedData)
    //         .then((res) => {
    //             console.log("edit driver", res);
    //             const updatedDataIndex = data.findIndex(
    //                 (item) => item.id === id
    //             );
    //             if (updatedDataIndex !== -1) {
    //                 const newData = [...data];
    //                 newData[updatedDataIndex] = res.data;
    //                 setData(newData);
    //             }
    //             setIsModalVisible(false);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // };

    // const deleteDriver = (id) => {
    //     driversAPI
    //         .deleteDrivers(id)
    //         .then(() => {
    //             setData(data.filter((driver) => driver.id !== id));
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // };

    useEffect(() => {
        getDrivers();
    }, []);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentData = data.slice(startIndex, endIndex);

    const handleModalToggle = () => {
        console.log("bosildi");
        setIsModalVisible(!isModalVisible);
        setEditData(null);
    };

    return (
        <div className="container border-x">
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="max-w-[1160px] w-full ml-[280px]">
                    <header className="border-b border-[#E5E9EB] top-0 fixed ">
                        <div className="w-[1160px] flex items-center justify-between h-[56px] px-4 ">
                            <h2 className="font-[SemiBold] text-[20px] leading-6 flex gap-6">
                                Все водители
                                <span className="w-[1px] h-[24px] bg-[#E5E9EB] block"></span>
                            </h2>
                            <button
                                onClick={handleModalToggle}
                                className="bg-[#36AD49] rounded-md gap-2 flex items-center h-[36px] text-white px-[8px] text-[14px]"
                            >
                                <span className="w-5 h-5 flex items-center justify-center">
                                    <img src={add} alt="" />
                                </span>
                                Добавить
                            </button>
                        </div>
                    </header>
                    <main className="bg-[#EAF2F1] w-full h-[888px] p-4 mt-[56px]">
                        {isModalVisible && (
                            <Modal
                                onClose={handleModalToggle}
                                postDriver={postDrivers}
                            />
                        )}
                        <div className="bg-white w-full h-full rounded-md flex flex-col justify-between">
                            <div className="w-full h-full p-4">
                                <Table
                                    data={currentData}
                                    handleEditClick={handleEditClick}
                                    // handleDelete={deleteDriver}
                                />
                                {isModalVisible2 && (
                                    <ModalEdit
                                        onClose={() => {
                                            setIsModalVisible2(false);
                                            setEditingDriver(null); // Reset editing state
                                        }}
                                        // putDriver={putDriver}
                                        // driver={editingDriver} // Pass editingDriver to modal for editing
                                    />
                                )}
                            </div>
                            <div className="h-[56px] border-t flex items-center px-4 place-content-end">
                                <Pagination
                                    defaultCurrent={1}
                                    total={totalItems}
                                    pageSize={itemsPerPage}
                                    onChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
