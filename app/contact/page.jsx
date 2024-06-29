"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 825 288 2786",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "maleksameer715@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Calgary, Alberta, Canada",
  },
];

function Contact() {
  const [state, handleSubmit] = useForm("mgvwewva");
  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-900 p-6 rounded-lg shadow-lg mt-8">
        <h4 className="text-lg font-bold mb-2">Success!</h4>
        <p>
          Your message has been sent successfully. Thank you for reaching out to
          me.
        </p>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-[26px] bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together!</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                id vitae libero necessitatibus deleniti tenetur?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                />
                <ValidationError
                  prefix="Firstname"
                  field="firstname"
                  errors={state.errors}
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                />
                <ValidationError
                  prefix="Lastname"
                  field="lastname"
                  errors={state.errors}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="Phone Number"
                />
                <ValidationError
                  prefix="Phone"
                  field="telephone"
                  errors={state.errors}
                />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent id="fs-frm-selects">
                  <SelectGroup id="services">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Mobile-App Development">
                      Mobile-App Development
                    </SelectItem>
                    <SelectItem value="UI/UX Development">
                      UI/UX Development
                    </SelectItem>
                    <SelectItem value="Database Development">
                      Database Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
