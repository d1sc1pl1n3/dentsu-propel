// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

function mailchimpSend(props) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
}

const data = {
  email_address: email,
  status: "subscribed",
};

const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${base64ApiKey}`,
};

return {
  url,
  data,
  headers,
};

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email || !email.length) {
//   }
// };
