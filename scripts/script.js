document.getElementById("website-button").addEventListener("click", () => {
    // Check if the user is on a mobile device regardless of the fact that it is hidden.
    const isMobile = isMobileDevice();
    
    if (isMobile) {
      alert("This website is not optimized for mobile devices as of yet. Please visit it on a desktop or laptop for the best experience.");
  
    } else {
      window.open("https://wilhaz.github.io/MapMotion-Web/", "_blank");
    }
  });
  
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  }
  
  
  function showProjectDetails(title, description, languageDescription, event, triggerButton) {
      const projectTiles = document.querySelectorAll('.project-tile');
      const projectDetails = document.querySelector('.project-details');
      const titleElement = document.getElementById('project-title');
      const descriptionElement = document.getElementById('project-description');
      const languageToolsElement = document.getElementById('project-languages-description');
      const websiteButton = document.getElementById('website-button');
    
      // Add changing class to trigger animation
      projectDetails.classList.add('changing');
    
      // Fade other project tiles
      projectTiles.forEach((tile) => {
        tile.classList.add('faded');
      });
      event.currentTarget.classList.remove('faded');
  
      // Update content after a short delay
      setTimeout(() => {
        titleElement.textContent = title;
        descriptionElement.textContent = description;
        languageToolsElement.textContent = languageDescription;
        projectDetails.classList.remove('changing');
      }, 300);
  
      if (triggerButton && !isMobileDevice()) {
        setTimeout(() => {
          websiteButton.style.display = 'block'; // Show the button for MapMotion
        }, 300);
      } else {
        setTimeout(() => {
          websiteButton.style.display = 'none'; // Hide the button for other projects
        }, 300);
      }
  
      scrollToElementOnMobile('project-details');
    }
  
    document.querySelectorAll('.project-tile').forEach(tile => {
      tile.addEventListener('click', () => {
          document.querySelectorAll('.project-tile').forEach(t => t.classList.remove('selected'));
          tile.classList.add('selected');
      });
  });
  
  document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1); // Get the ID, removing the "#"
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            const offset = 50; // Adjust the offset to leave padding at the top
            const elementPosition = targetElement.offsetTop; // Section's position from the top
            const offsetPosition = elementPosition - offset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
  });
  
  function toggleSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    const toggleButton = document.getElementById('toggle-skills');
  
    if (skillsGrid.classList.contains('expanded')) {
      skillsGrid.classList.remove('expanded');
      toggleButton.textContent = 'View More';
    } else {
      skillsGrid.classList.add('expanded');
      toggleButton.textContent = 'View Less';
    }
  }
  
  function scrollToElementOnMobile(elementId) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
  }
  
  window.addEventListener("load", () => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  });

document.getElementById('theme-toggle').addEventListener('click', (e) => {
    const root = document.documentElement;
    const isLightTheme = root.classList.toggle('light-theme');
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = isLightTheme ? '🌞' : '🌙';

    // Create the ripple effect
    const ripple = document.createElement('div');
    ripple.classList.add('theme-ripple');

    // Position the ripple at the center of the button
    const rect = e.target.getBoundingClientRect();
    ripple.style.top = `${rect.top + rect.height / 2}px`;
    ripple.style.left = `${rect.left + rect.width / 2}px`;

    document.body.appendChild(ripple);

    // Remove the ripple after the animation ends
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

