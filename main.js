const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// FILTER PORTFOLIO PROJECTS 
const portfolio = [
  {
    id: 1,
    title:"portfolio 1 picture",
    category: "websites",
    img:
    "./images/portfolio/portfolio-1.jpg",
    projectName: "project name goes here 1",
    desc: `portfolio 1 image `
  },
  {
    id: 2,
    title:"portfolio 2 picture",
    category: "mokup",
    img:
    "./images/portfolio/portfolio-1.jpg",
    projectName: "project name goes here 2",
    desc: `portfolio 2 image `
  },
  {
    id: 3,
    title:"portfolio 3 picture",
    category: "design",
    img:
    "./images/portfolio/portfolio-3.jpg",
    projectName: "project name goes here 3",
    desc: `portfolio 3 image `
  },
  {
    id: 4,
    title:"portfolio 4 picture",
    category: "mokup",
    img:
    "./images/portfolio/portfolio-4.jpg",
    projectName: "project name goes here 4",
    desc: `portfolio 4 image `
  },
  {
    id: 5,
    title:"portfolio 5 picture",
    category: "websites",
    img:
    "./images/portfolio/portfolio-5.jpg",
    projectName: "project name goes here 5",
    desc: `portfolio 5 image `
  },
  {
    id: 6,
    title:"portfolio 6 picture",
    category: "design",
    img:
    "./images/portfolio/portfolio-6.jpg",
    projectName: "project name goes here 6",
    desc: `portfolio 6 image `
  },
  {
    id: 7,
    title:"portfolio 7 picture",
    category: "websites",
    img:
    "./images/portfolio/portfolio-7.jpg",
    projectName: "project name goes here 7",
    desc: `portfolio 7 image `
  },
  {
    id: 8,
    title:"portfolio 8 picture",
    category: "design",
    img:
    "./images/portfolio/portfolio-8.jpg",
    projectName: "project name goes here 8",
    desc: `portfolio 8 image `
  },
  {
    id: 9,
    title:"portfolio 9 picture",
    category: "mokup",
    img:
    "./images/portfolio/portfolio-9.jpg",
    projectName: "project name goes here 9",
    desc: `portfolio 9 image `
  }
]

// load portfolio projects
window.addEventListener("DOMContentLoaded", function () {
  displayPortfolioProjects(portfolio);
  displayPortfolioButtons();
});

function displayPortfolioProjects(PortfolioProjects){
  let displayProjects = PortfolioProjects.map(function(singleProject){
    return `<div class="col-lg-4 col-md-6">
    <div class="portfolio-box shadow">
      <img src=${singleProject.img} alt=${singleProject.title} title=${singleProject.title} class="img-fluid">
      <div class="portfolio-info">
        <div class="caption">
          <h4 class="title-project">${singleProject.projectName}</h4>
          <p>category project</p>
        </div>
      </div>
    </div>
  </div>`;
  })
  displayProjects = displayProjects.join("");
  sectionCenter.innerHTML = displayProjects;
  console.log(sectionCenter)
}

function displayPortfolioButtons() {
  const categories = portfolio.reduce(
    function (values, singleProject) {
      if (!values.includes(singleProject.category)) {
        values.push(singleProject.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn btn-outline-primary mx-1 filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const portfolioCategory = portfolio.filter(function (projectItem) {
        if (projectItem.category === category) {
          return projectItem;
        }
      });
      if (category === "all") {
        displayPortfolioProjects(portfolio);
      } else {
        displayPortfolioProjects(portfolioCategory);
      }
    });
  });
}



















//   SCOLLING BUTTOM

let scroll = document.querySelector('.scroll')
window.onscroll = function(){
  this.scrollY>=200 ? scroll.classList.add('show'):scroll.classList.remove('show')
}

scroll.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

// // FORM VALIDATION
const form = document.getElementById('form')
const submit = document.getElementById('submit')

email.addEventListener("keydown",()=>{
  let email = document.getElementById('email')
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let errorEl = document.getElementById('error')
    if(email.value.match(pattern)){
      form.classList.add('valid')
      form.classList.remove('invalid')
      errorEl.textContent = "Your Email Address In Valid"
      errorEl.style.color = "#14b8a6"
    }else{
      form.classList.remove('valid')
      form.classList.add('invalid')
      errorEl.textContent = "Please Enter Valid Email Address"
      errorEl.style.color = "#FF0000"
    }
})

form.addEventListener('submit',(e)=>{
       e.preventDefault();
})

// GET DATE FOOTER
let date = document.querySelector('.date')
date.innerHTML  = new Date().getFullYear();

