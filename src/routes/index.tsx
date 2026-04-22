import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Heart,
  Shield,
  Sparkles,
  BadgeIndianRupee,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Gift,
  ShoppingBag,
} from "lucide-react";
import { ThulirLogoFull, ThulirWatermark } from "@/components/ThulirLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import heroBaby from "@/assets/hero-baby.jpg";
import catClothes from "@/assets/cat-clothes.jpg";
import catToys from "@/assets/cat-toys.jpg";
import catFeeding from "@/assets/cat-feeding.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Thulir Baby — Safe & Loving Care for Your Little One" },
      {
        name: "description",
        content:
          "Premium quality baby products designed with love. Safe, non-toxic and affordable clothes, toys, feeding & skincare essentials trusted by parents.",
      },
      { property: "og:title", content: "Thulir Baby — Safe & Loving Care" },
      { property: "og:description", content: "Premium baby products designed with love." },
      { property: "og:image", content: heroBaby },
      { name: "twitter:image", content: heroBaby },
    ],
  }),
});

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

const categories = [
  { name: "Baby Clothes", img: catClothes, desc: "Soft, breathable & gentle on skin" },
  { name: "Toys", img: catToys, desc: "Safe & playful learning fun" },
  { name: "Feeding Essentials", img: catFeeding, desc: "BPA-free bottles & accessories" },
  { name: "Skincare Products", img: catSkincare, desc: "Natural, dermatologist tested" },
  { name: "Accessories", img: catAccessories, desc: "Caps, booties, bibs & more" },
];

const features = [
  { icon: Shield, title: "Safe & Non-toxic", desc: "Certified safe materials, gentle for delicate skin." },
  { icon: BadgeIndianRupee, title: "Affordable Prices", desc: "Premium quality, friendly on your budget." },
  { icon: Heart, title: "Trusted by Parents", desc: "Loved by 10,000+ happy families." },
  { icon: Sparkles, title: "High Quality", desc: "Hand-picked, tested and quality assured." },
];

const testimonials = [
  {
    name: "Priya R.",
    role: "Mom of 2",
    text: "Thulir's clothes are so soft! My little one sleeps better and I love that everything is safe and chemical-free.",
  },
  {
    name: "Anitha S.",
    role: "New mom",
    text: "Affordable and beautiful products. The skincare range is a lifesaver for my baby's sensitive skin.",
  },
  {
    name: "Karthik & Meena",
    role: "Parents of a toddler",
    text: "Trusted brand! From toys to feeding bottles, everything feels premium. Highly recommended.",
  },
];

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll be in touch shortly 💕");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative z-0">
      <Toaster />

      {/* Background Watermark – custom Thulir brand watermark */}
      <ThulirWatermark />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-5 py-4 flex items-center justify-center relative">
          {/* Centered Logo - always centered, crisp, and balanced */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <a href="#top" className="hover:opacity-90 transition-opacity block">
              <ThulirLogoFull iconSize={48} iconClass="text-primary" textClass="text-foreground" />
            </a>
          </div>
          {/* Optional nav links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground absolute left-0 top-1/2 -translate-y-1/2">
            <a href="#categories" className="hover:text-foreground transition-colors">Shop</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why us</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
            <Button asChild size="sm" className="rounded-full shadow-sm hover:shadow-soft">
              <a href="#contact"><ShoppingBag className="h-4 w-4 mr-1.5" /> Visit Store</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-hero-gradient">
        <div className="container mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 border border-border text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Loved by 10,000+ parents
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.05]">
              Safe & Loving Care<br />for Your <span className="text-primary">Little One</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Premium quality baby products designed with love — soft, safe and gentle for your precious one.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-soft">
                <a href="#categories"><ShoppingBag className="h-4 w-4 mr-2" /> Shop Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-card/60">
                <a href="#contact"><MapPin className="h-4 w-4 mr-2" /> Visit Store</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Non-toxic</div>
              <div className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-primary" /> Made with love</div>
              <div className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary fill-primary" /> 4.9/5 rated</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blush/40 rounded-[3rem] blur-2xl" />
            <img
              src={heroBaby}
              alt="Smiling baby with soft toys and baby products"
              width={1280}
              height={1280}
              className="relative rounded-[2.5rem] shadow-soft w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-full bg-mint text-foreground"><Heart className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Trusted by</p>
                <p className="font-semibold text-sm">10k+ happy moms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-5 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">About Thulir</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Crafted with care, made for cuddles</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            At Thulir Baby, we believe every little one deserves the softest start in life. Our products are
            thoughtfully created with a focus on <strong className="text-foreground">safety, comfort and quality</strong> —
            using non-toxic materials your baby can trust. We blend warmth, affordability and care so parents
            can shop with confidence, every single day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-cream/50 py-20">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Shop by category</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Everything your baby needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <a
                key={c.name}
                href="#contact"
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="container mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Why Thulir</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Why parents choose us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-3xl p-7 shadow-card text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-blush grid place-items-center mb-4">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sky/40 py-20">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Happy parents</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Loved by families everywhere</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-3xl p-7 shadow-card">
                <div className="flex gap-1 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="container mx-auto px-5 py-20">
        <div className="relative overflow-hidden bg-soft-gradient rounded-[2.5rem] p-10 md:p-16 text-center shadow-soft">
          <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Limited offer</span>
          <h2 className="mt-3 text-3xl md:text-5xl">
            <strong>Special Discount</strong> for First Visit
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
            Get <strong className="text-primary">flat 20% off</strong> on your first purchase. Visit our store
            or fill the form below to claim.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full shadow-soft">
            <a href="#lead">Claim Your Discount</a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-cream/50 py-20">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Visit us</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Come say hello!</h2>
            <p className="mt-4 text-muted-foreground">
              Drop by our store and explore our full collection in person. Our team is always happy to help.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="h-10 w-10 rounded-xl bg-blush grid place-items-center"><MapPin className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-muted-foreground">123 Baby Lane, Anna Nagar, Chennai – 600040</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="h-10 w-10 rounded-xl bg-mint grid place-items-center"><Phone className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-foreground">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="h-10 w-10 rounded-xl bg-sky grid place-items-center"><Mail className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@thulirbaby.com" className="text-sm text-muted-foreground hover:text-foreground">hello@thulirbaby.com</a>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-6 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-card aspect-square md:aspect-auto min-h-[320px] grid place-items-center bg-mint/40">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <p className="mt-3 font-semibold">Find us on the map</p>
              <p className="text-sm text-muted-foreground">Map placeholder — embed Google Maps here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead" className="container mx-auto px-5 py-20">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Get in touch</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Tell us about your little one</h2>
            <p className="mt-3 text-muted-foreground">We'll send you details and your special discount.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={form.name}
                maxLength={80}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl h-12"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Phone number"
                  value={form.phone}
                  maxLength={20}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl h-12"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-12"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Message (optional)"
                value={form.message}
                maxLength={500}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl min-h-28"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full shadow-soft">
              Get Details
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/95 text-background mt-10">
        <div className="container mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <ThulirLogoFull iconSize={38} iconClass="text-primary" textClass="text-background" />
            <p className="mt-3 text-sm text-background/70 max-w-xs">
              Premium quality baby products designed with love. Safe, soft and made for your little one.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#categories" className="hover:text-background">Shop</a></li>
              <li><a href="#about" className="hover:text-background">About</a></li>
              <li><a href="#why" className="hover:text-background">Why Us</a></li>
              <li><a href="#contact" className="hover:text-background">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Follow Us</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="h-10 w-10 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href="https://wa.me/919876543210" aria-label="WhatsApp" className="h-10 w-10 rounded-full bg-background/10 grid place-items-center hover:bg-[#25D366] transition-colors"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container mx-auto px-5 py-5 text-center text-xs text-background/60">
            © {new Date().getFullYear()} Thulir Baby. Made with 💕 for little ones.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-soft hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
