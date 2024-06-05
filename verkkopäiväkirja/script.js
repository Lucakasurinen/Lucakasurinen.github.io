// Get the sidebar and content elements
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

// Add event listeners to the links
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section ID
    const targetId = link.href.replace('#', '');

    // Scroll to the target section
    const target = document.getElementById(targetId);
    content.scrollTop = target.offsetTop;

    // Close the sidebar if it's open
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });
});

// Add animation to scrolling
const $content = $('#content');
$content.on('scroll', () => {
  const scrollTop = $content.scrollTop();
  const sections = $content.find('h2');
  sections.each((index, section) => {
    const offsetTop = $(section).offset().top;
    if (scrollTop >= offsetTop) {
      // Add animation class to the section
      $(section).addClass('animated fadeIn');
    }
  });
});
