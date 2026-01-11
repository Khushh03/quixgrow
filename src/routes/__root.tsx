import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools"

import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"
import Navbar from "./-components/navbar/navbar"
import Footer from "./-components/footer/footer"

interface MyRouterContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => {
        const APP_TITLE = "QuixGrow – Practical Accounting & Taxation Training"
        const APP_DESCRIPTION =
            "Job-oriented Tally, GST & Income Tax courses with real office training. Affordable fees. Lifetime support."
        const APP_URL = "https://quixgrow.com"
        const APP_IMAGE = `${APP_URL}/og-image.jpg`
        return {
            meta: [
                { charSet: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { title: APP_TITLE },
                { name: "description", content: APP_DESCRIPTION },
                {
                    name: "keywords",
                    content:
                        "accounting training, GST course, Tally ERP, income tax filing, practical accounting, job-ready accountant, QuixGrow, online accounting course India",
                },
                // Open Graph
                { property: "og:type", content: "website" },
                { property: "og:title", content: APP_TITLE },
                { property: "og:description", content: APP_DESCRIPTION },
                { property: "og:image", content: APP_IMAGE },
                { property: "og:url", content: APP_URL },
                { property: "og:site_name", content: "QuixGrow" },
                // Twitter
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: APP_TITLE },
                { name: "twitter:description", content: APP_DESCRIPTION },
                { name: "twitter:image", content: APP_IMAGE },
                { name: "twitter:url", content: APP_URL },
            ],
            links: [
                { rel: "stylesheet", href: appCss },
                { rel: "canonical", href: APP_URL },
            ],
        }
    },

    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body
            // className="dark"
            >
                <Navbar />
                {children}
                <Footer />
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                        TanStackQueryDevtools,
                    ]}
                />
                <Scripts />
            </body>
        </html>
    )
}
