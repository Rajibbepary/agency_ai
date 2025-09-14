import assets from "../assets/assets";
import Titel from "./Titel";
import './contact.css';
import { MdOutlineMessage } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
            <Titel 
                title={'Reach out to us'} 
                desc={'From strategy to execution, we craft digital solutions that move your business forward'}
            />

            <form className="grid grid-cols-1 gap-3 sm:gap-5">
                <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-5">
                    {/* Name Input */}
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="username"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label 
                            htmlFor="username" 
                            className="flex gap-2 top-0"
                        >
                            <img src={assets.person_icon} alt="" className="w-6" />
                            Enter your name
                        </label>
                    </div>

                    {/* Email Input */}
                    <div className="input-field">
                        <input 
                            type="email" 
                            id="useremail"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label 
                            htmlFor="useremail" 
                            className="flex items-center gap-2 top-0"
                        >
                            <img src={assets.email_icon} className="w-6" alt="" />
                            Enter your email
                        </label>
                    </div>
                </div>

                {/* Message Textarea */}
                <div className="input-field">
                    <textarea  
                        id="usermessage"
                        rows={4} 
                        className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" 
                        required 
                        autoComplete="off" 
                    />
                    <label 
                        htmlFor="usermessage" 
                        className="flex gap-2 items-center top-0"
                    >
                        <MdOutlineMessage className="text-2xl" /> 
                        Enter your message
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
