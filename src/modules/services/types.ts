export type Service = {
  metadata: ServiceMetadata;
  content: string;
};

export type ServiceMetadata = {
  id: number;
  title: string;
  slug: string;
  category: string;
  range?: "Premium" | "Regular";
  image: string;
  quantities?: string[];
  safetyDs?: string;
  technicalDs?: string;
  meta: {
    title: string;
    description: string;
  };
};
