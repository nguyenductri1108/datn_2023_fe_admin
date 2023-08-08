import DashboardLayout from "../../components/DashboardLayout";
import AppLayout from "../../components/Layout";
import { useState } from "react";
import { Button, Input, Modal, Table, Typography } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";

const OrderManagement = ({ posts }) => {
    const [dataFit, setDataFit] = useState(posts);
    const [dataModal, setDataModal] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const filterData = (e) => {
        const input = e.target.value;
        const fitData = posts.filter((item) => item.userId.toString().includes(input) || item.title.includes(input));
        console.log(fitData);
        setDataFit(fitData);
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 200,
        },
        {
            title: "Order ID",
            dataIndex: "userId",
            key: "userId",
            width: 200,
        },
        {
            title: "Name",
            dataIndex: "title",
            key: "title",
            width: 2000,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div
                    style={{
                        display: "flex",
                        columnGap: "8px",
                    }}
                >
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setModalOpen(true);
                            setDataModal(record);
                        }}
                    />
                    <Button shape="circle" icon={<EditOutlined />} onClick={() => {}} />
                </div>
            ),
            width: 200,
        },
    ];

    return (
        <AppLayout activedTab={"order-management"}>
            <Typography.Title>Order Management</Typography.Title>
            <div style={{ display: "flex", flexWrap: "wrap", columnGap: "16px" }}>
                <Typography.Text>Search by Username </Typography.Text>
                <Input
                    allowClear
                    onChange={filterData}
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                    }}
                ></Input>
            </div>

            <div
                style={{
                    marginTop: "10px",
                }}
            ></div>

            <Table style={{ maxWidth: "100%" }} columns={columns} dataSource={dataFit} />

            <Modal
                title={`Title : ${dataModal?.title}`}
                open={modalOpen}
                onCancel={() => {
                    setModalOpen(false);
                }}
                footer={null}
            >
                <Typography style={{ fontWeight: "bold" }}>User Id:{dataModal.userId}</Typography>
                <Typography.Paragraph>{dataModal.body}</Typography.Paragraph>
            </Modal>
        </AppLayout>
    );
};

export default OrderManagement;

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(res);

    return {
        props: {
            posts: data,
        },
    };
}
