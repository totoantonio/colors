import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// Define the list of routes for your site
const routes = [
  { url: "/colors", changefreq: "daily", priority: 1.0 },
  { url: "colors/about", changefreq: "monthly", priority: 0.7 },
  { url: "colors/contact", changefreq: "monthly", priority: 0.6 },
  // Add other routes as needed
];

// Create a sitemap stream with the corrected site's hostname
const sitemap = new SitemapStream({
  hostname: "https://totoantonio.github.io/colors/",
});

// Path to save the sitemap
const sitemapPath = resolve(process.cwd(), "./public/sitemap.xml");
const writeStream = createWriteStream(sitemapPath);

// Properly handle stream events
sitemap
  .pipe(writeStream)
  .on("finish", () => {
    console.log("Sitemap has been generated and written to " + sitemapPath);
  })
  .on("error", (error) => {
    console.error("Stream error:", error);
  });

// Write each route to the sitemap
routes.forEach((route) => sitemap.write(route));

// End the sitemap stream
sitemap.end();

// Use streamToPromise to handle the promise after setting up the sitemap
streamToPromise(sitemap)
  .then(() => {
    console.log("Sitemap stream has successfully completed.");
  })
  .catch((e) => {
    console.error("Failed to generate sitemap:", e);
  });
