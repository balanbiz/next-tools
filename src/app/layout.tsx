import "@/styles/layoutHome.scss";
import { Inter } from "next/font/google";
import HomeProvider from "@/Components/HomeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <HomeProvider>{children}</HomeProvider>
            </body>
        </html>
    );
}
