import GradientCard from "@/components/GradientCard";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/router";
import { useEffect, useRef } from "react";
import { Fade, Flip, Slide } from "react-awesome-reveal";
import Markdown from "react-markdown";

export default function AlgoMania() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center gap-3 bg-none z-0 font-body">
      <Navbar />
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-cover -z-10 brightness-[.25] absolute top-0 left-0"
        controls={false}
        autoPlay={true}
        loop={true}
      />

      {/* Scrollable Container */}
      <div className="w-screen h-screen overflow-y-scroll scroll-snap-container snap-mandatory">
        {/* Page 1 */}
        <div className="w-screen h-screen flex flex-col items-center justify-center snap-start">
          <h1 className="text-8xl font-semibold font-algomania flex items-center gap-5">
            <div className="text-orange-600">Algomania</div>
            <div className="text-pink-600">2.0</div>
          </h1>
          <div className="font-body text-2xl mt-5">
            The most awaited event of Encode AI is here!
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8twgZXulYD42nTFqoU_zARjbHxhiDQ5DA36oRzXqBaUamhQ/viewform"
            target="_blank"
            className="btn mt-10 text-3xl px-20 py-2"
          >
            Register
          </a>
        </div>

        {/* Page 2 */}
        <div className="w-screen h-screen p-20 bg-background flex flex-col items-center gap-2 snap-start">
          <h1 className="text-4xl font-semibold font-heading bg-gradient-to-br from-purple-600 to-purple-900 text-transparent bg-clip-text">
            Why Algomania?
          </h1>
          <div className="mt-10 w-4/5 h-full grid grid-cols-3 gap-5">
            <Slide direction="up" cascade triggerOnce damping={0.75}>
              <div className="w-full clrbdr p-10 flex flex-col items-center">
                <h1 className="w-full font-semibold text-3xl font-heading text-center text-white">
                  Amazing Prize Pool
                </h1>
                <div className="w-full text-justify text-lg mt-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto eligendi nostrum neque quasi similique error quisquam
                  quidem ipsum at rem esse molestiae, maxime ut molestias illum!
                  Tenetur iusto dignissimos inventore!
                </div>
              </div>
              <div className="w-full clrbdr p-10 flex flex-col items-center">
                <h1 className="w-full font-semibold text-3xl font-heading text-center text-white">
                  Hands-on CC Experience
                </h1>
                <div className="w-full text-justify text-lg mt-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto eligendi nostrum neque quasi similique error quisquam
                  quidem ipsum at rem esse molestiae, maxime ut molestias illum!
                  Tenetur iusto dignissimos inventore!
                </div>
              </div>
              <div className="w-full clrbdr p-10 flex flex-col items-center">
                <h1 className="w-full font-semibold text-3xl font-heading text-center text-white">
                  Goodies and Foodies
                </h1>
                <div className="w-full text-justify text-lg mt-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto eligendi nostrum neque quasi similique error quisquam
                  quidem ipsum at rem esse molestiae, maxime ut molestias illum!
                  Tenetur iusto dignissimos inventore!
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Page 3 */}
        <div className="w-screen h-screen p-20 bg-background flex flex-col items-center gap-2 snap-start">
          <h1 className="text-4xl font-semibold font-heading text-orange-600">
            FAQs
          </h1>
          <div className="w-4/5 mt-10 grid grid-cols-2 gap-10">
            <Fade cascade triggerOnce damping={0.75}>
              <InfoCard title="When?">
                On **8th February, 2025**, from **9 AM to 6 PM**
              </InfoCard>
              <InfoCard title="Where?">
                In the **13th floor study area** of **BE Block**
              </InfoCard>
              <InfoCard title="Is there a selection round?">
                Yes. Around **32 to 35 teams** will qualify the selection round
                to go to the finals.
              </InfoCard>
              <InfoCard title="What is the fee?">
                A fee of **₹200 per head** has to be paid by qualifying teams in
                the finals venue.
              </InfoCard>
              <InfoCard title="What kinds of questions will be asked?">
                They look like **competitive-coding problems** like the ones
                from LeetCode or CodeChef. These websites can get you prepped.
              </InfoCard>
              <InfoCard title="Why should I attend this event?">
                Competitive coding events get you prepared for the DSA (Data
                Structures and Algorithms) rounds of job recruitments.
              </InfoCard>
            </Fade>
          </div>
        </div>

        <div className="w-screen h-screen p-20 bg-transparent flex flex-col items-center justify-center gap-2 snap-start">
          <div className="font-heading font-semibold text-6xl gradient-text">
            Are you ready to take up the challenge?
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8twgZXulYD42nTFqoU_zARjbHxhiDQ5DA36oRzXqBaUamhQ/viewform"
            target="_blank"
            className="btn mt-10 text-3xl px-20 py-2"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
