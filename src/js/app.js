import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // HTML de forma dinámica
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
          ${
            variables.includeCover
              ? `<div class="cover" style="background-image: url('${variables.background}'); background-size: cover; background-position: center;"></div>`
              : "<div class='cover'></div>"
          }
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "Nombre"} ${variables.lastName ||
    "Apellido"}</h1>
          <h2>${variables.role || "Tu Rol"}</h2>
          <h3>${variables.city || "Ciudad"}, ${variables.country || "País"}</h3>
          <ul class="${variables.socialMediaPosition || "position-right"}">
            ${
              variables.twitter
                ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
                : ""
            }
            ${
              variables.github
                ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
                : ""
            }
            ${
              variables.linkedin
                ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
                : ""
            }
            ${
              variables.instagram
                ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
                : ""
            }
          </ul>
        </div>
    `;
}

// Lógica para hacer el widget dinámico y mostrar iconos correctamente
window.onload = function() {
  // Estado inicial
  let variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  // Render inicial
  render(variables);

  // Escuchar cambios en todos los .picker
  document.querySelectorAll(".picker").forEach(el => {
    el.addEventListener("change", function(e) {
      const key = el.getAttribute("for");
      let value = el.value;
      // Convertir a boolean si es includeCover
      if (key === "includeCover") value = value === "true";
      // Si es vacío, poner null
      if (value === "") value = null;
      variables[key] = value;
      render(variables);
    });
  });
};
