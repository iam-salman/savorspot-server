const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/dapi/restaurants/list/v5", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/misc/place-autocomplete", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/landing/PRE_SEARCH", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/restaurants/search/suggest", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/restaurants/search/v3", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/menu/pl", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/dapi/misc/address-recommend", async (req, res) => {
  const originalUrl = req.originalUrl;

  const endpoint = originalUrl.split("/dapi/")[1];

  const url = `https://www.swiggy.com/dapi/${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Send the response back to the client
    res.json(data); // Sending data received from Swiggy API as response
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/", (req, res) => {
  res.json({
    test: "Welcome to SavorSpot! - See Live Web URL for this Server - https://savorspot.netlify.app/",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
