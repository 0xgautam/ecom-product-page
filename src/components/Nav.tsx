import { AppBar, Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Cart from "./Cart";

type NavLinks = {
  text: string;
  href: string;
};

const navLinks: NavLinks[] = [
  { text: "Collection", href: "#" },
  { text: "Men", href: "#" },
  { text: "Women", href: "#" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

const RenderNavLinks = () => {
  return (
    <Box component={"div"} sx={{ display: "flex", gap: "1.5rem", flex: 2 }}>
      {navLinks.map((link, i) => (
        <Typography
          key={i}
          component={"a"}
          href={link.href}
          sx={{
            textDecoration: "none",
            color: "rgba(0,0,0,0.75)",
            fontSize: "1.1rem",
            "&::after": {
              content: '""',
              width: "0%",
              display: "block",
              transition: "ease-in .2s",
              borderBottom: 2,
              borderColor: "primary.main",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {link.text}
        </Typography>
      ))}
    </Box>
  );
};

const Nav = () => {
  return (
    <AppBar
      color="transparent"
      position="static"
      elevation={1}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 5rem",
      }}
    >
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="#"
        sx={{
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          flex: 1,
        }}
      >
        sneakers
      </Typography>

      <RenderNavLinks />
      <Box
        component={"div"}
        sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
      >
        <Cart />
        <IconButton>
          <Avatar src="/images/image-avatar.png" />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Nav;
