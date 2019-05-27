const url = "https://www.reddit.com/r/funny.json";
async function getRequest() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getRequest;
