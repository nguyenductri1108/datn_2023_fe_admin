import DashboardLayout from "../../components/DashboardLayout";
import AppLayout from "../../components/Layout";
import { useState } from "react";
import { Button, Input, Modal, Table, Typography } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import AddBookModal from "../../components/AddBookModal";
import { useDisclosure } from "@chakra-ui/react";
import { toast } from "react-toastify";

const BookManagement = ({ posts }) => {
  const [dataFit, setDataFit] = useState(posts);
  const [dataModal, setDataModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const {
    isOpen: isOpenAddNewModal,
    onOpen: openAddNewModal,
    onClose: closeAddNewModal,
  } = useDisclosure();

  const filterData = (e) => {
    const input = e.target.value;
    const fitData = posts.filter(
      (item) =>
        item.userId.toString().includes(input) || item.title.includes(input)
    );
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
      title: "Book ID",
      dataIndex: "userId",
      key: "userId",
      width: 200,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 1500,
    },
    {
      title: "Tác giả",
      dataIndex: "title",
      key: "title",
      width: 1500,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", columnGap: "6px" }}>
          <Button
            type="primary"
            shape="circle"
            icon={<EyeOutlined />}
            onClick={() => {
              setModalOpen(true);
              setDataModal(record);
            }}
          />
          <Button
            type="primary"
            danger
            ghost
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => {
              setModalOpen1(true);
            }}
          />
        </div>
      ),
      width: 200,
    },
  ];

  return (
    <AppLayout activedTab={"book-management"}>
      <Typography.Title>Book Management</Typography.Title>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: "16px" }}>
        <Typography.Text>Search by Book type or Title: </Typography.Text>
        <Input
          allowClear
          onChange={filterData}
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
        ></Input>
        <Button type="primary" onClick={openAddNewModal}>
          Thêm mới sách
        </Button>
        <AddBookModal
          isOpen={isOpenAddNewModal}
          onClose={closeAddNewModal}
          onOk={() => {
            closeAddNewModal();
            toast.success("Thêm sách mới thành công");
          }}
        />
      </div>

      <div
        style={{
          marginTop: "10px",
        }}
      ></div>

      <Table
        style={{ maxWidth: "100%" }}
        columns={columns}
        dataSource={dataFit}
      />

      <Modal
        title={`Title : ${dataModal?.title}`}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
        footer={null}
      >
        <Typography style={{ fontWeight: "bold" }}>
          User Id:{dataModal.userId}
        </Typography>
        <Typography.Paragraph>{dataModal.body}</Typography.Paragraph>
      </Modal>
    </AppLayout>
  );
};

export default BookManagement;

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
