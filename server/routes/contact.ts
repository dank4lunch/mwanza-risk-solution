import { RequestHandler } from "express";
import { z } from "zod";

// Validation schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  insuranceType: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = ContactFormSchema.parse(req.body);
    
    // Log the contact form submission (in production, you'd save to database)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      data: validatedData,
    });

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply email to customer

    // For now, we'll just simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Send success response
    res.json({
      success: true,
      message: "Thank you for your message. We'll get back to you within 24 hours.",
      data: {
        name: validatedData.name,
        email: validatedData.email,
        submittedAt: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Please check your form data",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    });
  }
};
