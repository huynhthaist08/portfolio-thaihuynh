// src/lib/email.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const OWNER_EMAIL = "thachlamhuynhthai2003st@gmail.com";

export const sendContactEmail = async (data) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS is not configured");
    }

    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            user_name: data.name,
            user_email: data.email,
            user_message: data.message,
        },
        PUBLIC_KEY,
    );
};
