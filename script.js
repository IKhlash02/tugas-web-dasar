// Data proyek Anda dalam bentuk array objek
const projects = [
  {
    title: "Portofolio Website 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    techUsed: ["HTML", "CSS"],
    imageUrl: "https://i.pinimg.com/474x/5b/44/0a/5b440a039eb3eef5bbbe5c50b9e3f9a6.jpg",
  },
  {
    title: "Portofolio Website 2",
    description: "Lorem ipsum dolor sit amet consectetur.",
    techUsed: ["HTML", "CSS"],
    imageUrl: "https://i.pinimg.com/474x/5b/44/0a/5b440a039eb3eef5bbbe5c50b9e3f9a6.jpg",
  },
  {
    title: "Portofolio Flutter 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    techUsed: ["dart", "Flutter"],
    imageUrl: "https://i.pinimg.com/474x/fe/2b/6e/fe2b6e17284d56c4f2bd22130e969226.jpg",
  },
  {
    title: "Portofolio Flutter 2",
    description: "Lorem ipsum dolor sit amet consectetur.",
    techUsed: ["dart", "Flutter"],
    imageUrl: "https://i.pinimg.com/474x/3b/df/a7/3bdfa7b0cd4b782ba03c53aea9ba8b73.jpg",
  },
  // Tambahkan data proyek lainnya di sini
];

// Ambil elemen container untuk card
const cardContainer = document.getElementById("card-container");

// Loop melalui data proyek dan buat card-item untuk setiap proyek
projects.forEach((project) => {
  // Buat elemen card-item
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  // Buat elemen gambar
  const img = document.createElement("img");
  img.src = project.imageUrl;
  img.alt = "project";

  // Buat elemen judul proyek
  const title = document.createElement("h4");
  title.textContent = project.title;

  // Buat elemen deskripsi proyek
  const description = document.createElement("p");
  description.textContent = project.description;

  // Buat elemen untuk teknologi yang digunakan
  const techUse = document.createElement("div");
  techUse.classList.add("tech-use");
  project.techUsed.forEach((tech) => {
    const techItem = document.createElement("p");
    techItem.textContent = tech;
    techUse.appendChild(techItem);
  });

  // Tambahkan elemen-elemen ke card-item
  cardItem.appendChild(img);
  cardItem.appendChild(title);
  cardItem.appendChild(description);
  cardItem.appendChild(techUse);

  // Tambahkan card-item ke container
  cardContainer.appendChild(cardItem);
});
