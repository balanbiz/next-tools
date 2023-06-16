import "@/styles/pageHome.scss";
import HomeForm from "@/Components/HomeForm";
import Button from "@/Components/ui/Button";

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
                    <h3>Form example using hookform/resolvers zod react-hook-form</h3>
                    <HomeForm />
                </div>
                <div className="divider"></div>
                <div className="explain-list">
                    <h3>Example of UI component flexible variants with class-variance-authority</h3>
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
                </div>
                <p>They are all one Component!</p>
                <div className="divider"></div>
            </div>
        </section>
    );
}
