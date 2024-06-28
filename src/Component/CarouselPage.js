import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import goodThoughts from "../data";
import "./CarouselPage.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Container } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import image1 from "./image1.jpg";

const CarouselPage = () => {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    const shareData = {
      title: "Good Thoughts",
      text: "Check out these good thoughts!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((error) => console.error("Error sharing", error));
    } else {
      // Fallbacks
      const shareUrl = encodeURIComponent(window.location.href);
      const shareText = encodeURIComponent("Check out these good thoughts!");

      // Email
      const emailUrl = `mailto:?subject=${shareText}&body=${shareUrl}`;
      // WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;
      // Twitter
      const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}%20${shareUrl}`;

      window.open(emailUrl, "_blank");
      window.open(whatsappUrl, "_blank");
      window.open(twitterUrl, "_blank");
    }
  };

  return (
    <>
      <Container>
        <div className="carousel-wrapper">
          <div className="carousel-index">
            <Box
              // id="google-element"
              className="Language"
              sx={{
                minWidth: 120,
                border: "3px solid black",
                color: "black",
                fontSize: 1,
                margin: 1,
              }}
            >
              <Select
                defaultValue="English"
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                  width: "100%",
                  fontSize: "1.2rem",
                  paddingRight: "1rem",
                }}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                <MenuItem value={"Marathi"}>Marathi</MenuItem>
              </Select>
            </Box>
            <Box sx={{ paddingTop: "1rem", paddingLeft: "5rem" }}>
              {index + 1}/{goodThoughts.length}
            </Box>

            <div className="Icons">
              <Box
                className="Language"
                sx={{
                  minWidth: "3.5rem",
                  maxHeight: "3.5rem",
                  border: "3px solid black",
                  display: "flex",
                  paddingTop: "0.5rem",
                  justifyContent: "center",
                  color: liked ? "red" : "black",
                  margin: 1,
                  cursor: "pointer",
                }}
                onClick={handleLike}
              >
                <FavoriteIcon sx={{ fontSize: "2.5rem" }} />
              </Box>
              <Box
                className="share"
                sx={{
                  minWidth: "3.5rem",
                  maxHeight: "3.5rem",
                  border: "3px solid black",
                  display: "flex",
                  paddingTop: "0.5rem",
                  justifyContent: "center",
                  color: "black",
                  margin: 1,
                  cursor: "pointer",
                }}
                onClick={handleShare}
              >
                <ShareIcon sx={{ fontSize: "2.5rem" }} />
              </Box>
            </div>
          </div>

          <Carousel
            className="quote-container"
            activeIndex={index}
            onSelect={handleSelect}
            data-bs-theme="dark"
            interval={null}
            data-interval="false"
            style={{ overflow: "hidden" }}
          >
            {goodThoughts.map((thought) => (
              <Carousel.Item key={thought.id}>
                <img
                  style={{
                    height: "70vh",
                    overflow: "hidden",
                  }}
                  className="d-block w-100"
                  src={image1}
                  alt={`Slide ${thought.id}`}
                />

                <Carousel.Caption>
                  <p className="quote-text">{thought.quote}</p>
                  <h3 className="author-text">{thought.authorName}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default CarouselPage;
