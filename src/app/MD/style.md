
> Institute Management System UI Style Guide

Version: 1.0

---

# Brand Identity

EduManage is a modern Institute Management System.

The design language should communicate:

- Professional
- Educational
- Trustworthy
- Modern
- Clean
- Accessible

The interface should always feel lightweight and uncluttered.

---

# Brand Colors

## Primary Blue

Used for:

- Buttons
- Links
- Active Navigation
- Icons
- Progress bars
- Highlights

```css
#0057D9
```

Tailwind

```js
primary: "#0057D9"
```

---

## Dark Blue

Used for:

- Hover states
- Headers
- Cards

```css
#003E99
```

---

## Accent Blue

```css
#4D8DFF
```

Use sparingly for:

- Notifications
- Focus
- Hover

---

## Black

```css
#111111
```

Used for:

- Primary Text
- Icons
- Logo

---

## White

```css
#FFFFFF
```

Backgrounds

Cards

Forms

---

## Gray Scale

```css
Gray 50   #F8FAFC
Gray100   #F1F5F9
Gray200   #E2E8F0
Gray300   #CBD5E1
Gray400   #94A3B8
Gray500   #64748B
Gray600   #475569
Gray700   #334155
Gray800   #1E293B
Gray900   #0F172A
```

---

# Theme

---

## Light Mode

Background

```css
#FFFFFF
```

Secondary Background

```css
#F8FAFC
```

Cards

```css
#FFFFFF
```

Border

```css
#E2E8F0
```

Primary Text

```css
#111111
```

Secondary Text

```css
#475569
```

Primary Button

Background

```css
#0057D9
```

Text

```css
#FFFFFF
```

Hover

```css
#003E99
```

---

## Dark Mode

Background

```css
#0F172A
```

Cards

```css
#1E293B
```

Secondary

```css
#334155
```

Borders

```css
#475569
```

Text

```css
#FFFFFF
```

Muted Text

```css
#CBD5E1
```

Primary Button

```css
Background: #0057D9
Text: White
Hover: #4D8DFF
```

---

# Typography

Font

```
Inter
```

Fallback

```
system-ui
```

Weights

```
400
500
600
700
800
```

---

# Heading Sizes

H1

```
40px
Bold
```

H2

```
32px
Bold
```

H3

```
28px
SemiBold
```

H4

```
24px
SemiBold
```

H5

```
20px
SemiBold
```

Body

```
16px
```

Small

```
14px
```

Caption

```
12px
```

---

# Border Radius

Small

```
6px
```

Default

```
10px
```

Large

```
16px
```

Buttons

```
12px
```

Cards

```
16px
```

---

# Shadows

Card

```css
0 2px 8px rgba(0,0,0,.08)
```

Hover

```css
0 8px 20px rgba(0,0,0,.12)
```

Dialog

```css
0 15px 40px rgba(0,0,0,.20)
```

---

# Spacing Scale

```
4
8
12
16
20
24
32
40
48
64
```

Always use multiples of 4.

---

# Buttons

Primary

Blue Background

White Text

Medium Radius

Hover Dark Blue

---

Secondary

White

Blue Border

Blue Text

Hover Light Blue Background

---

Danger

Red

White Text

---

Success

Green

White Text

---

# Inputs

Height

```
44px
```

Radius

```
10px
```

Border

Gray200

Focus

Blue Border

Blue Ring

Placeholder

Gray400

---

# Cards

White

16 Radius

Subtle Shadow

24 Padding

---

# Tables

Header

Gray100

Rows

White

Hover

Blue 5%

Rounded

Alternating row colors optional

---

# Sidebar

Background

Dark Blue

Text

White

Active Item

Blue

Hover

Slightly lighter blue

Icons

White

---

# Navbar

Height

72px

Background

White

Shadow

Small

Dark Mode

Dark Background

---

# Icons

Use

React Icons

Recommended packages

```
react-icons/fa
react-icons/md
react-icons/hi
react-icons/io5
react-icons/fi
react-icons/lu
```

Examples

Dashboard

```
FiHome
```

Students

```
FaUserGraduate
```

Faculty

```
FaChalkboardTeacher
```

Courses

```
MdMenuBook
```

Attendance

```
HiOutlineClipboardCheck
```

Fees

```
FaMoneyBillWave
```

Library

```
FaBookOpen
```

Results

```
FaChartLine
```

Notices

```
MdCampaign
```

Settings

```
FiSettings
```

Logout

```
FiLogOut
```

Search

```
FiSearch
```

Notification

```
FiBell
```

Profile

```
FaUserCircle
```

Calendar

```
FiCalendar
```

---

# Animation

Transition

```
200ms
```

Hover

```
scale(1.02)
```

Button Press

```
scale(.98)
```

Page Transition

Fade

150ms

---

# Accessibility

Minimum contrast ratio

```
4.5:1
```

Visible focus ring

Keyboard navigation

ARIA labels

Reduced motion support

Icons must include accessible labels when used without text.

---

# React Component Structure

```
components/

Button/

Card/

Input/

Modal/

Sidebar/

Navbar/

DataTable/

Avatar/

Badge/

Breadcrumb/

StatCard/

Dashboard/

Student/

Teacher/

Course/

Attendance/

Fees/

Library/

Result/

Notice/

Calendar/

Charts/

ThemeToggle/
```

---

# Recommended Packages

```bash
react-icons

tailwindcss

next-themes

clsx

tailwind-merge

framer-motion

react-hook-form

zod

@tanstack/react-table

recharts

react-hot-toast

lucide-react
```

---

# Dashboard Style

Cards

Rounded

Large Icons

Simple Statistics

Blue Accent

Charts

Minimal

Tables

Rounded

Lots of whitespace

---

# Logo Usage

Use the EduManage logo on:

- Login page
- Sidebar
- Splash screen
- Browser favicon
- Footer

Maintain clear space equal to the height of the "E" in the logo.

Do not stretch, recolor, or distort the logo. On dark backgrounds, use a version with a transparent background and ensure sufficient contrast.

---

# Design Principles

- Clean over decorative.
- Use whitespace generously.
- Keep navigation simple.
- Maintain consistent spacing and typography.
- Use blue only for interactive and highlighted elements.
- Ensure every screen is responsive.
- Prioritize accessibility and keyboard navigation.
style.md
Displaying style.md.