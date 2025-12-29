"use client";

import { 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  ExternalLink, 
  GraduationCap, 
  Instagram
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const shLogo = "/shlogo1.png";
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & Address */}
          <div className="space-y-4">
           <Image src={shLogo} alt="Sacred Heart College Logo" width={48} height={48} className="w-35 h-35 object-contain" unoptimized />
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-5 h-5 shrink-0 text-indigo-500 mt-0.5" />
              <p className="leading-relaxed">
                Department of Computer Science<br />
                Thevara, Ernakulam<br />
                Kerala - 682013
              </p>
            </div>
            <Link 
              href="https://goo.gl/maps/your-college-link" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </Link>
          </div>

          {/* 2. Quick Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Coordinators</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-500 mt-1" />
                <div className="text-sm">
                  <p className="text-slate-200 font-medium">Dr. Arya Krishnan</p>
                  <a href="tel:+919447707941" className="text-slate-500 hover:text-indigo-400 transition-colors">
                    +91 94477 07941
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-500 mt-1" />
                <div className="text-sm">
                  <p className="text-slate-200 font-medium">Dr. Christy Jacqueline</p>
                  <a href="tel:+919645990652" className="text-slate-500 hover:text-indigo-400 transition-colors">
                    +91 96459 90652
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Courses Offered (Department Info) */}
          <div>
            <h4 className="text-white font-bold mb-6">Department Courses</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <GraduationCap className="w-4 h-4 text-slate-600 shrink-0" />
                <span>BSc Computer Applications</span>
              </li>
              <li className="flex gap-2">
                <GraduationCap className="w-4 h-4 text-slate-600 shrink-0" />
                <span>BCA (Cloud Technology)</span>
              </li>
              <li className="flex gap-2">
                <GraduationCap className="w-4 h-4 text-slate-600 shrink-0" />
                <span>Int. MSc Computer Science</span>
              </li>
              <li className="flex gap-2">
                <GraduationCap className="w-4 h-4 text-slate-600 shrink-0" />
                <span>MSc Computer Science (AI)</span>
              </li>
            </ul>
          </div>

          {/* 4. Social & Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" passHref legacyBehavior>
                <a target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </Link>
            </div>
            <Link 
              href="https://www.shcollege.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-sm text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1">
                Visit Main College Website &rarr;
              </a>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            &copy; 2025 Sacred Heart College, Thevara. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <span className="text-slate-400 font-medium">CS Department Student Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}