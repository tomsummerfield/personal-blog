import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <main>            
      <section id="hero" className="py-6">
        <div className="container px-[1.7rem]">
          <div id="hero-img" className="flex justify-center pb-[3rem]">
            <Image src="/profile_pic.png" alt="Profile picture" height="200" width="200"/>
          </div>
          <div id="hero-content" className="text-center mb-[2rem]">
            <h1 className="text-[3rem] font-bold text-white leading-tight mb-[2rem]">AI Developer and Researcher</h1>
            <p className="text-[#ffffffb3] text-[18px]">Hi, I'm Thomas Summerfield. A passionate AI-Developer based in Manchester, <br></br>England.</p>      
          </div>
          <div id="hero-socials">
            <ul className="flex justify-center gap-[1.2rem]">
              <Link href="https://discord.gg/2ZQv9JsH" className="cursor-pointer"><Image src="/discord1.png" alt="Discord Logo" width="32" height="32"/></Link>
              <Link href="https://www.linkedin.com/in/thomas-summerfield/" className="cursor-pointer"><Image src="/linkedin.png" alt="Linkedin Logo" width="32" height="32"/></Link>   
              <Link href="/" className="cursor-pointer"><Image src="/twit.png" alt="Linkedin Logo" width="32" height="32"/></Link>              
              <Link href="https://www.youtube.com/channel/UCj6qNloMAXoqjH9inCgKmjg/" className="cursor-pointer"><Image src="/youtube.png" alt="Youtube Logo" width="32" height="32"/></Link>
              <Link href="https://github.com/tomsummerfield/" className="cursor-pointer"><Image src="/github.png" alt="Github Logo" width="32" height="32"/></Link>
            </ul>                                                                                                         
          </div>
          <div id="hero-skills" className="flex flex-col items-center mt-[5rem]">
            <h3 className="text-white text-[18px] underline underline-offset-[1rem] pb-[2rem]">Tech Stack</h3>
            <div className="flex gap-[1rem] items-center">
              <div className="flex justify-center bg-[#fafafa33] p-2 rounded-md">
              <Image src="/python.png" alt="Python logo" height="25" width="55"/> 
              </div>
              <div className="flex justify-center bg-[#fafafa33] p-2 rounded-md">
              <Image src="/pytorch.png" alt="Python logo" height="25" width="55"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blogs">
        <div id="blog-container" className="container px-[1rem] py-[1rem] bg-[#132744]">
          <div id="blog_tile" className="flex flex-col">
          <Image src="/blog1.png" alt="Blog thumbnail" width="390" height="142" className="w-full"/>
          <div id="blog_author_details" className="flex mt-4 items-center gap-2">
            <Image src="/profile_pic.png" alt="Profile picture" width="40" height="40" className="rounded-full"/>
            <h3 className="text-base text-white">Tom Summer.. Mar 20</h3>
          </div>
          <div id="blog_content" className="flex flex-col mt-2">
            <h3 className="text-[1.1rem] text-white font-bold">You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</h3>
            <p className="mt-2 text-[#ffffffb3]">Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts...</p>
            <div id="blog_category_tag" className="mt-3 bg-[#fafafa33] p-2 rounded-full w-[10.6rem] flex justify-center">
              <p className="text-[#ffffffb3]">Artificial Intelligence</p>
            </div>
          </div>
          </div>
          <div id="blog_tile" className="flex flex-col mt-[1.3rem]">
          <Image src="/blog1.png" alt="Blog thumbnail" width="390" height="142" className="w-full"/>
          <div id="blog_author_details" className="flex mt-4 items-center gap-2">
            <Image src="/profile_pic.png" alt="Profile picture" width="40" height="40" className="rounded-full"/>
            <h3 className="text-base text-white">Tom Summer.. Mar 20</h3>
          </div>
          <div id="blog_content" className="flex flex-col mt-2">
            <h3 className="text-[1.1rem] text-white font-bold">You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</h3>
            <p className="mt-2 text-[#ffffffb3]">Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts...</p>
            <div id="blog_category_tag" className="mt-3 bg-[#fafafa33] p-2 rounded-full w-[10.6rem] flex justify-center">
              <p className="text-[#ffffffb3]">Artificial Intelligence</p>
            </div>
          </div>
          </div>
          <div id="blog_tile" className="flex flex-col mt-[1.3rem]">
          <Image src="/blog1.png" alt="Blog thumbnail" width="390" height="142" className="w-full"/>
          <div id="blog_author_details" className="flex mt-4 items-center gap-2">
            <Image src="/profile_pic.png" alt="Profile picture" width="40" height="40" className="rounded-full"/>
            <h3 className="text-base text-white">Tom Summer.. Mar 20</h3>
          </div>
          <div id="blog_content" className="flex flex-col mt-2">
            <h3 className="text-[1.1rem] text-white font-bold">You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</h3>
            <p className="mt-2 text-[#ffffffb3]">Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts...</p>
            <div id="blog_category_tag" className="mt-3 bg-[#fafafa33] p-2 rounded-full w-[10.6rem] flex justify-center">
              <p className="text-[#ffffffb3]">Artificial Intelligence</p>
            </div>
          </div>
          </div>
          <div id="blog_tile" className="flex flex-col mt-[1.3rem]">
          <Image src="/blog1.png" alt="Blog thumbnail" width="390" height="142" className="w-full"/>
          <div id="blog_author_details" className="flex mt-4 items-center gap-2">
            <Image src="/profile_pic.png" alt="Profile picture" width="40" height="40" className="rounded-full"/>
            <h3 className="text-base text-white">Tom Summer.. Mar 20</h3>
          </div>
          <div id="blog_content" className="flex flex-col mt-2">
            <h3 className="text-[1.1rem] text-white font-bold">You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</h3>
            <p className="mt-2 text-[#ffffffb3]">Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts...</p>
            <div id="blog_category_tag" className="mt-3 bg-[#fafafa33] p-2 rounded-full w-[10.6rem] flex justify-center">
              <p className="text-[#ffffffb3]">Artificial Intelligence</p>
            </div>
          </div>
          </div>
          <div id="blog_btn" className="bg-[#fafafa33] w-full mt-8 h-[2.8rem] rounded-md flex justify-center items-center">
          <a className="text-white text-[18px]">Read More Blogs</a>
          </div>
        </div>
      </section>
      <section id="contact">
        <div id="contact_container" className="px-[1rem] py-[1rem] container flex flex-col">
          <h3 className="text-white font-bold text-[24px]">CONTACT</h3>
          <p className="text-white text-[1.1rem] mt-2">Don't be shy! Hit me up!</p>       
          <div id="contact_details_container" className="flex gap-3 mt-[1.8rem]">
            <div id="contact_icon" className="bg-[#fafafa33] p-3 rounded-md">
              <Image src="/location1.png" alt="Location icon" width="30" height="30"/>
            </div>
            <div id="contact_details" className="flex flex-col">
              <h3 className="text-white text-[18px] font-medium">Location</h3>
              <p className="text-[#ffffffb3]">Manchester, England</p>
            </div>
          </div> 
          <div id="contact_details_container" className="flex gap-3 mt-[1rem]">
            <div id="contact_icon" className="bg-[#fafafa33] p-3 rounded-md">
              <Image src="/mail.png" alt="Location icon" width="30" height="30"/>
            </div>
            <div id="contact_details" className="flex flex-col">
              <h3 className="text-white text-[18px] font-medium">Mail</h3>
              <p className="text-[#ffffffb3]">summerfield11@hotmail.co.uk</p>
            </div>
          </div> 
          <div id="contact_details_container" className="flex gap-3 mt-[1rem]">
            <div id="contact_icon" className="bg-[#fafafa33] p-3 rounded-md">
              <Image src="/telephone.png" alt="Location icon" width="30" height="30"/>
            </div>
            <div id="contact_details" className="flex flex-col">
              <h3 className="text-white text-[18px] font-medium">Number</h3>
              <p className="text-[#ffffffb3]">+44 7464736498</p>
            </div>
          </div> 
        </div>
      </section>
    </main>
  );
}














