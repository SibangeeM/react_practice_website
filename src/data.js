import t1 from "./images/tour-1.jpeg";
import t2 from "./images/tour-2.jpeg";
import t3 from "./images/tour-3.jpeg";
import t4 from "./images/tour-4.jpeg";
export const pagelinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com/", text: "twitter" },
  { id: 2, href: "https://www.facebook.com/", text: "facebook" },
  { id: 3, href: "https://www.squarespace.com/", text: "squarespace" },
];

export const servicesContent = [
  {
    id: 1,
    service: "saving money",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    service: "endless hiking",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    service: "amazing comfort",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: t1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    img: t2,
    date: "october 1th, 2020",
    title: "best of java",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    img: t3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "hong kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    img: t4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "kenya",
    days: "20",
    price: 3300,
  },
];
