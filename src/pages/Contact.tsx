import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/ui/LeadForm";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Trinethra Edu Services - MBBS Abroad</title>
        <meta 
          name="description" 
          content="Contact Trinethra Edu Services for MBBS abroad admissions. Call, email, or visit our office in Hyderabad. Get expert guidance today!" 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about MBBS abroad? We're here to help. Reach out to our 
            expert team for personalized guidance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Our team of experienced counsellors is available to answer all your questions 
                about MBBS abroad admissions. Contact us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Quick responses guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@trinethraeduservices.in" className="text-muted-foreground hover:text-primary transition-colors">
                      info@trinethraeduservices.in
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      123 Education Hub, Near Ameerpet Metro Station<br />
                      Hyderabad, Telangana, India - 500001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-medical p-8">
                <h2 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and our team will get back to you shortly.
                </p>
                <LeadForm variant="default" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8989566908386!2d78.44366937516795!3d17.434730883458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8aa5aaaab%3A0x7a5e6c6f6e6e6e6e!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Trinethra Edu Services Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
