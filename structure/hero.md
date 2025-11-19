# Hero / Home

- **Center image (link to About):** `resources/Images/center_img.png` (id `center_img`)
- **Description text:** "Software Development Student at the Islamic University of Gaza" (id `description`)
- **Contact button:**
  - Button id: `contact`
  - Text: "Contact Me"
  - Contains icon: `resources/Icons/contact-info.png` (id `img_contact`)
  - Wrapped by an `<a href="#contact_section">` to scroll to contact
- **Behavior hooks:**
  - `onmouseover="onHover()"` and `onmouseleave="onNotHover()"` on the Contact button
  - Page `onscroll="showBack()"` and a back/up image `#home_back` that calls `hideBack()`

Notes:
- Hero contains `#center` and `#description_content` sections.
- There is also an `#body_top` anchor used for top navigation.