import "@/styles/pageHome.scss";
import HomeForm from "@/Components/HomeForm";
import { clsx } from "clsx";
import Button, { IButtonProps } from "@/Components/ui/Button";
import GoogleSvg from "@/Components/svg/GoogleSvg";
import { AlertTriangle, Heart, Loader, Loader2 } from "lucide-react";
import { format, eachWeekendOfInterval } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import CopyClipboard from "@/Components/ux/CopyClipboard";
import SkeletonExample from "@/Components/SkeletonExample";
import HomeFormTanStack from "@/Components/HomeFormTanStack";
import PaginationExample from "@/Components/PaginationExample";
import { postResourse } from "@/lib/fetch";

export default async function Home(
    // For each page we can automatiacly, by default pass searchParams query
    { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }
) {
    const isLoading = false;

    return (
        <section className="promo">
            <div className="container">
                <div className="explain-list">
                    <h3>This is my template for stashing convenient tools</h3>
                    <ul>
                        <p>To start app in folder</p>
                        <li>Choose folder in command promt and write</li>
                        <li>
                            <CopyClipboard text="npx create-next-app ." />
                            {/* Some interesting logic with the component above. 
                            As we dont want to make page 'use client' we put onClick inside render of child component. */}
                            <br />
                            You can copy turquoise commands by clicking them.
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
                                » <span className="underline">No</span> / Yes
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
                    <p>More default settings</p>
                    <ul>
                        <li>
                            <CopyClipboard text="npm i normalize.css" /> and put <CopyClipboard text='@import "normalize.css";' /> in global
                            css file to drop different browsers default styles
                        </li>
                        <li>
                            <CopyClipboard text="npm i sharp" /> if we are using built in Image component
                        </li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="explain-list forms">
                    <h3>
                        Form example using <CopyClipboard text="npm i @hookform/resolvers zod react-hook-form" />
                    </h3>
                    <div className="forms-wrap">
                        <HomeForm />
                        <HomeFormTanStack />
                    </div>
                    <p>More over Zod is the easiest way to validate incoming from user data in api</p>
                </div>
                <div className="divider"></div>
                <div className="explain-list buttons">
                    <h3>
                        Example of UI component flexible variants with <CopyClipboard text="npm i class-variance-authority" />
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
                    <Button {...button5Props} /* this props under the page function */ className="last-button">
                        <Loader size={25} /> <span>anything</span> <Loader size={25} />
                    </Button>
                    <p>You can also insert anything becouse we have prop children</p>
                    <p>
                        But if we dont need to use component or dont need to put typescript inside for intellisence, we can use{" "}
                        <CopyClipboard text="npm i clsx" />
                    </p>
                    <p>
                        A tiny utility for constructing className strings conditionally. Here is a link{" "}
                        <a href="https://www.npmjs.com/package/clsx">to docs</a>
                        <Button
                            className={clsx("button_default", {
                                "button__variant-white": isLoading,
                                "button__variant-transparent": !isLoading,
                            })}
                        />
                    </p>
                </div>
                <div className="divider"></div>
                <div className="explain-list svgs">
                    <h3>Some handy ways to use SVG icons</h3>
                    <p>If you already have icons, the prettiest way to use them in JSX is by creating a component!</p>
                    <p>By the way className is inside SVG component</p>
                    <GoogleSvg />
                    <p>
                        For common solutions we can use <CopyClipboard text="npm i lucide-react" /> library with 1000+ optimized icons
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
                        What time is it now? with <CopyClipboard text="npm i date-fns" />
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
                            {eachWeekendOfInterval({ start: new Date(2023, 6, 23), end: new Date(2023, 7, 1) }).map((date, index) => {
                                return (
                                    <span key={index}>
                                        {format(date, "dd/MM/yyyy")}
                                        {", "}
                                    </span>
                                );
                            })}
                        </li>
                        <div className="divider-small"></div>
                        <p>
                            <CopyClipboard text="npm i date-fns-tz" /> for timezones
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
                    <h3>
                        The best way to improve UX is <CopyClipboard text="npm i react-loading-skeleton" />
                    </h3>
                    <p>
                        There is a link to more instructions:{" "}
                        <a href="https://www.npmjs.com/package/react-loading-skeleton" target="_blank">
                            {" "}
                            npm site
                        </a>
                    </p>
                    <p>We can use this plugin in loading.tsx page which is like layout.tsx or put this in components with some jsx.</p>
                    <div className="sceleton">
                        <div className="sceleton-tab">
                            <p>Not ready</p>
                            <SkeletonExample />
                        </div>
                        <div className="sceleton-tab">
                            <p>ready</p>
                            <div className="sceleton-box">anything inside</div>
                        </div>
                    </div>
                    <p>
                        You can test the view of working skeletons in your component by command:{" "}
                        <CopyClipboard text="await new Promise(resolve => setTimeout(resolve, 5000000))" />
                    </p>
                </div>
                <div className="divider"></div>
                <div className="explain-list">
                    <h3>How to handle the most functional type of pagination</h3>
                    <PaginationExample searchParams={searchParams} />
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
                        <li>
                            If you create common functions which you are going to use throw entire app, divide them on client and server .ts
                        </li>
                        <li>
                            If you need to use server parent and sever child inside parent with long time fetch, wrap child in Suspense
                            built in component
                        </li>
                        <li>
                            Sometimes we need to start "npm run few scripts" concurrently, so <CopyClipboard text="npm i concurrently" />
                        </li>
                        <li>
                            If we are using css modules, we can join it with typescript intellisence with{" "}
                            <CopyClipboard text="npm I –D typescript-plugin-css-modules" />
                            {/* https://www.youtube.com/watch?v=91ugFG2noZ4&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9 */}
                        </li>
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
