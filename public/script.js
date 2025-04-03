fetch("http://localhost:3000/apod")
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
    document.getElementById("image-container").innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.url}" alt="${data.title}">
      <p>${data.explanation}</p>
    `;
  })
  .catch(error => console.error("Error en la solicitud:", error));
