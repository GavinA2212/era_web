import { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import HomeContainer from "../components/HomeContainer";
import { useScroll } from "../context/ScrollContext";
import Logo from "/assets/ERALogo.png";
import { Link } from "react-router-dom";
export default function Home() {
  const { scrollTo, setScrollTo } = useScroll();

  useEffect(() => {
    if (scrollTo == "") {
      setScrollTo("");
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <main className="mt-28 flex min-h-screen justify-center to-stone-500 text-4xl">
        <section className="flex h-full w-11/12 flex-col px-4">
          <div className="flex animate-fadeIn flex-col items-center justify-center">
            <Link
              to="/"
              className="mt-4 flex max-w-407 animate-fadeIn items-center justify-center md:max-w-500"
            >
              <img src={Logo} alt="ER Automation Logo"></img>
            </Link>
            <h2 className="mt-3 text-center font-Merriweather text-base text-black md:mt-5">
              Empowering Efficiency with Cutting-Edge Automation Solutions
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 grid-rows-4 gap-x-20 gap-y-10 md:grid-cols-2 md:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1">
            <HomeContainer
              header="Engineering Services"
              description="ER Automation is a leading provider of robotics, controls, multi-craft, electrical, mechanical, integration, and design. We offer emergency, short-term, and long-term hourly contract support. Our highly skilled specialists enhance current running systems to maximize output and productivity. Customized hourly rates and free quotes are available."
              image="/assets/RoboticArm.jpg"
              href="/services"
              scroll="service1"
            ></HomeContainer>
            <HomeContainer
              header="Cycle Time Consulting"
              description="We start by observing your current running system. We then provide in-depth analysis for reducing cycle time, eliminating bottlenecks, and reprocessing weld process points as well as any other solutions. Then with scheduled downtime, we implement our solutions at the customers convenience. Additionally, we offer solutions for implementing your periphery to ensure you have an optimized system that produces the maximum parts per hour when the system is brought back up, thus adding to your bottom line. Customized pricing or hourly rates are available."
              image="/assets/CycleTimeConsulting.jpg"
              href="/services"
              scroll="service2"
            ></HomeContainer>
            <HomeContainer
              header="Training Services"
              description="With over 50 years of combined automation experience between our two owners, we offer custom training packages to our clients to help employees assimilate to new or pre-existing technologies and processes in either a classroom setting or documentation for self learning or on site, hands on education. Whether the training need is basic, intermediate, advanced, or niche-specific (laser, vision, welding, adhesive, or controls), we create and provide custom training manuals designed around your team members' needs. This ensures they come out of the classroom ready to make a difference in your organization."
              image="/assets/Training.jpg"
              href="/services"
              scroll="service3"
            ></HomeContainer>
            <HomeContainer
              header="Service and Preventative Maintenance"
              description="We offer full service for your existing equipment, including grease/oil changes, motor replacements, dress pack and cable replacements, gearbox repairs, motherboard repairs, safety board repairs, and any other necessary repairs for your specific maintenance needs. Emergency support and scheduled service options are available. Contact us and we'll be on our way to get you back up and running."
              image="/assets/Maintnence.jpeg"
              href="/services"
              scroll="service4"
            ></HomeContainer>
          </div>
          <GetInTouch />

          <div className="mt-24"></div>
        </section>
      </main>
    </>
  );
}
