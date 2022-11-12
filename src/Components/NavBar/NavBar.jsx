import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LiveSearch from "../LiveSearch/LiveSearch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>LogIn</MenuItem>
      <MenuItem onClick={handleMenuClose}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl2);
  const handleClickFilter = event => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgba(62, 62, 62, 0.5)",
        }}>
        <Toolbar>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickFilter}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            sx={{ color: "black" }}
            anchorEl={anchorEl2}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            {/* {user.email === "zuhra@mail.ru" ? ( */}
            {/* <Link to="/add"> */}
            <MenuItem onClick={handleClose} style={{ color: "black" }}>
              Add Products
            </MenuItem>
            {/* </Link> */}
            {/* ) : null} */}
            {/* {location.pathname === "/list" ? (
              <MenuItem onClick={handleClose} style={{ color: "black" }}>
                <span style={{ cursor: "pointer" }}>Products List</span>
              </MenuItem>
            ) : ( */}
            {/* <Link to="/list"> */}
            <MenuItem onClick={handleClose} style={{ color: "black" }}>
              Products List
            </MenuItem>
            {/* </Link> */}
            {/* )} */}
            <MenuItem onClick={handleClose} style={{ color: "black" }}>
              <Typography>
                {/* {user.email ? user.email : <span>Users</span>} */}
                My acaunt
              </Typography>
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              src="https://g.vseigru.net/dasha1/igry-kak-priruchit-drakona/igra-kak-priruchit-drakona-vysizhivat-yajtsa/asset/common/images/loader/shield-loader.png"
              alt="logo"
              style={{ width: 47, height: 47, borderRadius: "50%" }}
            />
          </Typography>
          <LiveSearch />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit">
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
