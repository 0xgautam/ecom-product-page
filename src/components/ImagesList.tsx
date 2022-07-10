import { useTheme } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  images: { thumbnail: string; main: string }[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "LIGHTBOX" | "DEFAULT";
};

const ImagesList = ({
  images,
  selected,
  setSelected,
  setVisible,
  mode,
}: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const DesktopView = (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
        height: "100%",
        margin: { md: "3rem 0rem", lg: "3rem 2rem" },
      }}
    >
      <Box
        component={"img"}
        src={images[selected].main}
        alt="thumbnail"
        sx={{
          objectFit: "cover",
          height: "500px",
          width: "500px",
          overflow: "hidden",
          borderRadius: "1rem",
        }}
        onClick={() => {
          return mode === "DEFAULT" ? setVisible((visible) => !visible) : null;
        }}
      />

      <Box
        component={"div"}
        sx={{
          width: "85%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            style={{
              border: "none",
              borderRadius: "0.5rem",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
            onClick={() => setSelected(i)}
          >
            <Box
              component={"img"}
              src={img.thumbnail}
              alt="product images"
              sx={{
                objectFit: "cover",
                height: "100px",
                width: "100px",
                overflow: "hidden",
                border: selected === i ? 2 : "none",
                borderColor: selected === i ? "primary.main" : "none",
                opacity: selected === i ? "0.5" : "inherit",
                transition: "all 0.5s ease",
                "&:hover": {
                  opacity: "0.5",
                  cursor: "pointer",
                },
              }}
            />
          </button>
        ))}
      </Box>
    </Box>
  );

  const MobileView = (
    <Box sx={{ width: "100%" }}>
      <IconButton
        size="large"
        onClick={() =>
          selected === 0 ? null : setSelected((selected) => selected - 1)
        }
        sx={{
          position: "absolute",
          top: "50%",
          left: "1rem",
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "black" }} />
      </IconButton>

      <IconButton
        size="large"
        onClick={() =>
          selected === images.length - 1
            ? null
            : setSelected((selected) => selected + 1)
        }
        sx={{
          position: "absolute",
          top: "50%",
          right: "1rem",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ color: "black", transform: "rotate(180deg)" }}
        />
      </IconButton>

      <Box
        component={"img"}
        src={images[selected].main}
        width={"100%"}
        height={"30rem"}
        sx={{ objectFit: "cover" }}
      />
    </Box>
  );

  if (matches) return MobileView;
  else return DesktopView;
};

export default ImagesList;
