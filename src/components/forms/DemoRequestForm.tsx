"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateEmail, validateRequired } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface DemoRequestFormProps {
  onSuccess: () => void;
}

export default function DemoRequestForm({ onSuccess }: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = "Name is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!validateRequired(formData.company)) {
      newErrors.company = "Company name is required";
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = "Please tell us about your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      // Simulate API call for demo request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmissionStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      // Notify parent component of success
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <Input
          placeholder="Full Name *"
          aria-label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-red-500" : ""}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <Input
          placeholder="Email Address *"
          aria-label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-red-500" : ""}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Input
          placeholder="Company Name *"
          aria-label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={errors.company ? "border-red-500" : ""}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="text-red-500 text-xs mt-1">
            {errors.company}
          </p>
        )}
      </div>

      <div>
        <Input
          placeholder="Phone Number (Optional)"
          aria-label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Textarea
          placeholder="Tell us about your requirements *"
          aria-label="Requirements"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-red-500" : ""}
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {submissionStatus === "error" && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          An error occurred while submitting the form. Please try again.
        </div>
      )}

      {submissionStatus === "success" && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          Your demo request has been submitted successfully! We'll contact you soon.
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-gradient-gold hover:bg-gold-primary hover:opacity-90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
