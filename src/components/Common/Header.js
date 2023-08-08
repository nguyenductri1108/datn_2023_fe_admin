import {
    Box,
    Button,
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { axiosGet, axiosPost } from "../../services";
import FormikControl from "./Formik/FormikControl";
import { Typography } from "antd";

const Header = () => {
    return (
        <>
            <Box display={"flex"} columnGap={"24px"} marginBottom={"12px"}>
                <Box flex={1}></Box>
                <ButtonLinkSignIn label="Sign In" />
                <ButtonLinkSignUp label="Sign Up" />
            </Box>
            <Divider></Divider>
        </>
    );
};

const ButtonLinkSignIn = ({ label, fontweight }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const getDataUser = async (res) => {
        const saveToken = await localStorage.setItem("accessToken", res.data.data.access_token);
        const result = await axiosGet("auth/user");
        console.log(result);
        // dispatch(saveDataUser(result.data));
    };

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Required";
        }

        if (!values.password) {
            errors.password = "Required";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (value, { resetForm }) => {
            axiosPost("auth/login", value)
                .then((res) => {
                    toast.success("Đăng nhập thành công");
                    getDataUser(res);
                    onClose();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error.response?.data?.message);
                });
        },
        validate,
    });

    return (
        <Button backgroundColor={"#b0ccf3"} onClick={onOpen}>
            <Typography textDecoration={"underline"} fontWeight={fontweight}>
                {label}
            </Typography>

            {
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Đăng nhập</ModalHeader>
                        <ModalCloseButton />
                        <Box p={6}>
                            <FormikProvider value={formik}>
                                <form onSubmit={formik.handleSubmit}>
                                    <ModalBody>
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            name="username"
                                            label="Tài khoản"
                                        ></FormikControl>

                                        <FormikControl
                                            control="input"
                                            type="password"
                                            name="password"
                                            label="Password"
                                        ></FormikControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme="blue" mr={3} type="submit">
                                            Đăng nhập
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </FormikProvider>
                        </Box>
                    </ModalContent>
                </Modal>
            }
        </Button>
    );
};

const ButtonLinkSignUp = ({ label, fontweight }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Required";
        }

        if (!values.password) {
            errors.password = "Required";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (value, { resetForm }) => {
            axiosPost("auth/register", value)
                .then((res) => {
                    toast.success("Đăng kí thành công");
                    resetForm();
                    onClose();
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                    console.log(error.response.data.message);
                });
        },
        validate,
    });

    return (
        <Button backgroundColor={"#b0ccf3"} onClick={onOpen}>
            <Typography textDecoration={"underline"} fontWeight={fontweight}>
                {label}
            </Typography>

            {
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Đăng ký</ModalHeader>
                        <ModalCloseButton />
                        <Box p={6}>
                            <FormikProvider value={formik}>
                                <form onSubmit={formik.handleSubmit}>
                                    <ModalBody>
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            name="username"
                                            label="Tài khoản"
                                        ></FormikControl>

                                        <FormikControl
                                            control="input"
                                            type="password"
                                            name="password"
                                            label="Password"
                                        ></FormikControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme="blue" mr={3} type="submit">
                                            Đăng ký
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </FormikProvider>
                        </Box>
                    </ModalContent>
                </Modal>
            }
        </Button>
    );
};

export default Header;
