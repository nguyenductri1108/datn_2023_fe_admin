import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookDataForm from "./BookDataForm";
import { Form } from "antd";
import UploadImageBox from "./UploadImageBox";
import { toast } from "react-toastify";
import { axiosPost } from "../../services";

const AddBookModal = ({ isOpen, onClose, onOk }) => {
  const [form] = Form.useForm();
  const [images, setImages] = useState([]);

  useEffect(() => {
    form.setFieldsValue({
      discount: 0,
      commonPoint: 0,
    });
  }, []);

  const onClickAddNew = () => {
    form.submit();
  };

  const onSubmit = (bookData) => {
    console.log(bookData);
    if (!images.length) {
      toast.error("Please add at least 1 image");
    } else {
      axiosPost("books", {
        ...bookData,
        imageSrc: images,
      })
        .then(() => {
          onOk();
        })
        .catch((err) => {
          toast.error("Something wrong");
        });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadImageBox images={images} setImages={setImages} />
            <Box mt={4} />
            <BookDataForm formRef={form} onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClickAddNew}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBookModal;
