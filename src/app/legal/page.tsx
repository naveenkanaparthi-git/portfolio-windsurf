import { generateMetadata } from "@/lib/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = generateMetadata({
  title: "Privacy",
  description: "Privacy and site information.",
  url: "/legal",
});

export default function LegalPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Privacy</h1>
        <p className="text-muted-foreground">
          This site is a personal portfolio. It does not knowingly collect or sell
          personal data.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            If you contact me through the site, the information you submit is used
            only to respond to your message.
          </p>
          <p>
            If analytics are enabled in the future, this page will be updated to
            reflect what is collected.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
