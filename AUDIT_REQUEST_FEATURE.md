# 📋 Audit Request Feature

## Overview

A dedicated page for clients to request blockchain security audits. The form collects all necessary information and sends it directly to `mickael.girondeau@gmail.com`.

---

## 🎯 Features

### Form Fields

**Contact Information:**
- Full Name (required)
- Email (required)
- Company/Organization (optional)

**Project Details:**
- Project Type (required)
  - DeFi Protocol
  - NFT Platform
  - DAO / Governance
  - DEX / Trading
  - Bridge / Cross-chain
  - Token / Smart Contract
  - Gaming / Metaverse
  - Other

- Blockchain (required)
  - Solana
  - Ethereum
  - Polygon
  - Arbitrum
  - Optimism
  - StarkNet
  - Scroll
  - BSC
  - Avalanche
  - Other

- Urgency Level
  - Low - Not urgent
  - Normal - 2-4 weeks
  - High - 1-2 weeks
  - Urgent - Less than a week

**Request Details:**
- Subject (required)
- Message (required) - Detailed description of the project and audit needs

**Attachments:**
- Multiple file upload support
- Accepted formats: .pdf, .doc, .docx, .txt, .sol, .rs, .js, .ts, .md
- Files can be removed before submission

---

## 🔗 Access

### Button Location
- **Hero Section** - "Demander un Audit" button
- **URL:** `/demander-audit`

### Direct Link
```tsx
<Link to="/demander-audit">Demander un Audit</Link>
```

---

## 📧 Email Handling

### Method
The form uses a `mailto:` link to open the user's default email client with pre-filled information.

### Email Structure
```
To: mickael.girondeau@gmail.com
Subject: Demande d'audit: [User's Subject]

Body:
Nom: [Name]
Email: [Email]
Entreprise: [Company]
Type de projet: [Project Type]
Blockchain: [Blockchain]
Urgence: [Urgency]

Message:
[User's Message]

Note: [X] pièce(s) jointe(s)
```

### Attachments
Files are listed in the email body. Users will need to manually attach them in their email client.

---

## 🎨 Design

### Styling
- Dark theme matching BlockHack branding
- Purple/Fuchsia gradient accents
- Responsive design (mobile-friendly)
- Smooth animations and transitions

### Components
- **Navbar** - Full navigation
- **Form** - Multi-section form with validation
- **File Upload** - Drag & drop area with file list
- **Status Messages** - Success/error feedback
- **Footer** - Complete footer section

---

## 🔧 Technical Details

### File Location
```
src/pages/AuditRequest.tsx
```

### Dependencies
- React Router DOM (routing)
- Lucide React (icons)
- Framer Motion (animations - inherited)

### Routing
```tsx
// src/index.tsx
<Route path="/demander-audit" element={<AuditRequest />} />
```

### Button Update
```tsx
// src/sections/Hero/components/HeroButton.tsx
<Link to="/demander-audit">
  Demander un Audit
</Link>
```

---

## 🚀 Future Enhancements

### Potential Improvements

1. **Backend Integration**
   - Add email service (SendGrid, AWS SES, etc.)
   - Store submissions in database
   - Automated confirmation emails

2. **File Upload**
   - Direct file upload to cloud storage
   - Automatic virus scanning
   - Size limit enforcement

3. **Form Features**
   - Save draft functionality
   - Multi-step wizard
   - Progress indicator
   - Estimated audit cost calculator

4. **Analytics**
   - Track form submissions
   - Conversion rate monitoring
   - Popular project types

5. **Internationalization**
   - English version
   - Multi-language support

---

## 📝 Usage Example

### User Flow

1. User clicks "Demander un Audit" button on homepage
2. Navigates to `/demander-audit`
3. Fills out the form with project details
4. Optionally uploads documentation files
5. Clicks "Envoyer la demande"
6. Email client opens with pre-filled information
7. User sends email with attachments
8. Success message displayed

---

## ⚠️ Important Notes

### Email Client Dependency
- Requires user to have a configured email client
- Mobile users may need to select email app
- Web-based email may not work on all browsers

### File Attachments
- Files are not automatically attached
- Users must manually attach files in their email client
- Consider backend solution for automatic file handling

### Spam Protection
- No CAPTCHA currently implemented
- Consider adding reCAPTCHA for production
- Rate limiting recommended

---

## 🔒 Security Considerations

### Data Handling
- No sensitive data stored in browser
- Form data only sent via mailto
- No backend storage (currently)

### Validation
- Client-side validation for required fields
- Email format validation
- File type restrictions

### Privacy
- No tracking cookies
- No third-party analytics (yet)
- GDPR-compliant consent message

---

## 📞 Contact

For questions about this feature:
- **Email:** mickael.girondeau@gmail.com
- **GitHub:** https://github.com/Mickael78000/blockhack-website

---

**Last Updated:** November 6, 2025
