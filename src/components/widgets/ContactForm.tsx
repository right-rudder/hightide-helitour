import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const PHONE_NUMBER = "(910) 477-1926";
  const EMAIL_ADDRESS = "office@flyhightide.com.";

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

    const url =
      "https://services.leadconnectorhq.com/hooks/sR3pjXdLKAppPONWswW9/webhook-trigger/bec1377d-13f6-4888-91e7-4d350695a5b4";

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
          error
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
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={4}
                className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                required
              />
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
                By submitting this contact form, you acknowledge and agree to
                the collection of your personal information.
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
