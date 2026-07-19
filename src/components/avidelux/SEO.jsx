import { useEffect } from "react";

const SITE_NAME = "Avidelux";
const SITE_URL = "https://avidelux.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/f02e2c51b_generated_f64341c9.png`;
const DEFAULT_DESCRIPTION =
  "Avidelux is the B2B technology platform for automated dispatch, GPS tracking, and GoBD-compliant invoicing — connecting independently owned, licensed taxi and chauffeur companies across Germany under one system.";

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.head.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Sets per-page document title, meta description, canonical URL,
 * Open Graph / Twitter Card tags, and JSON-LD structured data.
 * Renders nothing.
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} — B2B Dispatch & Fleet Management Platform`;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setLinkTag("canonical", canonicalUrl);

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", SITE_NAME);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    if (jsonLd) {
      setJsonLd("page-schema", jsonLd);
    }
  }, [title, description, path, image, jsonLd]);

  return null;
}
