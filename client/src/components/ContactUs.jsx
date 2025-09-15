
import assets from "../assets/assets";
import Titel from "./Titel";
import './contact.css';
import { MdOutlineMessage } from "react-icons/md";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
   // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4354c38-c9ef-47cc-a19e-83009964cbb8");

    try{
 const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Thank you for your submission");
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch(error){
    toast.error(error.message)
    }
   
  };
    return (
        <motion.div
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true}}
        transition={{ staggerChildren: 0.2}}
        id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
            <Titel 
                title={'Reach out to us'} 
                desc={'From strategy to execution, we craft digital solutions that move your business forward'}
            />

            <motion.form 
            initial={{ opacity:0, y: 30}}
            whileInView={{ opacity:1, y:0}}
            transition={{ duration: 0.5, delay: 0.4}}
            viewport={{ once: true}}
            onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:gap-5">
                <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-5">
                    {/* Name Input */}
                    <div className="input-field">
                        <input 
                            name="name"
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
                            name="email"
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
                        name="message" 
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
                 <button type="submit" class="btn-3">Submit</button>
            </motion.form>
        </motion.div>
    );
};

export default ContactUs;
