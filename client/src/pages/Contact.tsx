import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Get in touch with the EPOCKET team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Mail className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">support@epocket.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 1234567890</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  EPOCKETPAY SOLUTION PRIVATE LIMITED<br />
                  Kolkata, West Bengal, India
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Company Name:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED</p>
              <p><strong>CIN:</strong> U93000WB2019PTC231194</p>
              <p><strong>PAN:</strong> AAFCE4335G</p>
              <p><strong>Business Type:</strong> Free-to-Play Social Casino Entertainment</p>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">
              For general inquiries, feedback, or support, please email us at <strong className="text-primary">support@epocket.com</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
