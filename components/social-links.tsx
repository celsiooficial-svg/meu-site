import { MessageCircle, Facebook, Instagram } from "lucide-react"

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/244975179612",
    icon: MessageCircle,
    className: "bg-[#25D366] hover:bg-[#20bd5a]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578566368942",
    icon: Facebook,
    className: "bg-[#1877F2] hover:bg-[#166ada]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/celsio_ao",
    icon: Instagram,
    className: "bg-[#E1306C] hover:bg-[#c92a60]",
  },
]

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white font-medium transition-all hover:scale-105 ${social.className}`}
        >
          <social.icon className="w-5 h-5" />
          {social.name}
        </a>
      ))}
    </div>
  )
}
