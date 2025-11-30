// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#ded9d5] text-black pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Top row */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo + copyright */}
          <div>
            <div className="mb-4">
              <Image
                src="/assets/images/logos/logo.png"
                alt="ENGAME"
                width={160}
                height={40}
              />
            </div>
            <p className="font-montserrat text-sm">
              © {year} <span className="font-semibold">Engame (Enidea Sdn Bhd)</span> all rights
              reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-1 text-sm font-montserrat">
            <p className="font-semibold">enquiry@engame.tech</p>
            <p>(+60) 012-299 9786</p>
            <p>(+60) 012-277 4439</p>
          </div>

          {/* Address */}
          <div className="text-sm font-montserrat">
            <p className="font-semibold">Enidea Sdn Bhd</p>
            <p>C-20-02, Metropolitan Square,</p>
            <p>Jalan PJU 8/1, Damansara Perdana,</p>
            <p>Petaling Jaya, 47820 Selangor, Malaysia</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/20 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm font-montserrat">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/pricing" className="hover:underline">
              Pricing
            </Link>
            <Link href="/brand-owner" className="hover:underline">
              Brand Owner
            </Link>
            <Link href="/gamer" className="hover:underline">
              Gamer
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/our-story" className="hover:underline">
              Our Story
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </nav>

          {/* Legal */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/conditions" className="hover:underline">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
