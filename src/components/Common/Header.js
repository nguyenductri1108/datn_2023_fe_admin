import {
    Avatar,
    Box,
    Button,
    Divider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { axiosGet, axiosPost } from "../../services";
import FormikControl from "./Formik/FormikControl";
import { Typography } from "antd";
import { saveDataUser } from "../../redux/slices/userReducer";
import { useEffect } from "react";

const Header = () => {
    return (
        <>
            <Box display={"flex"} columnGap={"24px"} marginBottom={"12px"}>
                <Box flex={1}></Box>
                <ButtonLinkSignIn label="Sign In" />
            </Box>
            <Divider></Divider>
        </>
    );
};

const ButtonLinkSignIn = ({ label, fontweight }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();
    const { dataUser } = useSelector((state) => state.userData);

    const getDataUser = async (res) => {
        localStorage.setItem("accessToken", res.data.data.access_token);
        const result = await axiosGet("auth/user");
        console.log(result);
        dispatch(saveDataUser(result.data));
    };

    useEffect(() => {
        console.log(dataUser);
    }, [dataUser]);

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
                    console.log(res);
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
        <>
            {!dataUser ? (
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
            ) : (
                <Menu>
                    <MenuButton>
                        <Box display={"flex"} alignItems={"center"} columnGap={3}>
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                            <Text
                                fontSize="16px"
                                fontWeight={600}
                                cursor="pointer"
                                onClick={() => {
                                    addHashToUrl("contact");
                                }}
                            >
                                Xin chào, {dataUser.username}
                            </Text>
                        </Box>
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => {
                                localStorage.removeItem("accessToken");
                                window.location.reload();
                            }}
                        >
                            Đăng xuất
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </>
    );
};

export default Header;
