const people = {
  philipp: { name: "Philipp Schwarz", role: "Partner / Practice Lead", location: "Frankfurt / Germany", initials: "PS", tags: ["Airline commercial", "Operations strategy", "Integration"] },
  lena: { name: "Lena Krutz", role: "Senior Manager", location: "Frankfurt / Germany", initials: "LK", tags: ["CRM transition", "Passenger service", "Transformations"] },
  chris: { name: "Chris Villmann", role: "Senior Manager", location: "Hamburg / Germany", initials: "CV", tags: ["IT PMO", "Post-merger integration", "Process optimization"] },
  jonas: { name: "Jonas Schaedlich", role: "Senior Business Consultant", location: "Frankfurt / Germany", initials: "JS", tags: ["Airport planning", "Ground handling", "Cutover management"] }
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
    profile.querySelector("h3").textContent = person.name;
    profile.querySelector("h3 + p").textContent = person.role;
    profile.querySelector(".profile-tags").innerHTML = person.tags.map((tag) => `<span>${tag}</span>`).join("");
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
