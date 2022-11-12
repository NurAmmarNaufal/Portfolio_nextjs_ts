import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typing";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  contact: PageInfo[]
};

function ContactMe({ contact }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nancorp@aha.com?subject=${formData.subject}&body=hii, my name is ${formData.name}. ${formData.message}(${formData.email}) `
  };
  return (
    <div className="h-screen flex flex-col relative text-center justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 pl-5 uppercase text-gray-500 tracking-[20px] font-semibold">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 mt-5 md:mt-10">
        <h4 className="text-xl font-semibold text-center px-4">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-3 w-3 animate-pulse" />
            <p className="text-gray-500 text-sm">{contact[0].phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-3 w-3 animate-pulse" />
            <p className="text-gray-500 text-sm">{contact[0].email}</p>
          </div>
          <div className="flex items-center space-x-2 justify-center pb-2">
            <MapPinIcon className="text-[#F7AB0A] h-3 w-3 animate-pulse" />
            <p className="text-gray-500 text-sm">{contact[0].address}</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto w-fit"
          >
            <div className="flex space-y-2 flex-col md:space-x-2 md:flex-row md:space-y-0">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput md:py-3"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button className="bg-[#F7AB0A] py-3  rounded-md text-black font-bold text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
