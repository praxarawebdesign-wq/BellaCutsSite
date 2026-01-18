import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface GeneratedImage {
  url: string;
  prompt: string;
}

interface ImageGenerationResponse {
  success: boolean;
  message: string;
  images: Record<string, GeneratedImage>;
}

export default function ImageGenerator() {
  const { toast } = useToast();
  const [generatedImages, setGeneratedImages] = useState<Record<string, GeneratedImage> | null>(null);

  const generateImagesMutation = useMutation({
    mutationFn: async (): Promise<ImageGenerationResponse> => {
      const response = await apiRequest("POST", "/api/generate-images", {});
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setGeneratedImages(data.images);
        toast({
          title: "Images Generated Successfully!",
          description: `Generated ${Object.keys(data.images).length} landscaping images.`,
        });
      } else {
        toast({
          title: "Generation Failed",
          description: data.message,
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate images",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">AI Image Generator</h2>
          <p className="text-muted-foreground mb-6">
            Generate custom AI images for all landscaping service sections using DALL-E 3.
          </p>
          
          <Button
            onClick={() => generateImagesMutation.mutate()}
            disabled={generateImagesMutation.isPending}
            className="bg-primary text-primary-foreground px-8 py-3"
            data-testid="generate-images-btn"
          >
            {generateImagesMutation.isPending ? "Generating Images..." : "Generate All Images"}
          </Button>
        </CardContent>
      </Card>

      {generatedImages && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(generatedImages).map(([service, image]) => (
            <Card key={service} className="overflow-hidden">
              <img 
                src={image.url} 
                alt={`Generated image for ${service}`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 capitalize">
                  {service.replace(/-/g, ' ')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {image.prompt.substring(0, 100)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}