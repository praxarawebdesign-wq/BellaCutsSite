import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
