import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { featuresItem } from "@/lib/site";
import { index } from "drizzle-orm/mysql-core";

export default function Features() {
  return (
    <section className="bg-primary-foreground py-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <Badge className="text-2xl font-bold font-serif text-zinc-50">
          Key features
        </Badge>
        <h2 className="text-center text-muted-foreground">
          Save time, save money, look more professional
        </h2>
      </div>
      <div className="container mx-auto mt-8 gap-4 p-4 grid sm:grid-cols-2 lg:grid-cols-2">
        {featuresItem.map((feature, index) => (
          <Card
            key={index}
            className="min-h-[120px]"
          >
            <CardHeader className="text-xl font-bold">
              {feature.title}
            </CardHeader>
            <CardContent className="text-sm">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
