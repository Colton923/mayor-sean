export default function Page() {
  const tosText = `
  **Terms of Service**  
**Effective Date: January 1st, 2025**  

Welcome to **CavanaughForMayor.com**, the official website of **Friends for Sean Cavanaugh LLC** ("we," "our," or "us"). By accessing or using this website, you agree to be bound by these **Terms of Service** ("Terms"). If you do not agree to these Terms, please do not use this website.

---

### 1. **Use of the Website**  
**CavanaughForMayor.com** is intended to provide information about Sean Cavanaugh’s mayoral campaign, events, policies, and ways to support or engage with the campaign. By using this website, you agree:
- Not to use this website for any unlawful purpose.
- Not to interfere with or disrupt the website’s functionality.
- Not to engage in any activity that could harm the website, its content, or its users.

### 2. **Intellectual Property**  
All content, including text, images, logos, and campaign materials on this website, is owned by **Friends for Sean Cavanaugh LLC** or used with permission. You may not copy, distribute, or modify any content without our express written permission.

### 3. **Donations and Contributions**  
If you choose to donate to the campaign through this website:
- You certify that you are legally eligible to make political contributions under applicable laws.
- All donations are final and non-refundable unless required by law.
- Your contribution is subject to campaign finance laws, including donation limits and reporting requirements.

### 4. **Third-Party Links**  
This website may contain links to third-party websites for additional resources or convenience. We do not endorse or assume responsibility for the content or policies of these third-party sites.

### 5. **Privacy Policy**  
Our collection and use of personal information are governed by our **Privacy Policy**, which can be found [Insert Link to Privacy Policy]. By using this website, you consent to our data practices as outlined in the Privacy Policy.

### 6. **Disclaimer of Warranties**  
This website is provided "as is" without warranties of any kind. We do not guarantee that the site will always be available, secure, or free from errors or viruses.

### 7. **Limitation of Liability**  
To the fullest extent permitted by law, **Friends for Sean Cavanaugh LLC** is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website.

### 8. **Governing Law**  
These Terms are governed by the laws of the State of [Insert State]. Any disputes arising from these Terms or the use of this website shall be resolved in the courts of [Insert State].

### 9. **Changes to These Terms**  
We may update these Terms at any time without prior notice. Your continued use of the website constitutes your acceptance of any changes.

### 10. **Contact Information**  
If you have any questions about these Terms, please contact us at:
**Friends for Sean Cavanaugh LLC**  
Email: [Insert Contact Email]  
Address: [Insert Campaign Office Address]  

---

By using this website, you acknowledge that you have read, understood, and agreed to these Terms of Service.

`;
  return (
    <div className="min-h-screen w-full">
      <h1>Terms of Service</h1>
      <div className="container mx-auto px-4">
        {tosText.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
