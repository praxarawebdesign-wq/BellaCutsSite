import type { Application } from "express";

export async function registerRoutes(app: Application): Promise<void> {
  app.post("/api/contact", (_req, res) => {
    res.json({
      success: true,
      message: "Thank you for your message! We're just a demo so nothing is submitted.",
    });
  });

  app.get("/api/contact-submissions", (_req, res) => {
    res.json({
      success: true,
      message: "This is a dummy endpoint and does not store submissions.",
    });
  });
}
