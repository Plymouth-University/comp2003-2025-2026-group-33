// app/contact/page.tsx
"use client";

import { Section } from "@/components/layout/Section";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type EnquiryForm = {
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  category: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<EnquiryForm>({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      company_name: "",
      category: "Others",
      message: "",
    },
  });

  const contactUs = async (data: EnquiryForm) => {
    const formData = new FormData();
    for (const key in data) {
      formData.set(key, (data as any)[key]);
    }

    await fetch("https://engame.tech/web_backend/enquiry.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.code !== 200) {
          toast.error(result.message);
          return;
        }
        toast.success(
          "Message sent successfully! Thank you for your interest and we'll get in touch with you shortly!"
        );
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Toaster />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col-reverse md:flex-col items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                Let&apos;s Talk!
              </p>
              <p className="font-lato text-xl">
                At Engame, our clients are our partners! If you have any
                inquiries about the subscription plans, pricing or bespoke
                solutions, please do not hesitate to reach out and our team will
                be happy to help!
              </p>
            </div>
            <div className="flex max-w-md py-10">
              <img
                src="/assets/images/01 Home/EG---Landing-home_feedback(D).png"
                width={800}
                height={800}
                alt="contact"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <form onSubmit={handleSubmit(contactUs)} className="space-y-4">
              <Input
                label="Name *"
                type="text"
                required
                {...register("name", { required: true })}
              />
              <Input
                label="Company Name *"
                type="text"
                required
                {...register("company_name", { required: true })}
              />
              <Input
                label="Email *"
                type="email"
                required
                {...register("email", { required: true })}
              />
              <Input
                label="Phone Number *"
                type="tel"
                required
                {...register("phone_number", { required: true })}
              />
              <Select
                label="Industry *"
                required
                {...register("category", { required: true })}
              >
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="Retail">Retail</option>
                <option value="Fast Moving Consumer Goods">
                  Fast Moving Consumer Goods
                </option>
                <option value="Fashion">Fashion</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Services">Services</option>
                <option value="Others">Others</option>
              </Select>
              <div className="flex flex-col">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Enter Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  className="rounded border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
                  {...register("message", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
