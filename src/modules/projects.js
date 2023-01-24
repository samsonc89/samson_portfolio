
import gitSVG from "../assets/github.svg";
import liveSVG from "../assets/link.svg";
import Data from './projects.json'



console.log(Data);


const projectsContainer = document.querySelector("#projects-container");

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectThumbnail = document.createElement("div");
  projectThumbnail.classList.add("project-thumbnail");

  const thumbnailImage = document.createElement("img");
  thumbnailImage.classList.add("thumbnail-image");
  thumbnailImage.src = "./src/assets/"+project.thumbnail;

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;

  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-wrapper");

  const gitWrapper = document.createElement("div");
  gitWrapper.classList.add("git-wrapper");
  const gitLink = document.createElement("a");
  gitLink.href = project.code;
  const gitIcon = document.createElement("img");
  gitIcon.classList.add("git-icon", "icon");
  gitIcon.src = gitSVG;

  const liveWrapper = document.createElement("div");
  liveWrapper.classList.add("live-wrapper");
  const liveLink = document.createElement("a");
  liveLink.href = project.live;
  const liveIcon = document.createElement("img");
  liveIcon.classList.add("live-icon", "icon");
  liveIcon.src = liveSVG;

  gitLink.appendChild(gitIcon);
  liveLink.appendChild(liveIcon);

  gitWrapper.appendChild(gitLink);
  liveWrapper.appendChild(liveLink);

  iconWrapper.appendChild(gitWrapper);
  iconWrapper.appendChild(liveWrapper);

  projectThumbnail.appendChild(thumbnailImage);
  projectCard.appendChild(projectThumbnail);
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(iconWrapper);

  projectsContainer.appendChild(projectCard);
}

Data.forEach((project) => createProjectCard(project));

export { createProjectCard };
