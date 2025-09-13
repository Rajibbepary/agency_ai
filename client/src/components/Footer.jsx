import assets from "../assets/assets";


const Footer = () => {
    return (
        <>
    
            <footer className=" w-full text-sm text-slate-500 bg-[#F9FBFF] pt-10">
                <div className=" w-11/12 mx-auto flex justify-between lg:flex-row flex-col">
                    <div className="flex col-span-1 flex-col space-y-4">
                      <img src={assets.logo} className="w-32" alt="" />
                        <p className="text-sm/7 mt-6">From strategy to execution, we craft digital solutions that move your business forward.</p>
                          <div className="flex flex-row text-sm space-x-6 ">
                            <a className="hover:text-slate-600 transition" href="#">Home</a>
                            <a className="hover:text-slate-600 transition" href="#">Services</a>
                            <a className="hover:text-slate-600 transition" href="#">Our work</a>
                            <a className="hover:text-slate-600 transition" href="#">Testimonial</a>
                        </div>
                    </div>
                    <div className="max-sm:mt-8">
                        <h2 className="font-semibold text-gray-800 mb-5 ">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
                                <input className="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-indigo-600 px-4 py-2 text-white rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:py-4 gap-4 items-center flex flex-col lg:flex-row justify-between w-11/12 mx-auto border-t mt-6 border-slate-200">
                  <p className="text-sm mt-4">Copyright 2025 © agency.ai  -  All Right Reserved.</p>
                  <div className="flex flex-row gap-4 items-center">
                    <img src={assets.facebook_icon} className="w-5" alt="" />
                    <img src={assets.twitter_icon} className="w-5" alt="" />
                    <img src={assets.instagram_icon} className="w-5" alt="" />
                    <img src={assets.linkedin_icon} className="w-5" alt="" />
                  </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;