import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./Providers";

export const metadata: Metadata =
{
    title: "Test",
    description: ""
};

export default function RootLayout(
    {
        children,
    }: {
        readonly children: React.ReactNode;
    }
): React.ReactNode
{
    return (
        <html lang="en" className="dark">
            <body>
                <Providers>
                    <main className="w-full max-w-md mx-auto p-2">
                        { children }
                    </main>
                </Providers>
            </body>
        </html>
    );
}
