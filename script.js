const people = {
  philipp: { name: "Philipp Schwarz", role: "Partner / Practice Lead", location: "Frankfurt / Germany", initials: "PS", email: "philipp.schwarz@bearingpoint.com" },
  chris: { name: "Chris Villmann", role: "Senior Manager", location: "Hamburg / Germany", initials: "CV", email: "chris.villmann@bearingpoint.com" },
  lena: { name: "Lena Krutz", role: "Senior Manager", location: "Frankfurt / Germany", initials: "LK", email: "lena.krutz@bearingpoint.com" },
  julia: { name: "Julia Ortstadt", role: "Senior Business Consultant", location: "Frankfurt / Germany", initials: "JO", email: "julia.ortstadt@bearingpoint.com" },
  jasmin: { name: "Jasmin Diederichs", role: "Senior Business Consultant", location: "D\u00fcsseldorf / Germany", initials: "JD", email: "jasmin.diederichs@bearingpoint.com" },
  emilia: { name: "Emilia Zimmer", role: "Business Consultant", location: "Berlin / Germany", initials: "EZ", email: "emilia.zimmer@bearingpoint.com" },
  florian: { name: "Florian Kuhn", role: "Business Consultant", location: "Stuttgart / Germany", initials: "FK", email: "florian.kuhn@bearingpoint.com" },
  jonas: { name: "Jonas Sch\u00e4dlich", role: "Senior Business Consultant", location: "Frankfurt / Germany", initials: "JS", email: "jonas.schaedlich@bearingpoint.com" },
  valentin: { name: "Valentin Heng", role: "Business Consultant", location: "Frankfurt / Germany", initials: "VH", email: "valentin.heng@bearingpoint.com" },
  georgi: { name: "Georgi Devrisashvili", role: "Business Consultant", location: "Frankfurt / Germany", initials: "GD", email: "georgi.devrisashvili@bearingpoint.com" }
};

const profile = document.querySelector(".team-profile");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

document.querySelectorAll(".team-member").forEach((button) => {
  button.addEventListener("click", () => {
    const person = people[button.dataset.person];
    document.querySelectorAll(".team-member").forEach((member) => {
      member.classList.toggle("active", member === button);
      member.setAttribute("aria-selected", String(member === button));
    });
    profile.querySelector(".profile-location").textContent = person.location;
    profile.querySelector(".profile-monogram").textContent = person.initials;
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
