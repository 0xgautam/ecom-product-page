import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import ImagesList from "./ImagesList";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  images: { thumbnail: string; main: string }[];
  current: number;
};

const LightBox = ({ visible, setVisible, images, current }: Props) => {
  const [selected, setSelected] = useState<number>(current);

  return (
    <Modal open={visible} onClose={() => setVisible(false)}>
      <Box
        component={"div"}
        sx={{
          width: "50%",
          height: "90%",
          margin: "2rem auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          onClick={() =>
            selected === 0 ? null : setSelected((selected) => selected - 1)
          }
        >
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </IconButton>
        <ImagesList
          images={images}
          selected={selected}
          setSelected={setSelected}
          setVisible={setVisible}
          mode={"LIGHTBOX"}
        />
        <IconButton
          size="large"
          onClick={() =>
            selected === images.length - 1
              ? null
              : setSelected((selected) => selected + 1)
          }
        >
          <ArrowBackIosNewIcon
            sx={{ color: "white", transform: "rotate(180deg)" }}
          />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default LightBox;
