// const ImageCollage = () => <div></div>;

// export default ImageCollage;
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?ixlib",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1550109161-7262e652bf82?ixlib",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1549861833-c5932fd19229?ixlib",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1578129627679-a354e3962dc9?ixlib",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1575540616469-cc6185554e1c",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1536340124922-d6869dddf37a",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1600616366660-ba86bf0b3dfc",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1580265955419-1ddb41c8c4ff",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1543321269-9d86d3680e1c",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1617078885011-5f0a62c501eb",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1592837451329-c4ac170ade98",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1569845350532-3c687430f1a1",
    title: "Bike",
    cols: 2,
  },
];
