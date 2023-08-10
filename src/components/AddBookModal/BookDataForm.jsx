import { Box } from "@chakra-ui/react";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";

const BookDataForm = ({ formRef, onSubmit }) => {
  return (
    <Box>
      <Form form={formRef} onFinish={onSubmit} layout="vertical">
        <Box display="flex" columnGap={4}>
          <Box flexGrow={1}>
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input book name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="author"
              name="author"
              rules={[
                {
                  required: true,
                  message: "Please input author!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="inStock"
              name="inStock"
              rules={[
                {
                  required: true,
                  message: "Please input inStock!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="type"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please input type!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Box>
          <Box flexGrow={1}>
            <Form.Item
              label="price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input price!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="discount"
              name="discount"
              rules={[
                {
                  required: true,
                  message: "Please input discount!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input description!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="commonPoint"
              name="commonPoint"
              rules={[
                {
                  required: true,
                  message: "Please input commonPoint!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export default BookDataForm;
