import "@/styles/pageHome.scss";
import HomeForm from "@/Components/HomeForm";
import Button, { IButtonProps } from "@/Components/ui/Button";
import GoogleSvg from "@/Components/svg/GoogleSvg";
import { AlertTriangle, Heart, Loader, Loader2 } from "lucide-react";
import { format, eachWeekendOfInterval } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function Home() {
    return (
        <section className="promo">
            <div className="container">
                <div className="explain-list">
                    <h3>This is my template for stashing convenient tools</h3>
                    <ul>
                        <p>To start app in folder</p>
                        <li>Choose folder in command promt and write</li>
                        <li>
                            <span className="npm">npx create-next-app .</span>
                        </li>
                        <p>Choose all variants Yes with arrows on keyboard excluding Tailwind</p>
                        <li>
                            Would you like to use TypeScript with this project?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <li>
                            Would you like to use ESLint with this project?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <li>
                            Would you like to use Tailwind CSS with this project?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <p>I dont like Tailwind, so I prefer No</p>
                        <li>
                            Would you like to use `src/` directory with this project?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <li>
                            Use App Router (recommended)?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <li>
                            Would you like to customize the default import alias?{" "}
                            <span className="yellow">
                                » No / <span className="underline">Yes</span>
                            </span>
                        </li>
                        <li>Default path yes</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="explain-list">
                    <h3>
                        Form example using <span className="npm">npm i @hookform/resolvers zod react-hook-form</span>
                    </h3>
                    <HomeForm />
                </div>
                <div className="divider"></div>
                <div className="explain-list buttons">
                    <h3>
                        Example of UI component flexible variants with <span className="npm">npm i class-variance-authority</span>
                    </h3>
                    <Button>Button 1</Button>
                    <Button border={"red"}>Button 2</Button>
                    <Button variant={"transparent"} whSize={"large"} border={"green"} textSize={"large"}>
                        Button 3
                    </Button>
                    <Button variant={"black"} whSize={"small"} border={"black"} textSize={"small"}>
                        Button 4
                    </Button>
                    <Button variant={"black"} whSize={"medium"} border={"red"} textSize={"medium"}>
                        Button 5
                    </Button>
                    <p>
                        They are all one Component! And one more button below with a lot of props, but cleaner way, watch this in code on
                        main page
                    </p>
                    <Button {...button5Props} className="last-button" /* this props under the page function */>
                        <Loader size={25} /> <span>anything</span> <Loader size={25} />
                    </Button>
                    <p>You can also insert anything becouse we have prop children</p>
                </div>
                <div className="divider"></div>
                <div className="explain-list svgs">
                    <h3>Some handy ways to use SVG icons</h3>
                    <p>If you already have icons, the prettiest way to use them in JSX is by creating a component!</p>
                    <p>By the way className is inside SVG component</p>
                    <GoogleSvg />
                    <p>
                        For common solutions we can use <span className="npm">npm i lucide-react</span> library with 1000+ optimized icons
                    </p>
                    <p>
                        Go to{" "}
                        <a href="https://lucide.dev/icons/" target="_blank">
                            All Lucide icons
                        </a>
                    </p>
                    <p>Then choose the icon and press copy SVG, dont forget to import copied svg</p>
                    <AlertTriangle color="red" />
                    <Loader color="blue" strokeWidth={3} className="animate-spin" />
                    <Loader2 color="green" className="animate-spin" />
                    <Heart color="pink" fill="red" />
                    <p>You can pass them usual SVG props like: fill, strokeWidth or write styles in css like usual</p>
                </div>
                <div className="divider"></div>
                <div className="explain-list ">
                    <h3>
                        What time is it now? with <span className="npm">npm i date-fns</span>
                    </h3>
                    <p>This package has a lot of different functions to proper work with Dates</p>
                    <ul>
                        <li>
                            --- new Date().toString()
                            <br />
                            {new Date().toString()}
                        </li>
                        <div className="divider-small"></div>
                        <li>
                            --- format(new Date(), 'dd/MM/yyyy')
                            <br />
                            {format(new Date(), "dd/MM/yyyy")}
                        </li>
                        <div className="divider-small"></div>
                        <li>
                            --- format(new Date(2014, 1, 24), 'MM/dd/yyyy')
                            <br />
                            {format(new Date(2014, 1, 24), "MM/dd/yyyy")}
                        </li>
                        <div className="divider-small"></div>
                        <li>
                            --- eachWeekendOfInterval(interval)
                            <br />
                            {eachWeekendOfInterval({ start: new Date(2023, 6, 23), end: new Date(2023, 7, 1) }).map(date => {
                                return (
                                    <>
                                        {format(date, "dd/MM/yyyy")}
                                        {", "}
                                    </>
                                );
                            })}
                        </li>
                        <div className="divider-small"></div>
                        <p>
                            <span className="npm">npm i date-fns-tz</span> for timezones
                        </p>
                        <li>
                            --- utcToZonedTime(date, timeZone)
                            <br />
                            Berlin - {format(utcToZonedTime(new Date(), "Europe/Berlin"), "H:m")}, NewYork -{" "}
                            {format(utcToZonedTime(new Date(), "America/New_York"), "H:m")}, Johannesburg -{" "}
                            {format(utcToZonedTime(new Date(), "Africa/Johannesburg"), "H:m")}
                        </li>
                        <div className="divider-small"></div>
                    </ul>
                    <p>
                        And a lot of more functions on{" "}
                        <a href="https://date-fns.org/docs/Getting-Started" target="_blank">
                            date-fns documentation
                        </a>{" "}
                        page
                    </p>
                </div>
                <div className="divider"></div>
                <div className="explain-list">
                    <h3>More unsolicited advices while using Next 13+</h3>
                    <ul>
                        <li>
                            Dont make layout or page component 'use client' if possible. Better create client components and put them inside
                        </li>
                        <li>Dont forget new path to NextAuth library</li>
                        <li>
                            A lot of functions have two variants: for server and analogue for client. Like getServerSession and useSession
                        </li>
                        <li>Be careful using curly brackets in imports</li>
                    </ul>
                </div>
                <div className="divider"></div>
            </div>
        </section>
    );
}

const button5Props: IButtonProps = {
    variant: "black",
    whSize: "large",
    border: "red",
    textSize: "medium",
};
