
import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
import CarRental from "../images/Car-rental.png";


function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={CarRental}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="Django"
                techno2="CSS"
                code="https://github.com/FahimAhamed101/django-car"
                demo="https://django-car.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />


              <ProBox
                title="Raouf Ecommerce"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/FahimAhamed101/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
