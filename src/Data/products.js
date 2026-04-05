const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://allwebs.ru/images/2026/04/03/fd6f746649da1cd65e4958a689c28656.jpg",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://allwebs.ru/images/2026/04/03/77fa931248956f24de0dc63c251fec77.jpg",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://allwebs.ru/images/2026/04/03/718036da7f4002c474efc5bf66237d48.jpg",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://allwebs.ru/images/2026/04/03/afb08758c4b7f0596eb5b186933be04d.jpg",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://allwebs.ru/images/2026/04/03/83fc7c5cfdfa2ca32e2f9e23ece95638.jpg",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://allwebs.ru/images/2026/04/03/508506fa8f3d4f7298266d0f382afff9.jpg",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://allwebs.ru/images/2026/04/03/9505f6c26d29c3fe7c4038a3c38b8c51.jpg",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}