import { j as json } from "../../../../chunks/index2.js";
import xml2js from "xml2js";
const FEED_URL = "https://www.computerweekly.com/rss/Latest-IT-news.xml";
async function GET() {
  try {
    const response = await fetch(FEED_URL);
    const text = await response.text();
    const result = await xml2js.parseStringPromise(text, { mergeAttrs: true });
    const items = result.rss.channel[0].item.map((item) => item.title[0]);
    return json(items);
  } catch (error) {
    console.error(error);
    return json({ error: "Error fetching or parsing RSS feed" }, { status: 500 });
  }
}
export {
  GET
};
