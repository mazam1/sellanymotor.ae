# Design Guide: Apex Auto Specialists Website

## 1. Design Philosophy

The design for Apex Auto Specialists will be **Clean, Professional, and Trustworthy**. We will use a modern aesthetic with ample white space, high-quality imagery, and a clear visual hierarchy to guide users toward conversion. The feel should be premium and reliable, reflecting the quality of our work.

## 2. Color Palette

The specified colors are irrelevant. We will use a modern and professional palette that conveys trust and quality.

*   **Primary Blue:** `#005A9C` (A trustworthy, strong blue for CTAs, headings, and key accents)
*   **Accent Orange:** `#FF7A00` (An energetic, modern orange for highlights, hover states, and to draw attention)
*   **Dark Gray:** `#2C3E50` (For body text and headings where a softer black is needed)
*   **Medium Gray:** `#95A5A6` (For sub-headings, metadata, and less critical text)
*   **Light Gray:** `#F4F6F7` (For section backgrounds and form fields)
*   **White:** `#FFFFFF` (The primary background color)

## 3. Typography

We will use the **Poppins** font family from Google Fonts for its clean, modern, and highly readable appearance.

*   **Font Family:** `Poppins, sans-serif`

*   **Headings:**
    *   **H1:** 48px, Weight 700, Color: Dark Gray (`#2C3E50`)
    *   **H2:** 36px, Weight 600, Color: Dark Gray (`#2C3E50`)
    *   **H3:** 24px, Weight 600, Color: Dark Gray (`#2C3E50`)

*   **Body Text:**
    *   **Paragraph / Body:** 16px, Weight 400, Line Height: 1.7, Color: Dark Gray (`#2C3E50`)
    *   **Small / Caption:** 14px, Weight 400, Color: Medium Gray (`#95A5A6`)

## 4. Layout & Spacing

*   **Grid System:** A standard 12-column grid will be used for alignment.
*   **Container Max-Width:** `1140px` to ensure readability on large screens.
*   **Spacing Unit:** A base unit of `8px` will be used. All margins and padding will be multiples of 8 (e.g., 16px, 24px, 32px, 64px) to ensure visual rhythm and consistency.
*   **Section Padding:** Each section will have a top and bottom padding of `80px`.

## 5. Component Styles

### 5.1. Buttons
*   **Primary Button:**
    *   Background: Primary Blue (`#005A9C`)
    *   Text Color: White (`#FFFFFF`)
    *   Padding: 16px 32px
    *   Border Radius: 6px
    *   Font Weight: 600
    *   Hover State: Background becomes Accent Orange (`#FF7A00`), with a smooth 0.3s transition.
*   **Secondary Button:**
    *   Background: Transparent
    *   Text Color: Primary Blue (`#005A9C`)
    *   Border: 2px solid Primary Blue (`#005A9C`)
    *   Padding: 14px 30px
    *   Border Radius: 6px
    *   Font Weight: 600
    *   Hover State: Background fills with Primary Blue (`#005A9C`), text becomes white.

### 5.2. Navigation (Header)
*   **Background:** White (`#FFFFFF`) with a subtle box-shadow for depth.
*   **Logo:** Aligned to the left.
*   **Nav Links:** Text color is Dark Gray (`#2C3E50`). Hover color is Primary Blue (`#005A9C`). Active link color is Primary Blue (`#005A9C`).
*   **CTA Button:** The Primary Button style.

### 5.3. Cards (Services, Testimonials)
*   **Background:** White (`#FFFFFF`)
*   **Border:** 1px solid `#E0E0E0`
*   **Border Radius:** 8px
*   **Shadow:** A subtle `0 4px 12px rgba(0,0,0,0.05)`
*   **Padding:** 24px
*   **Image:** Top of the card, full-width, with a border-radius of 8px 8px 0 0.
*   **Title:** H3 style, margin-top: 16px.
*   **Text:** Body style, margin-top: 8px.

### 5.4. Forms (Contact Section)
*   **Input Fields:**
    *   Background: Light Gray (`#F4F6F7`)
    *   Border: 1px solid transparent
    *   Padding: 16px
    *   Border Radius: 4px
    *   Font: Poppins, 16px
    *   Focus State: Border changes to Primary Blue (`#005A9C`), outline: none.
*   **Labels:** Small/Caption style, text-transform: uppercase, letter-spacing: 1px, margin-bottom: 8px.
*   **Submit Button:** The Primary Button style, full-width.

### 5.5. Imagery & Iconography
*   **Photography:** All images must be high-resolution, professional, and well-lit. They should depict real work, tools, and team members to build authenticity. No stock photos of people shaking hands.
*   **Icons:** Use a consistent, clean, and modern icon set (e.g., Feather Icons, Heroicons). All icons should be the same style (e.g., outlined) and color (Primary Blue or Accent Orange).
