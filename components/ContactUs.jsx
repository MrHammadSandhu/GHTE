"use client";
import React, { useState, useCallback, memo } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Description, Heading, SubHeading } from "./Headings";
import { ArrowWithCircleIcon, MailIcon, PhoneIcon } from "./Icons";
import Button from "./Button";

// Memoized Sidebar component
const ContactSidebar = memo(({ t }) => (
  <div className="bg-primary text-center rounded-3xl p-0 pb-0">
    <div className="p-8 pb-0 space-y-10">
      {/* Phone Block */}
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-white/10 p-3 rounded-full">
          <PhoneIcon className="h-6 w-6 text-white" />
        </div>
        <Description className="text-white">{t("Support")}</Description>
        <SubHeading>{t("phone")}</SubHeading>
      </div>

      {/* Email Block */}
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-white/10 p-3 rounded-full">
          <MailIcon className="h-6 w-6 text-white" />
        </div>
        <Description className="text-white">{t("write-to-us")}</Description>
        <SubHeading>{t("email")}</SubHeading>
      </div>

      {/* Robot Image */}
      <div className="mx-auto w-32 md:w-48">
        <Image
          src="/main/robotphone.webp"
          alt="Robot Phone"
          width={192}
          height={192}
          className="grayscale hover:grayscale-0 transition"
        />
      </div>
    </div>
  </div>
));
// Form Input component
const FormInput = memo(
  ({ type, name, value, onChange, placeholder, required = true }) => (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
      placeholder={placeholder}
      required={required}
    />
  )
);

// Form component
const ContactForm = memo(
  ({ t, formData, handleInputChange, handleSubmit, loading }) => (
    <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-14">
      <div className="mb-8">
        <Heading className="!text-primary">{t("maintitle")}</Heading>
      </div>

      <form id="inquiry-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t("placeHolder-name")}
          />
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t("placeHolder-email")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t("placeHolder-phone")}
          />
          <FormInput
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={t("placeHolder-subject")}
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
          placeholder={t("placeHolder-message")}
          required
        ></textarea>

        <div className="flex justify-start">
          <Button
            htmlType="submit"
            size="md"
            disabled={loading}
            fullWidth={false}
          >
            {loading ? "Sending..." : t("submit-btn")}
          </Button>
        </div>
      </form>
    </div>
  )
);

const ContactUs = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        await axios.post(
          `https://ghtebackend.vercel.app/api/send-email`,
          formData
        );

        toast.success(t("form.success"), {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        toast.error(t("form.error"), {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } finally {
        setLoading(false);
      }
    },
    [formData, t]
  );

  return (
    <section className="bg-light bg-center bg-cover py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ContactSidebar t={t} />
          <ContactForm
            t={t}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
      <ToastContainer limit={3} />
    </section>
  );
};

// Add display names for better debugging
ContactSidebar.displayName = "ContactSidebar";
FormInput.displayName = "FormInput";
ContactForm.displayName = "ContactForm";

export default memo(ContactUs);
