import axios from "axios";

const handler = async (event, context) => {
  // put in ENV variable
  const listId = process.env.MAILCHIMP_LIST_ID;
  const apiKey = process.env.MAILCHIMP_API_KEY;

  const body = event.body;
  const { email_address, merge_fields } = body;

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "please provide an email address" }),
    };
  }

  try {
    const payload = {
      email_address,
      merge_fields,
      //   message,
      status: "subscribed",
    };
    const { data } = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );
    //console.log("sending data", data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export default handler;
