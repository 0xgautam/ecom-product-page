import { useState } from "react";
import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import Cart from "./Cart";

type NavLinks = {
  text: string;
  href: string;
};

type DrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navLinks: NavLinks[] = [
  { text: "Collection", href: "#" },
  { text: "Men", href: "#" },
  { text: "Women", href: "#" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

const RenderNavLinks = (
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

const NavDrawer = ({ isDrawerOpen, setIsDrawerOpen }: DrawerProps) => (
  <Drawer
    anchor={"left"}
    open={isDrawerOpen}
    onClose={() => setIsDrawerOpen(false)}
  >
    <IconButton onClick={() => setIsDrawerOpen(false)} sx={{ mb: "2rem" }}>
      <CloseIcon />
    </IconButton>
    <List>
      {navLinks.map((link) => (
        <ListItemButton
          sx={{
            padding: "1rem 2rem",
          }}
          onClick={() => setIsDrawerOpen(false)}
        >
          <Box
            component={"a"}
            href={link.href}
            sx={{
              textDecoration: "none",
              color: "rgba(0,0,0,0.75)",
              fontSize: "1.1rem",
            }}
          >
            <ListItemText>{link.text}</ListItemText>
          </Box>
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
        padding: { sm: "1rem 5rem", xs: "1rem" },
      }}
    >
      {matches && (
        <Box sx={{ mr: "0.5rem" }}>
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <NavDrawer
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </Box>
      )}
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="#"
        sx={{
          fontSize: { xs: "1.5rem" },
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          flex: 1,
        }}
      >
        sneakers
      </Typography>

      {!matches && RenderNavLinks}
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
