export function normalizePhone(value) {
  return (value || "").replace(/[\s\-().]/g, "");
}

export function isValidEmail(value) {
  const v = (value || "").trim();
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v);
}

export function isValidPhone(value) {
  const v = normalizePhone(value);
  return /^\+?\d{7,15}$/.test(v);
}

function baseErrors({ name, email, phone, message }) {
  const errs = {};
  if (!name || !name.trim()) errs.name = "Name is required";
  else if (name.trim().length < 2) errs.name = "Name must be at least 2 characters";

  if (!email || !email.trim()) errs.email = "Email is required";
  else if (!isValidEmail(email)) errs.email = "Enter a valid email address";

  if (!phone || !phone.trim()) errs.phone = "Phone number is required";
  else if (!isValidPhone(phone)) errs.phone = "Enter a valid phone number (7–15 digits)";

  if (!message || !message.trim()) errs.message = "Message is required";
  else if (message.trim().length < 10) errs.message = "Message must be at least 10 characters";
  return errs;
}

export function validateContactForm(form) {
  return baseErrors(form);
}

export function validateQuotationForm(form) {
  return baseErrors(form);
}
