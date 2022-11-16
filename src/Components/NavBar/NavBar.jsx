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
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RestoreIcon from "@mui/icons-material/Restore";
import { favoritesContext } from "../../context/FavoritesContextProvider";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../context/AuthContextProvider";

function NavBar() {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { favoritesCount } = React.useContext(favoritesContext);

  const { user, handleLogout } = React.useContext(authContext);

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
      <Link to="/auth" style={{ color: "black" }}>
        <MenuItem>LogIn</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>LogOut</MenuItem>
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
      <Link to="/history" style={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <RestoreIcon />
          </IconButton>
          <p>История просмотра</p>
        </MenuItem>
      </Link>
      <Link to="/fav" style={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge badgeContent={favoritesCount} color="error">
              <BookmarkIcon />
            </Badge>
          </IconButton>
          <p>Избранные</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Акаунт</p>
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
            {user.email === "zuhra@mail.ru" ? (
              <Link to="/add">
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  Добавить продукт
                </MenuItem>
              </Link>
            ) : null}
            {location.pathname === "/" ? (
              <MenuItem onClick={handleClose} style={{ color: "black" }}>
                <span style={{ cursor: "pointer" }}>Главная</span>
              </MenuItem>
            ) : (
              <Link to="/">
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  Главная
                </MenuItem>
              </Link>
            )}
            <MenuItem onClick={handleClose} style={{ color: "black" }}>
              <Typography>
                {user.email ? user.email : <span>Мой акаунт</span>}
              </Typography>
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <img
                src="https://g.vseigru.net/dasha1/igry-kak-priruchit-drakona/igra-kak-priruchit-drakona-vysizhivat-yajtsa/asset/common/images/loader/shield-loader.png"
                alt="logo"
                style={{ width: 47, height: 47, borderRadius: "50%" }}
              />
            </Link>
          </Typography>
          {location.pathname === "/" ? <LiveSearch /> : null}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/history">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <RestoreIcon />
              </IconButton>
            </Link>
            <Link to="/fav">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <Badge badgeContent={favoritesCount} color="error">
                  <BookmarkIcon />
                </Badge>
              </IconButton>
            </Link>
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
