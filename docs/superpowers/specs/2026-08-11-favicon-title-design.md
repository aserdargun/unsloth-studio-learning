# Favicon and Browser Title Design

## Goal

Give `unsloth.aserdargun.com` a recognizable Unsloth favicon that matches the dark visual identity used across `aserdargun.com`, and rename the browser-facing application title to `Unsloth Studio Learning`.

## Approved visual direction

- Use the official black-and-white Unsloth sloth mascot as the recognizable subject.
- Place the mascot inside a lime `#c8ff36` circle.
- Place the lime circle on a dark `#121310` rounded-square background.
- Keep the composition text-free, centered, high contrast, and legible at 16, 32, and 48 pixels.
- Preserve comfortable padding so the mascot does not touch the favicon edges.
- Use the official Unsloth repository artwork as the source rather than generating a look-alike mascot.

## Metadata behavior

- Change the default browser title from `Unsloth Studio Learning Atlas` to `Unsloth Studio Learning`.
- Change the page-title template to `%s · Unsloth Studio Learning`.
- Keep localized lesson and surface names as the leading page-title segment.
- Align `applicationName`, Open Graph site/title metadata, Twitter title metadata, and Course JSON-LD name with `Unsloth Studio Learning`.
- Keep the existing descriptions, keywords, canonical URLs, locale alternates, and social preview image unchanged.

## Files and integration

- Replace `public/icon.png` with a 512 × 512 PNG using the approved composition. Existing Next.js icon metadata already points to this path for browser, shortcut, and Apple icon use.
- Update title-related values in `app/site-config.ts`.
- Extend the rendered-output test so generated HTML must contain the new title and must not contain the old default title.

## Verification

- Inspect the 512 × 512 source and downscaled 48 × 48, 32 × 32, and 16 × 16 previews for centering, contrast, and silhouette clarity.
- Run the rendered HTML test after building the application.
- Run type checking and the relevant production build to ensure Next.js accepts the metadata and static asset.

## Out of scope

- Redesigning the Open Graph card.
- Renaming visible navigation, learning-surface headings, repository documentation, or route names that still use “Atlas” as a product concept.
- Changing site theme colors beyond the favicon artwork.
