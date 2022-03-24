import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contactData = [
  {
    title: "Email",
    body: "sameh.dheir1@gmail.com",
    link: "mailto:sameh.dheir1@gmail.com",
    icon: <MdOutlineEmail />,
  },

  {
    title: "Messenger",
    body: "Sameh Dheir",
    link: "https://m.me/100008672372081",
    icon: <RiMessengerLine />,
  },

  {
    title: "Whatsapp",
    body: "sameh.dheir1@gmail.com",
    link: "https://api.whatsapp.com/send?phone=+970595541852",
    icon: <BsWhatsapp />,
  },
];

export default contactData;
