import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Have a question or concern? We're here to help. Get in touch with us.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-gray-600">
              We'd love to hear from you. Please fill out the form or contact us using the information below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-rose-500" />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="mt-1 text-gray-600">
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-rose-500" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-rose-500" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="mt-1 text-gray-600">support@urbanthreads.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="mb-4 font-medium">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-rose-500">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-500">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-500">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                className="mt-1"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709667275095!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
} 