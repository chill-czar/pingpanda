import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { Heading } from "./components/heading"
import { Check } from "lucide-react"
import { ShinyButton } from "./components/shiny-button"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center ">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insignts,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p
              className="text-base/7 text-gray-600
             max-w-prose text-center text-pretty"
            >
              PingPanda is the Easiest Way to Monitor Your SaaS. Get instant
              notification for{" "}
              <span className="font-semibold text-gray-700">
                sales, new sers , or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>
            <ul
              className="space-y-2 text-base/7 text-gray-600 text-left
             flex flex-col sm:items-start"
            >
              {[
                "Real-Time Discord alerts for critical events ",
                "Buy once , user Forever",
                "Trace sales, new users, or any other events",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700 " />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
