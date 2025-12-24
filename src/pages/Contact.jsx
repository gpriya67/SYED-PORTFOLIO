import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qheeaof",
        "template_qjd8gtl",
        formRef.current,
        "o_PaAzMlIAa-2D7Ir"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/circle.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* GLOW BLURS */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-400/5 blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/5 blur-[160px]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 w-[95%] max-w-[1200px] rounded-[32px]">

        {/* 🌸 MALA BORDER IMAGE */}
      {/*   <img
          src="/assets/mala-border.png"
          alt="mala border"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        /> */}

        {/* GLASS CONTAINER */}
        <div
          className="relative backdrop-blur-xl bg-white/5
          border border-emerald-400/40 rounded-[32px]
          px-6 md:px-16 py-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT FORM */}
            <div>
              <h2 className="text-[20px] md:text-[32px] text-nowrap font-hagrid text-primary mb-2">
                Hire me! for your Project
              </h2>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="mt-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Your Good Name" name="first_name" />
                  <Input label="Your Last Name" name="last_name" />
                  <Input
                    label="Your Phone Number"
                    name="phone"
                    type="tel"
                  />
                  <Input
                    label="Your Email ID"
                    name="email"
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-white font-aileron font-normal mb-1 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full rounded-md px-4 py-3
                      border border-emerald-400/40
                      bg-black/60 text-white outline-none
                      focus:ring-2 focus:ring-emerald-400/60 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3 rounded-full
                    bg-emerald-400 text-black font-semibold
                    hover:scale-105 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="flex justify-center">
              <img
                src="/assets/computer.svg"
                alt="illustration"
                className="w-[260px] md:w-[340px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* INPUT COMPONENT */
const Input = ({ label, name, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-white text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      required
      className="rounded-md px-4 py-2
        bg-black/60 text-white outline-none
        border border-emerald-400/40
        focus:ring-2 focus:ring-emerald-400/60 transition font-aileron font-normal"
    />
  </div>
);

export default Contact;
