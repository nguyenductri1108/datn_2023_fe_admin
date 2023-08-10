import { Box, Button, IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import { axiosPost } from "../../services";
import {
  CloseCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const UploadImageBox = ({ images, setImages }) => {
  const inputRef = useRef();

  const upload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("image", file);
      axiosPost("uploadImg", formData)
        .then((res) => setImages((prev) => [...prev, res.data.url]))
        .catch((err) => console.log(err));

      e.target.value = "";
    }
  };

  const deleteImage = (deletedUrl) => {
    const newImages = [...images].filter((url) => url !== deletedUrl);
    setImages(newImages);
  };

  return (
    <>
      <Box>
        <Button size="sm" onClick={() => inputRef.current.click()}>
          Add Image
        </Button>
        <input
          hidden
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={upload}
        />
        <Box display="flex" mt={4} gap="8px">
          {images.map((url) => (
            <Box
              key={url}
              width="50px"
              height="50px"
              border="1px solid grey"
              p="2px"
              borderRadius={"8px"}
              position="relative"
            >
              <img
                src={url}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <CloseCircleFilled
                size="sm"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  cursor: "pointer",
                  transform: "translate(50%, -50%)",
                }}
                onClick={() => deleteImage(url)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UploadImageBox;
