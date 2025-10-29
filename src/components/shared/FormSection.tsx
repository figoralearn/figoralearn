"use client";
import { usePathname } from "next/navigation";
import SpanPrimary from "../ui/SpanPrimary";
import { useState, ChangeEvent, FormEvent, ReactNode, useEffect } from "react";
import SpanUnderline from "../ui/SpanUnderline";
import PhoneNumberInput from "../ui/PhoneNumberInput";
import AnimatedSection from "../ui/AnimatedSection";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  ...props
}: InputFieldProps) => (
  <div className="para">
    <label htmlFor={id} className="mb-1 block">
      {label} *
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="shadow-accent focus:ring-secondary/25 focus:shadow-secondary w-full rounded-2xl border border-gray-200 bg-white p-2 shadow focus:ring-1 focus:outline-0"
      {...props}
    />
  </div>
);

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: string[];
}

const SelectField = ({ id, label, options, ...props }: SelectFieldProps) => (
  <div className="para">
    <label htmlFor={id} className="mb-1 block">
      {label} *
    </label>
    <select
      id={id}
      className="shadow-accent focus:ring-secondary/25 focus:shadow-secondary h-[unset] min-h-fit w-full appearance-none rounded-2xl border border-gray-200 bg-white p-2 shadow transition-[border-radius] duration-200 ease-out focus:ring-1 focus:outline-0 active:rounded-b-none!"
      {...props}
    >
      <option>Please Select</option>
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default function FormSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    email: "",
    city: "",
    childAge: "",
    preferredProgram: "",
    route: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [formHeading, setFormHeading] = useState<ReactNode>(<></>);
  const currPath = usePathname();

  useEffect(() => {
    // Set the route in form data
    setFormData((prevData) => ({
      ...prevData,
      route: currPath,
    }));

    switch (currPath) {
      // case "/compete":
      //   setFormHeading(
      //     <>
      //       Register for{" "}
      //       <SpanPrimary>
      //         <SpanUnderline color="accent">WYEL</SpanUnderline>
      //       </SpanPrimary>
      //     </>,
      //   );
      //   break;
      case "/path2":
        setFormHeading("Heading for Path 2");
        break;
      case "/path3":
        setFormHeading("Heading for Path 3");
        break;
      default:
        setFormHeading(
          <>
            Book A Free <SpanPrimary>Demo</SpanPrimary>
          </>,
        );
    }
  }, [currPath]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePhoneNumberChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Form submitted successfully!",
        });
        // Reset form on success
        setFormData({
          parentName: "",
          phoneNumber: "",
          email: "",
          city: "",
          childAge: "",
          preferredProgram: "",
          route: currPath, // Keep the current route
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="demo"
      className="contain mt-section flex flex-col items-center md:scroll-mt-36"
    >
      <h2 className="mt-0">{formHeading}</h2>
      <form
        className="my-sec-block flex w-full flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="grid w-full grid-cols-1 gap-4 md:w-4xl md:grid-cols-2">
          <InputField
            id="parentName"
            label="Parent's Name"
            placeholder="Your name"
            onChange={handleChange}
          />
          <PhoneNumberInput
            setPhoneNumber={(value) =>
              setFormData((prev) => ({ ...prev, phoneNumber: value }))
            }
            id="phoneNumber"
            label="Phone Number"
            placeholder="Your contact number"
          />
          <InputField
            id="email"
            label="E-Mail"
            type="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <InputField
            id="city"
            placeholder="City"
            label="City"
            onChange={handleChange}
          />
          <SelectField
            id="childAge"
            label="Child's Age"
            options={Array.from({ length: 14 }, (_, i) => (i + 5).toString())} // Ages 5 to 18
            onChange={handleChange}
          />
          <SelectField
            id="preferredProgram"
            label="Preferred Program"
            options={["Entrepreneurs", "Future leaders", "Any"]}
            onChange={handleChange}
          />
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`mt-4 rounded-lg p-3 text-center ${
              submitStatus.type === "success"
                ? "border border-green-200 bg-green-100 text-green-800"
                : "border border-red-200 bg-red-100 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`button-secondary mt-sec-block2 para w-full max-w-sm rounded-full p-3 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </AnimatedSection>
  );
}
