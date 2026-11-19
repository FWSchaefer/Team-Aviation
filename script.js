const people = {
  philipp: { name: "Philipp Schwarz", role: "Partner / Practice Lead", location: "Frankfurt / Germany", email: "philipp.schwarz@bearingpoint.com", photo: "assets/philipp.png", segments: ["commercial", "operations", "frankfurt"], focus: ["Airline commercial", "Operations strategy", "Integration"], experience: "Business and technology consulting across airline commercial and operations functions, with a focus on integration, architecture, and transformation." },
  chris: { name: "Chris Villmann", role: "Senior Manager", location: "Hamburg / Germany", email: "chris.villmann@bearingpoint.com", photo: "assets/chris.png", segments: ["operations", "other"], focus: ["IT PMO", "Post-merger integration", "Process optimization"], experience: "Program leadership for complex aviation transformations, including IT integration, governance, requirements engineering, and change." },
  lena: { name: "Lena Krutz", role: "Senior Manager", location: "Frankfurt / Germany", email: "lena.krutz@bearingpoint.com", photo: "assets/lena.png", segments: ["commercial", "operations", "frankfurt"], focus: ["CRM transition", "Passenger service", "Transformation"], experience: "Airline commercial and operations specialist with experience in CRM cutovers, passenger services, and post-merger integration." },
  julia: { name: "Julia Ortstadt", role: "Senior Business Consultant", location: "Frankfurt / Germany", email: "julia.ortstadt@bearingpoint.com", photo: "assets/julia.png", segments: ["commercial", "frankfurt"], focus: ["CRM", "Customer portals", "Requirements engineering"], experience: "Customer portal and CRM delivery expert with a background in Salesforce implementation, process optimization, and project leadership." },
  jasmin: { name: "Jasmin Diederichs", role: "Senior Business Consultant", location: "D\u00fcsseldorf / Germany", email: "jasmin.diederichs@bearingpoint.com", photo: "assets/jasmin.png", segments: ["commercial", "other"], focus: ["Commercial transformation", "Change management", "Partner strategy"], experience: "Management consultant supporting aviation commercial transformation, customer journeys, portfolio management, and strategic partnerships." },
  jonas: { name: "Jonas Sch\u00e4dlich", role: "Senior Business Consultant", location: "Frankfurt / Germany", email: "jonas.schaedlich@bearingpoint.com", photo: "assets/jonas.png", segments: ["airports", "operations", "frankfurt"], focus: ["Airport planning", "Ground handling", "Cutover management"], experience: "Airport and airline transformation specialist for terminal operations, passenger processes, cargo, data exchange, and enterprise architecture." },
  emilia: { name: "Emilia Zimmer", role: "Business Consultant", location: "Berlin / Germany", email: "emilia.zimmer@bearingpoint.com", photo: "assets/emilia.png", segments: ["operations", "other"], focus: ["Strategic PMO", "Data flows", "Governance"], experience: "PMO consultant for complex IT integrations, data flows, stakeholder coordination, reporting, and dependency management." },
  felix: { name: "Felix Schaefer", role: "Business Consultant", location: "Munich / Germany", email: "felixwolfgang.schaefer@bearingpoint.com", photo: "assets/felix.png", segments: ["operations", "other"], focus: ["Airline operations", "PMO", "Business analysis"], experience: "Aviation operations and PMO consultant with experience in flight operations procurement, stakeholder management, and market analysis." },
  florian: { name: "Florian Kuhn", role: "Business Consultant", location: "Stuttgart / Germany", email: "florian.kuhn@bearingpoint.com", photo: "assets/florian.png", segments: ["commercial", "operations", "other"], focus: ["Customer experience", "CRM", "Process optimization"], experience: "Consultant with airline and airport experience in boarding optimization, customer feedback, claims automation, and AI luggage detection." },
  georgi: { name: "Georgi Devrisashvili", role: "Business Consultant", location: "Frankfurt / Germany", email: "georgi.devrisashvili@bearingpoint.com", photo: "assets/georgi.png", segments: ["commercial", "frankfurt"], focus: ["Customer experience", "CRM integration", "Data governance"], experience: "CRM transition and product ownership consultant supporting airline customer experience, data flows, and operational readiness." },
  valentin: { name: "Valentin Heng", role: "Business Consultant", location: "Frankfurt / Germany", email: "valentin.heng@bearingpoint.com", photo: "assets/valentin.png", segments: ["operations", "frankfurt"], focus: ["IT PMO", "Data analytics", "AI"], experience: "Technology and strategy analyst supporting aviation IT governance, executive reporting, and data-driven transformation." }
};

const references = {
  aurora: { sector: "Post-merger integration", title: "Airline integration PMO", summary: "Integrated governance, IT PMO, and commercial support across a 57-project airline program.", outcomes: ["Integration platform and governance", "IT PMO and data-flow management", "Commercial and operational alignment"], capabilities: ["Program management", "Integration", "Commercial strategy"] },
  "flight-plan": { sector: "Airline operations", title: "Flight plan optimization", summary: "Tool implementation, provider selection, and process optimization for a major European airline.", outcomes: ["Implementation roadmap and governance", "Provider selection and onboarding", "Optimized flight planning processes"], capabilities: ["Flight operations", "Transformation", "Project management"] },
  crm: { sector: "Customer and commercial", title: "CRM transition", summary: "Passenger experience and servicing transformation as part of a post-merger integration.", outcomes: ["Transition and cutover readiness", "Target passenger-service processes", "Cross-carrier stakeholder alignment"], capabilities: ["CRM", "Passenger experience", "Change management"] }
};

const profile = document.querySelector(".team-profile");
const profileDetails = document.querySelector(".profile-details");
const profileExpand = document.querySelector(".profile-expand");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const floatingBar = document.querySelector(".floating-bar");
const siteHeader = document.querySelector(".site-header");
const teamMembers = [...document.querySelectorAll(".team-member")];

function setProfile(personKey) {
  const person = people[personKey];
  profile.querySelector(".profile-location").textContent = person.location;
  profile.querySelector("#profile-photo").src = person.photo;
  profile.querySelector("#profile-photo").alt = `Portrait of ${person.name}`;
  profile.querySelector("#profile-name").textContent = person.name;
  profile.querySelector("#profile-role").textContent = person.role;
  profile.querySelector("#profile-email").href = `mailto:${person.email}`;
  profile.querySelector("#profile-email").textContent = person.email;
  profileDetails.querySelector("#profile-focus").innerHTML = person.focus.map((item) => `<span>${item}</span>`).join("");
  profileDetails.querySelector("#profile-experience").textContent = person.experience;
  profileDetails.querySelector("#profile-contact").href = `mailto:${person.email}`;
}

teamMembers.forEach((button) => {
  button.addEventListener("click", () => {
    setProfile(button.dataset.person);
    teamMembers.forEach((member) => {
      member.classList.toggle("active", member === button);
      member.setAttribute("aria-selected", String(member === button));
    });
  });
});

document.querySelectorAll(".team-filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const value = filter.dataset.filter;
    document.querySelectorAll(".team-filter").forEach((item) => item.classList.toggle("active", item === filter));
    const visibleMembers = teamMembers.filter((member) => {
      const match = value === "all" || people[member.dataset.person].segments.includes(value);
      member.hidden = !match;
      member.style.display = match ? "" : "none";
      return match;
    });
    if (!visibleMembers.some((member) => member.classList.contains("active"))) {
      visibleMembers[0]?.click();
    }
  });
});

profileExpand.addEventListener("click", () => {
  const isExpanded = profileExpand.getAttribute("aria-expanded") === "true";
  profileExpand.setAttribute("aria-expanded", String(!isExpanded));
  profileDetails.hidden = isExpanded;
  profileExpand.innerHTML = isExpanded ? "View profile <span>&darr;</span>" : "Close profile <span>&uarr;</span>";
});

document.querySelectorAll(".project-interactive").forEach((project) => {
  const activateReference = () => {
    const reference = references[project.dataset.reference];
    document.querySelectorAll(".project-interactive").forEach((item) => {
      item.classList.toggle("active", item === project);
      item.setAttribute("aria-pressed", String(item === project));
    });
    document.querySelector("#reference-sector").textContent = reference.sector;
    document.querySelector("#reference-title").textContent = reference.title;
    document.querySelector("#reference-summary").textContent = reference.summary;
    document.querySelector("#reference-outcomes").innerHTML = reference.outcomes.map((item) => `<li>${item}</li>`).join("");
    document.querySelector("#reference-capabilities").innerHTML = reference.capabilities.map((item) => `<span>${item}</span>`).join("");
  };
  project.addEventListener("click", activateReference);
  project.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateReference();
    }
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

document.documentElement.classList.add("motion-ready");
const revealTargets = document.querySelectorAll(".section-heading, .capability, .ecosystem-heading, .ecosystem-card, .signal-copy, .signal-list, .offerings-header, .offering-card, .work-header, .project, .reference-detail, .team-header, .team-filters, .team-list, .team-profile-stack, .contact > *");
revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach((element) => observer.observe(element));

const hero = document.querySelector(".hero");
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  window.requestAnimationFrame(() => {
    hero.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.08, 44)}px`);
    floatingBar.classList.toggle("is-visible", window.scrollY > 420);
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  });
  ticking = true;
}, { passive: true });

const navLinks = [...navigation.querySelectorAll("a[href^='#']")];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const navObserver = new IntersectionObserver((entries) => {
  const activeSection = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!activeSection) return;
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${activeSection.target.id}`));
}, { rootMargin: "-30% 0px -55% 0px", threshold: [0.01, 0.25, 0.5] });
navSections.forEach((section) => navObserver.observe(section));
