"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export function Providers(
    {
        children
    }: {
        readonly children: React.ReactNode;
    }
): React.ReactNode
{
    const router = useRouter();

    return (
        <NextUIProvider navigate={ router.push }>
            { children }
        </NextUIProvider>
    );
}
