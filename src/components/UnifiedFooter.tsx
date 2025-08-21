import Link from "next/link";
import { servicesContent } from '@/data/services-content';

export default function UnifiedFooter() {
  // Use English service categories
  const serviceCategories = servicesContent.ja.categories;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Office Information */}
          <div>
            <Link href="/">
              <h3 className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer">
                <span className="text-white">Fortia</span>
                <span className="text-white ml-1">Administrative Law Office</span>
              </h3>
            </Link>
            <div className="mb-4">
              <p className="text-gray-400">
                〒100-0001<br />
                1-1-1 Chiyoda, Chiyoda-ku, Tokyo<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-400 text-sm">
                Weekdays: 9:00 - 18:00<br />
                Saturday: 9:00 - 17:00<br />
                Sunday & Holidays: Closed
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Service Areas</h4>
              <p className="text-gray-400 text-sm">
                Tokyo, Chiba, Saitama, Kanagawa<br />
                ※Other areas available upon consultation
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="md:columns-2 md:gap-x-6 space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.id} className="mb-2 break-inside-avoid">
                  <Link 
                    href={`/services/${category.slug}`}
                    className="text-gray-300 hover:text-white font-medium transition-colors block"
                  >
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fortia Administrative Law Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}