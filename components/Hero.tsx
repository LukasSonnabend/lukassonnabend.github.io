import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import ExportedImage from "next-image-export-optimizer";
import { educationInstitution } from "./propTypes";
import uniJson from "../education.json";

const Hero = () => (
  <>
    <div className="grid gap-4 grid-cols-12 mx-2 md:mx-0 justify-center py-8">
      <div className="col-span-12 md:col-span-4">
        <div className="text-center">
          <div className="w-full">
            <div className="w-40 lg:w-64 mx-auto">
              <ExportedImage
                src="/me.jpg"
                width="100%"
                height="100%"
                layout="responsive"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
          <p className="text-4xl">Lukas Sonnabend</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 xl:col-span-6 right_side">
        <div>
          <div>
            <div className="text-4xl my-2">
              <h1>Hi 👋</h1>
              <p className="text-xl">
                My Name is Lukas, i am currently pursuing a Bachelor&apos;s
                degree in Computer Science at the University of Applied Sciences
                in Darmstadt, aiming on graduating in the summer of 2023.
              </p>
            </div>

            <div className="grid grid-cols-12">
              <div className="md:p-0 col-span-4">
                <p className="text-xl mb-2 font-semibold">Main Interests</p>
                <ul className="list-disc pl-6">
                  <li className="sm:mb-2">Web Development</li>
                  <li>Distributed Systems</li>
                </ul>
              </div>
              <div className="col-span-8">
                <p className="text-xl mb-2 font-semibold">Education</p>
                <ul className="p-0">
                  {uniJson &&
                    uniJson.map((uni: educationInstitution) => (
                      <>
                        <li key={uni.name} className="flex mb-2">
                          <div>
                            {uni.yearGraduated ? (
                              <FaGraduationCap className="inline-block mr-2" />
                            ) : (
                              <FaUniversity className="inline-block mr-2" />
                            )}
                          </div>
                          <div>
                            <span>{uni.degree}</span>
                            <a href={uni.url} className="block text-sm">
                              {uni.name}
                            </a>
                          </div>
                        </li>
                      </>
                    ))}
                  {/*
                  <li className="sm:mb-2"><FaUniversity className="d-inline col-1"/><span className="col-11">BSc. Computer Science, in progress</span></li>
                  <li className="d-flex"><FaUniversity className="d-inline col-1"/> <span className="col-11">BA. Marketing & Communications Management 2019</span></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;