import Image from "next/image"

export default function page() {
    return (
        <article>
            <div id="blog" className="container px-[1rem] py-[1.4rem]">
                <h1 className="text-white text-[1.5rem] font-bold max-w-[295px]">Leadership is a Research Project</h1>
                <div id="blog_author_content" className="flex mt-4 gap-[0.5rem] items-center">
                    <Image src="/profile_pic.png" alt="Profile picture" width="40" height="40" className="rounded-full"/>
                    <div className="flex flex-col">
                        <h3 className="text-[#ffffffb3]">Thomas Summerfield</h3>
                        <p className="text-[#ffffffb3]">8 Min Read . August 23</p>
                    </div>
                </div>
                <div id="blog_content" className="mt-10">
                    <Image src="/blog1.png" alt="Blog image" width="344" height="300" className="w-full h-[12.5rem]"/>
                    <p className="text-white mt-4">Update: As promised, here is the (abridged) course syllabus for those who are interested!</p>
                    <p className="text-white mt-4">This semester they’re letting me teach a course on leadership at UC Berkeley’s School of Information. I know, right? I’m pretty dern excited to be doing it, but I can tell you, putting this course together has been a daunting task.</p>
                    <p className="text-white mt-4">How does one distill so much available leadership material into something useful? Material which is broadly applicable across disciplines and industries. Which captures a practical POV — mostly mine, but also borrowed from mentors, teachers, and colleagues — without being overly prescriptive. And which gives students a (hopefully) strong foundation for successful leadership and growth.</p>                
                    <p className="text-white mt-4">Ugh. Unreasonably high bar. Trip. Fall. Get up again.</p>                
                </div>
            </div>
        </article>
    )
}