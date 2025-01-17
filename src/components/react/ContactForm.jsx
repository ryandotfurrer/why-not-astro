import { useState, useEffect } from "react";

const Toast = ({ message, type }) => (
  <div
    className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white transition-opacity ${
      type === "success" ? "bg-success" : "bg-destructive"
    }`}>
    {message}
  </div>
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeout;
    if (formStatus.submitted && formStatus.success) {
      timeout = setTimeout(() => {
        setFormStatus({ submitted: false, success: false });
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [formStatus]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically send the form data to your backend API
      // For example using fetch:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success
        setFormStatus({ submitted: true, success: true });
        showToast("Message sent successfully!", "success");
      } else {
        // Handle error
        setFormStatus({ submitted: true, success: false });
        showToast("Failed to send message", "error");
        throw new Error('Failed to send message');
      }
      */

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Temporary placeholder until backend is implemented
      console.log("Form submitted:", formData);
      setFormStatus({ submitted: true, success: true });
      showToast("Message sent successfully!", "success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({ submitted: true, success: false });
      showToast("Failed to send message", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (formStatus.submitted) {
    return (
      <div className="text-center space-y-4 py-8">
        {formStatus.success ? (
          <>
            <h2 className="text-2xl font-semibold text-foreground">
              Thank you for your message!
            </h2>
            <p className="text-muted-foreground">
              We'll get back to you within 24-48 hours.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-foreground">
              Something went wrong
            </h2>
            <p className="text-muted-foreground">
              Please try again and ensure you've entered a valid email address.
            </p>
            <button
              onClick={() =>
                setFormStatus({ submitted: false, success: false })
              }
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors mt-4">
              Try Again
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-8">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
          {isLoading ? (
            <>
              <LoadingSpinner />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
        />
      )}
    </>
  );
};

export default ContactForm;
