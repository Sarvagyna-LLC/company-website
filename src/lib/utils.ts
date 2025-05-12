import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to handle smooth scrolling to sections
export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Form validation utils
export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};

export const validateFileSize = (file: File, maxSizeMB: number): boolean => {
  const fileSizeInMB = file.size / (1024 * 1024);
  return fileSizeInMB <= maxSizeMB;
};

// SEO helper
export const createMetadata = ({
  title = "Sarvagyna | AI Agents, Tools, and Research",
  description = "Sarvagyna is a tech startup specializing in AI agents, tools, and research for enterprise solutions.",
  keywords = "AI agents, AI tools, AI research, enterprise AI, Sarvagyna",
  ogImage = "/images/og-image.jpg",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}) => {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

// Animation helper
export const getStaggeredDelay = (index: number, baseDelay: number = 0.1) => {
  return `${baseDelay * index}s`;
};
