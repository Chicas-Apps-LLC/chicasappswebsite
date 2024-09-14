import './App.css';
import servicesImage from './images/services.jpg';
import approachImage from './images/collab.jpg';
import aboutMeImage from './images/aboutme.jpg';

function App() {
  return (
    <div className="App">
      <nav> 
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Services</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">   
        <h1>Chicas Apps</h1>
        <p>Bringing innovative software solutions for small businesses and entrepreneurs.</p>
        <button onClick={() => window.location = "#consultation"}>Book a Consultation</button>
      </header>
      <main>
         
      {/* Our Approach Section */}
      <section id="approach" className="left-image-section">
      <img src={approachImage} alt="Our Approach" />
        <div className="content">
          <h2>Our Approach</h2>
          <h3>
            Collaboration
          </h3>
          <p>
          I'm passionate about crafting software that solves real problems and drives success. 
          By partnering closely with your team, I'll fully grasp your vision and translate it into robust, user-friendly applications that exceed your expectations.
          </p>
          <h3>
            Innovation
          </h3>
          <p>
          I'm driven by a passion for pushing boundaries and exploring new possibilities. 
          Together, we'll craft software that meets your needs and sets a new standard for innovation in your industry. 
          Expect a final product that's functional and a testament to groundbreaking creativity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="right-image-section">
        <div className="content">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>Web Application Development</li>
          <li>Mobile App Development</li>
          <li>Cloud Solutions & Integration</li>
        </ul>
        </div>
        <img src={servicesImage} alt="Services" />
      </section>


      {/* About Me Section */}
      <section id="about" className="left-image-section">
        <img src={aboutMeImage} alt="About Me" />
        <div className="content">
          <h2>About Me</h2>
          <p>
            I'm an experienced software engineer with a passion for building efficient, scalable, and
            user-friendly solutions. My background in full-stack development and cloud computing allows
            me to tackle a variety of business challenges.
          </p>
        </div>
      </section>

      {/* Book a Consultation Section */}
      <section id="consultation">
        <h2>Book a Consultation</h2>
        <p>Ready to take your business to the next level? Schedule a free consultation to discuss your project.</p>
        <button>Schedule Now</button>
      </section>

       
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Chicas Apps</p>
      </footer>
    </div>
  );
}


export default App;
