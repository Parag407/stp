export async function sendEnquiry({ subject, name, email, phone = "", message, formKind }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Form service is not configured yet (missing VITE_WEB3FORMS_ACCESS_KEY).");
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: name,
      replyto: email,
      email,
      phone,
      message,
      form_kind: formKind,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success !== true) {
    throw new Error(data.message || "Failed to send. Please try again later.");
  }
  return data;
}
