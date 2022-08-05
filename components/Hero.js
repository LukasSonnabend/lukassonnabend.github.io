import { FaUniversity } from "react-icons/fa";
import ExportedImage from "next-image-export-optimizer";

const Hero = () => (
  <>
    <div className="row py-8">
      <div className="col-lg-4 d-flex justify-content-center">
        <div className="text-center">
          <ExportedImage src="/me.jpg" width="100%" height="100%" className="img max-w-full max-h-48 md:max-h-72 h-auto lg:h-64 rounded-full mb-1 mx-auto" alt=""/>
          <p className="text-4xl">Lukas Sonnabend</p>
          <a href="https://h-da.de/en/" className="d-block text-sm">Darmstadt University of Applied Sciences</a>
          <a href="https://en.ism.de/" className="d-block text-sm">International School of Management</a>
        </div>
      </div>
      <div className="col-lg-8">
      <div className="container">
            <div className="row">
              <div className="jumbotron jumbotron-fluid pl-8 mt-2">
          <h1>Hi 👋</h1>
          <p className="text-xl">My Name is Lukas, i am currently pursuing a Bachelor&apos;s degree in Computer Science
            at the University of Applied Sciences in Darmstadt, aiming on graduating in the summer of 2023.
          </p>
          </div>

            <div className="row">
              <div className="col-md-4 md:p-0">
                <p className="text-xl mb-1 font-semibold">Main Interests</p>
                <ul className="list-disc pl-6">
                  <li className="sm:mb-2">Web Development</li>
                  <li>Distributed Systems</li>
                </ul>
              </div>
              <div className="col-md-8">
                <p className="text-xl mb-1 font-semibold">Education</p>
                <ul className="p-0">
                  <li className="sm:mb-2"><FaUniversity className="d-inline col-1"/><span className="col-11">BSc. Computer Science, in progress</span></li>
                  <li className="d-flex"><FaUniversity className="d-inline col-1"/> <span className="col-11">BA. Marketing & Communications Management 2019</span></li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </>
)

export default Hero