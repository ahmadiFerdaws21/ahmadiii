// Ensure the navbar exists before running the script
const navbar = document.querySelector('.navbar-area');

if (navbar) {
    function toggleNavbar() {
        const halfwayPoint = window.innerHeight / 2;
        if (window.scrollY > halfwayPoint) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', toggleNavbar);
}




const textElements = [
  document.getElementById('changing-text1'),
  document.getElementById('changing-text2'),
  document.getElementById('changing-text3'),
  document.getElementById('changing-text4'),
  document.getElementById('changing-text5')
];

const imageElement = document.getElementById('banner-image');

const texts = [
  ['#We PROVIDE Technology', '#IT Soulutions for Success'],
  ['Modern Technology', 'Excellent IT Services'],
  ['Improve business.', 'for your success.'],
  ['Explore the forefront of technological advancement with tailored ', 'From infrastructure management to software solutions, '],
  ['solutions designed to meet your unique needs.', 'our comprehensive IT services optimize operations and drive innovation.']
];

const images = ['Images/Image1.jpg', 'Images/Image2.jpg'];

let index = 0;

// Function to change text with animation
function changeTextAndImage() {
  textElements.forEach((textElement, i) => {
      textElement.style.opacity = 0;
      setTimeout(() => {
          textElement.textContent = texts[i][index];
          textElement.style.opacity = 1;
      }, 1500);
  });
  imageElement.src = images[index];
}

// Functions for navigation buttons
document.getElementById('prev-button').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Decrement index
  changeTextAndImage();
});

document.getElementById('next-button').addEventListener('click', () => {
  index = (index + 1) % images.length; // Increment index
  changeTextAndImage();
});

changeTextAndImage();
setInterval(() => {
  index = (index + 1) % images.length;
  changeTextAndImage();
}, 10000);



// sidebar
    document.getElementById('navbar-toggle').addEventListener('click', function () {
      document.getElementById('sidebar').classList.add('active');
  });

  document.getElementById('close-btn').addEventListener('click', function () {
      document.getElementById('sidebar').classList.remove('active');
  });

  var parentLinks = document.querySelectorAll('.parent-link');
  parentLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          var childLinks = this.nextElementSibling;
          if (childLinks.style.display === "block") {
              childLinks.style.display = "none";
          } else {
              childLinks.style.display = "block";
          }
      });
  });