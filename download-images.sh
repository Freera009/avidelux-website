#!/bin/bash
# Downloads all AviDelux images out of Base44's CDN into public/images/
# so the site no longer depends on Base44 for assets.
# Run this once, locally, before your first build:
#   bash download-images.sh

set -e
mkdir -p public/images
BASE="https://media.base44.com/images/public/6a4d1fd37d060e5895a8ad41"

FILES=(
  "0365aea9b_generated_image.png"
  "1c96283a7_generated_902bb949.png"
  "3b6853f1e_generated_image.png"
  "490246c66_generated_image.png"
  "4bd2100d2_generated_26d5f150.png"
  "7118d11e4_generated_fea8ad00.png"
  "7b3e04fca_generated_image.png"
  "88fbb552e_generated_43d254ea.png"
  "8cfc8115c_generated_7886680d.png"
  "8dcb7bb09_generated_image.png"
  "99725ca19_generated_26990631.png"
  "af1003db8_generated_image.png"
  "c278dd8e7_generated_image.png"
  "c96c76a46_generated_image.png"
  "d163e2d79_generated_787d9461.png"
  "d66ac3028_generated_7e4454ac.png"
  "df3b79dfd_generated_d50a62bb.png"
  "f02e2c51b_generated_f64341c9.png"
)

for f in "${FILES[@]}"; do
  echo "Downloading $f..."
  curl -sL "$BASE/$f" -o "public/images/$f"
done

echo "Done. ${#FILES[@]} images saved to public/images/"
