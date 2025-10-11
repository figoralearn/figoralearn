"use client";
import countries from "@/utils/countires";
import { useState, useEffect } from "react";

interface PhoneNumberInputProps {
  setPhoneNumber: (value: string) => void;
  id?: string;
  label?: string;
  placeholder?: string;
}

const countryCodes = countries;

export default function PhoneNumberInput({
  setPhoneNumber,
  id = "phoneNumber",
  label = "Phone Number",
  placeholder = "Your contact number",
}: PhoneNumberInputProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState("91");
  const [Number, setNumber] = useState("");

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length <= 10) {
      setNumber(inputValue);
      setPhoneNumber(`${selectedCountryCode} ${inputValue}`);
    }
  };

  return (
    <div className="para">
      <label htmlFor={id} className="mb-1 block">
        {label} *
      </label>
      <div className="flex gap-1">
        {/* Country Code Select */}

        <div className="relative inline-block w-fit">
          <div className="shadow-accent peer-active:shadow-secondary peer-has-focus:shadow-secondary relative flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 py-2 text-center shadow">
            {selectedCountryCode}
          </div>
          <select
            value={selectedCountryCode}
            onChange={handleCountryCodeChange}
            className="shadow-accent focus:ring-secondary/25 peer focus:shadow-secondary absolute inset-0 top-0 left-0 appearance-none rounded-2xl border border-gray-200 bg-white p-2 text-center opacity-0 shadow transition-[border-radius] duration-200 ease-out focus:ring-1 focus:outline-0"
          >
            {countryCodes.map((country) => (
              <option key={country.iso2} value={country.dialCode}>
                (+{country.dialCode}) {country.country}
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number Input */}
        <input
          id={id}
          type="tel"
          value={Number}
          onChange={handlePhoneNumberChange}
          placeholder={placeholder}
          maxLength={10}
          className="shadow-accent focus:ring-secondary/25 focus:shadow-secondary flex-1 rounded-2xl border border-gray-200 bg-white p-2 shadow focus:ring-1 focus:outline-0"
        />
      </div>
    </div>
  );
}
