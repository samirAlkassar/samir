import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Work = () => {
    return (
        <section>
            <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
                <h2 className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}>Experience</h2>
                <div className="mt-6 flex">
                    <div className="flex flex-col items-center pr-4 md:px-6">
                        <span className="w-2 h-2 rounded-full bg-primary/60" />
                        <span className="w-0.5 flex-1 bg-primary/60" />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl italic">Zydx</h4>
                            <p className="text-sm font-medium">Aug 2025</p>
                        </div>
                        <p className="text-primary mt-2 font-medium">Frontend Developer</p>
                        <p className="max-w-2xl mt-1">Building modern web applications with a focus on performance and user experience. Collaborating with cross-functional teams to deliver scalable solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;