import { businessInfo } from '@/data/business';

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

export const generateWhatsAppLink = (message: string): string => {
  const phone = formatPhoneNumber(businessInfo.whatsapp);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const generateEmailLink = (to: string, subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const generateAppointmentMessage = (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}): string => {
  let msg = `Hello ${businessInfo.name},\n\nI would like to book an appointment.\n\n`;
  msg += `Name: ${data.name}\n`;
  msg += `Phone: ${data.phone}\n`;
  if (data.email) msg += `Email: ${data.email}\n`;
  msg += `Service: ${data.service}\n`;
  msg += `Preferred Date: ${data.date}\n`;
  msg += `Preferred Time: ${data.time}\n`;
  if (data.message) msg += `Additional Notes: ${data.message}\n`;
  msg += `\nKindly confirm availability.\n`;
  return msg;
};

export const generateAppointmentEmailBody = (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}): { subject: string; body: string } => {
  let body = `Hello ${businessInfo.name},\n\nI would like to book an appointment.\n\n`;
  body += `Name: ${data.name}\n`;
  body += `Phone: ${data.phone}\n`;
  body += `Email: ${data.email}\n`;
  body += `Service: ${data.service}\n`;
  body += `Preferred Date: ${data.date}\n`;
  body += `Preferred Time: ${data.time}\n`;
  if (data.message) body += `Additional Notes: ${data.message}\n`;
  body += `\nKindly confirm availability.\n`;
  
  return {
    subject: 'Appointment Booking Request',
    body,
  };
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
