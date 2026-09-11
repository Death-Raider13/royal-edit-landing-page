export type ContactLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export const whatsappNumber = "2348125753825";

export function buildWhatsAppHref(lead: ContactLead) {
  const summary = [
    "Hello Royal Edit Media House, I need help with a creative brand project.",
    `My name is ${lead.name || "there"}.`,
    `Email: ${lead.email || "Not provided"}.`,
    `Phone: ${lead.phone || "Not provided"}.`,
    `Company / Brand: ${lead.company || "Not provided"}.`,
    `Service: ${lead.service || "Not provided"}.`,
    `Budget: ${lead.budget || "Not provided"}.`,
    `Project brief: ${lead.message || "Not provided"}.`,
  ];

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary.join("\n"))}`;
}
