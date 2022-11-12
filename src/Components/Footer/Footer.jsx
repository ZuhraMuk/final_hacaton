import React from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="black"
          color="white">
          <Container maxWidth="mg">
            <Grid container spacing={10} style={{ textAlign: "left" }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Contacts</Typography>
                <hr />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    +996 551 223 359 // +996 558 877 707
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Bishkek City, Jalivood st. 23
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Working Timetable: from 10:00 to 22:00
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "15px auto",
                  }}>
                  Our social networks
                </Typography>
                <Box
                  textAlign="center"
                  pt={{ xs: 5, sm: 2 }}
                  pb={{ xs: 5, sm: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}>
                  <IconButton size="large" color="inherit" id="active_social">
                    <TelegramIcon />
                  </IconButton>
                  <IconButton size="large" color="inherit" id="active_social">
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton size="large" color="inherit" id="active_social">
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
