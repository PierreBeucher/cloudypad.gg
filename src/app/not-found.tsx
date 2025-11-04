import { Button } from "@/components/ui/button";

export default function Custom404() {
    return (
        <div className="h-screen overflow-hidden flex ">
            <div className="m-auto" >
                <h1 className="text-5xl">404</h1>
                <p className="text-xl">Page Not Found</p>
                <p className="text-xl">
                    <span className="mr-1">Looking for</span>
                    <span className="font-semibold">
                        <a href="https://docs.cloudypad.gg">Cloudy Pad Documentation</a>
                    </span>? It`&apos;s been moved to
                    <span className="font-bold block">
                        <a href="https://docs.cloudypad.gg">
                            https://docs.cloudypad.gg
                        </a>
                    </span>
                </p>
                <Button variant={"link"} className="text-xl block mt-4 font-bold">
                    <a href="/">
                        Take Me Home
                    </a>
                </Button>
            </div>
        </div>
    );
}