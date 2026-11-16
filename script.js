const people = {
  philipp: { name: "Philipp Schwarz", role: "Partner / Practice Lead", location: "Frankfurt / Germany", email: "philipp.schwarz@bearingpoint.com", photo: "assets/philipp.png" },
  chris: { name: "Chris Villmann", role: "Senior Manager", location: "Hamburg / Germany", email: "chris.villmann@bearingpoint.com", photo: "assets/chris.png" },
  lena: { name: "Lena Krutz", role: "Senior Manager", location: "Frankfurt / Germany", email: "lena.krutz@bearingpoint.com", photo: "assets/lena.png" },
  julia: { name: "Julia Ortstadt", role: "Senior Business Consultant", location: "Frankfurt / Germany", email: "julia.ortstadt@bearingpoint.com", photo: "assets/julia.png" },
  jasmin: { name: "Jasmin Diederichs", role: "Senior Business Consultant", location: "D\u00fcsseldorf / Germany", email: "jasmin.diederichs@bearingpoint.com", photo: "assets/jasmin.png" },
  emilia: { name: "Emilia Zimmer", role: "Business Consultant", location: "Berlin / Germany", email: "emilia.zimmer@bearingpoint.com", photo: "assets/emilia.png" },
  florian: { name: "Florian Kuhn", role: "Business Consultant", location: "Stuttgart / Germany", email: "florian.kuhn@bearingpoint.com", photo: "assets/florian.png" },
  jonas: { name: "Jonas Sch\u00e4dlich", role: "Senior Business Consultant", location: "Frankfurt / Germany", email: "jonas.schaedlich@bearingpoint.com", photo: "assets/jonas.png" },
  valentin: { name: "Valentin Heng", role: "Business Consultant", location: "Frankfurt / Germany", email: "valentin.heng@bearingpoint.com", photo: "assets/valentin.png" },
  georgi: { name: "Georgi Devrisashvili", role: "Business Consultant", location: "Frankfurt / Germany", email: "georgi.devrisashvili@bearingpoint.com", photo: "assets/georgi.png" }
};

const profile = document.querySelector(".team-profile");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

document.querySelectorAll(".team-member").forEach((button) => {
  button.addEventListener("click", () => {
    const person = people[button.dataset.person];
    profile.hidden = false;
    document.querySelectorAll(".team-member").forEach((member) => {
      member.classList.toggle("active", member === button);
      member.setAttribute("aria-selected", String(member === button));
    });
    profile.querySelector(".profile-location").textContent = person.location;
    profile.querySelector("#profile-photo").src = person.photo;
    profile.querySelector("#profile-photo").alt = `Portrait of ${person.name}`;
    profile.querySelector("#profile-name").textContent = person.name;
    profile.querySelector("#profile-role").textContent = person.role;
    profile.querySelector("#profile-email").href = `mailto:${person.email}`;
    profile.querySelector("#profile-email").textContent = person.email;
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
