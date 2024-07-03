import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const PHONE_NUMBER = "(910) 477-1926";
  const EMAIL_ADDRESS = "office@flyhightide.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("firstName");
    if (name) {
      setUserName(name.toString());
    }

    const url = "ghllink";

    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData as any),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error(
          "Network error occurred while submitting the form:",
          error,
        );
      });
  };

  return (
    <div className="relative flex items-center justify-center">
      {!formSubmitted && (
        <div className="bg-white p-12 max-w-xl m-4 text-black rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="mb-1 text-gray-800 font-semibold"
              >
                First Name
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="mb-1 text-gray-800 font-semibold"
              >
                Last Name
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 text-gray-800 font-semibold"
              >
                Email Address
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>
            <div className="hidden">
              <label>
                Don't fill this out if you're human:
                <input name="confirm-email" />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="mb-1 text-gray-800 font-semibold"
              >
                Phone Number
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  min={10}
                  max={10}
                  autoComplete="tel"
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="certifications"
                className="mb-1 text-gray-800 font-semibold"
              >
                Ratings / Certifications
                <input
                  type="tel"
                  id="certifications"
                  name="certifications"
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>

            <fieldset>
              <legend className="font-medium leading-6 text-dark-blue">
                High Tide Location
              </legend>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-x-3">
                  <input
                    id="southport"
                    name="location"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-medium-blue focus:ring-medium-blue"
                    value="Southport, NC"
                  />
                  <label
                    htmlFor="southport"
                    className="block leading-6 text-gray-600"
                  >
                    Southport, NC
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="st-simons"
                    name="location"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-medium-blue focus:ring-medium-blue"
                    value="St Simons Island, GA"
                  />
                  <label
                    htmlFor="st-simons"
                    className="block leading-6 text-gray-600"
                  >
                    St Simons Island, GA
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="mb-4">
              <label
                htmlFor="experience"
                className="mb-1 text-gray-800 font-semibold"
              >
                Former Experience
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                  required
                />
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="mx-2"
                id="agreed-privacy-policy"
                name="agreed-privacy-policy"
                required
              />
              <label htmlFor="agreed-privacy-policy">
                I understand that this is a form to submit interest and{" "}
                <span className="underline">not</span> a formal application. We
                will reach out to you when we have openings.
              </label>
            </div>
            <button className="btn-primary mt-6 w-full" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}

      {formSubmitted && (
        <div className="relative bg-white p-12 max-w-xl m-4 text-black rounded-md h-screen-4/5 overflow-y-auto">
          <div className="text-center">
            <h1 className="font-bold text-4xl py-10">
              Thank you for contacting us, {userName}.
            </h1>

            <div className="flex flex-row justify-center">
              <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                <div className="text-green-700 text-5xl">✓</div>
              </div>
            </div>

            <p className="px-5">
              Thank you for contacting High Tide Aviation. We are looking
              forward to working with you soon. We will review your message and
              get back with you within 1-5 business days. <br />
              <br />
              You can also give us a call at{" "}
              <a
                className="text-primary hover:underline"
                href={`tel:${PHONE_NUMBER}`}
              >
                {PHONE_NUMBER}
              </a>{" "}
              or
              <br />
              email us at{" "}
              <a
                className="text-primary hover:underline"
                href={`mailto:${EMAIL_ADDRESS}`}
              >
                {EMAIL_ADDRESS}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
