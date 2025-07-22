const komikList = document.getElementById('komik-list');

// Daftar manual (nanti bisa pakai JSON)
const komikData = [
  {
    nama: "Chaos Cultivator",
    cover: "komik/komik1/cover.jpg",
    folder: "komik1"
  }
];

komikData.forEach(komik => {
  const el = document.createElement('a');
  el.href = `komik/${komik.folder}/chapter1.html`;
  el.className = "bg-white rounded shadow hover:shadow-lg transition p-2";
  el.innerHTML = `
    <img src="${komik.cover}" class="rounded w-full h-64 object-cover mb-2">
    <h2 class="text-xl font-semibold">${komik.nama}</h2>
  `;
  komikList.appendChild(el);
});
