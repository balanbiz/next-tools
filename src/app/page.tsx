import "@/styles/pageHome.scss";
import HomeForm from "@/Components/HomeForm";
import Button, { IButtonProps } from "@/Components/ui/Button";
import GoogleSvg from "@/Components/svg/GoogleSvg";
import { AlertTriangle, Heart, Loader, Loader2 } from "lucide-react";

export default function Home() {
    return (
        <section className="promo">
            <div className="container">
                <div className="explain-list">
                    <h3>This is my template for stashing convenient tools</h3>
                    <ul>
                        <p>To start app in folder</p>
                        <li>Choose folder in command promt and write</li>
                        <li>npx create-next-app .</li>
                        <p>Choose all variants yes with arrows on keyboard excluding Tailwind</p>
                        <li>Would you like to use TypeScript with this project? » No / Yes</li>
                        <li>Would you like to use ESLint with this project? » No / Yes</li>
                        <li>Would you like to use Tailwind CSS with this project? » No / Yes</li>
                        <p>I dont like Tailwind, so I prefer no</p>
                        <li>Would you like to use `src/` directory with this project? » No / Yes</li>
                        <li>Use App Router (recommended)? » No / Yes</li>
                        <li>Would you like to customize the default import alias? » No / Yes</li>
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
                    <p>By the way className inside SVG component</p>
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
                        Create UI UX friendly notifications with <span className="npm">npm i react-hot-toast</span>
                    </h3>
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
