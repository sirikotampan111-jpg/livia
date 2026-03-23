// Livia Real Estate - Landing Page
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  TreePine,
  Waves,
  Dumbbell,
  Building2,
  Trees,
  PersonStanding,
  ChevronLeft,
  ChevronRight,
  X,
  Shield,
  CheckCircle,
  Sparkles,
  Heart,
  Users,
  TrendingUp,
  Star,
  Youtube,
  Facebook,
  Instagram
} from 'lucide-react'

// TikTok Icon Component (not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

// Social Media Links
const socialMediaLinks = [
  { 
    name: 'YouTube', 
    icon: Youtube, 
    url: 'https://youtube.com/@liviaindah27?si=eXPfmISOvMw16LLv',
    color: 'hover:text-red-600 hover:bg-red-50'
  },
  { 
    name: 'TikTok', 
    icon: TikTokIcon, 
    url: 'https://www.tiktok.com/@livia.realestate?_r=1&_t=ZS-94uzT7rRwO5',
    color: 'hover:text-black hover:bg-gray-100'
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: 'https://www.facebook.com/share/18QGwp6v5n/',
    color: 'hover:text-blue-600 hover:bg-blue-50'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://www.instagram.com/lifia_realestate?utm_source=qr&igsh=MWIyYml2MXJ4YnY3eA==',
    color: 'hover:text-pink-600 hover:bg-pink-50'
  },
]

// Format number to Indonesian currency format
const formatPrice = (num: number) => {
  return new Intl.NumberFormat('id-ID').format(num)
}

// Unit Types Data - Complete Details
const unitTypes = [
  {
    name: 'MOMO',
    image: '/images/unit-momo.jpg',
    ukuran: '3.3 x 10',
    lt: 33,
    lb: 29.8,
    lantai: 2,
    kamarTidur: 1,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 492301650,
    hargaKPR: 590962121,
    dp5: 24615082,
    dp10: 49230165,
    cicilan: 2179645,
    badge: 'Starter',
    badgeColor: 'bg-green-500'
  },
  {
    name: 'YURI 1BR',
    image: '/images/unit-yuri-1br.jpg',
    ukuran: '5 x 10',
    lt: 50,
    lb: 30.1,
    lantai: 1,
    kamarTidur: 1,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 649353350,
    hargaKPR: 779803549,
    dp5: 32467667,
    dp10: 64935335,
    cicilan: 3034706,
    badge: 'Popular',
    badgeColor: 'bg-blue-500'
  },
  {
    name: 'YURI 2BR',
    image: '/images/unit-yuri-2br.jpg',
    ukuran: '5 x 10',
    lt: 50,
    lb: 33.5,
    lantai: 1,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 714288663,
    hargaKPR: 772492183,
    dp5: 35714433,
    dp10: 71428866,
    cicilan: 3162483,
    badge: 'Best Value',
    badgeColor: 'bg-yellow-500'
  },
  {
    name: 'KAEDE',
    image: '/images/unit-kaede-new.jpg',
    ukuran: '5 x 10',
    lt: 50,
    lb: 55,
    lantai: 2,
    kamarTidur: 2,
    kamarMandi: 2,
    carport: '1 + Kanopi',
    hargaCash: 744865500,
    hargaKPR: 897184418,
    dp5: 44939107,
    dp10: 89878214,
    cicilan: 3979321,
    badge: 'Best Value',
    badgeColor: 'bg-yellow-500'
  },
  {
    name: 'AJISAI',
    image: '/images/unit-ajisai.jpg',
    ukuran: '5 x 12',
    lt: 60,
    lb: 36.4,
    lantai: 1,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 778893660,
    hargaKPR: 934530334,
    dp5: 38944683,
    dp10: 77889366,
    cicilan: 3449519,
    badge: null,
    badgeColor: ''
  },
  {
    name: 'KIKYO',
    image: '/images/unit-kikyo.jpg',
    ukuran: '5 x 10',
    lt: 50,
    lb: 41.1,
    lantai: 2,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 784792200,
    hargaKPR: 889927297,
    dp5: 39609795,
    dp10: 79219950,
    cicilan: 3702271,
    badge: 'Terlaris',
    badgeColor: 'bg-yellow-500'
  },
  {
    name: 'KIKYO Backyard',
    image: '/images/unit-kikyo-backyard.jpg',
    ukuran: '5 x 12',
    lt: 60,
    lb: 41.1,
    lantai: 2,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 878898000,
    hargaKPR: 1055034909,
    dp5: 46064944,
    dp10: 92129889,
    cicilan: 4079013,
    badge: null,
    badgeColor: ''
  },
  {
    name: 'TSUBAKI',
    image: '/images/unit-tsubaki.jpg',
    ukuran: '6 x 12',
    lt: 72,
    lb: 46.1,
    lantai: 1,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 957272880,
    hargaKPR: 1149669846,
    dp5: 46831011,
    dp10: 93662022,
    cicilan: 4146847,
    badge: 'Terlaris',
    badgeColor: 'bg-yellow-500'
  },
  {
    name: 'SAKURA',
    image: '/images/unit-sakura.jpg',
    ukuran: '6 x 12',
    lt: 72,
    lb: 71.9,
    lantai: 2,
    kamarTidur: 3,
    kamarMandi: 2,
    carport: '1 + Kanopi',
    hargaCash: 1259073000,
    hargaKPR: 1510087050,
    dp5: 62953650,
    dp10: 144856495,
    cicilan: 5574494,
    badge: 'Premium',
    badgeColor: 'bg-green-600'
  },
  {
    name: 'New SAKURA',
    image: '/images/unit-sakura-new.jpg',
    ukuran: '6 x 12',
    lt: 72,
    lb: 77,
    lantai: 2,
    kamarTidur: 3,
    kamarMandi: 1,
    carport: '1 + Kanopi',
    hargaCash: 1332093129,
    hargaKPR: 1604502418,
    dp5: 67897950,
    dp10: 135759901,
    cicilan: 6346324,
    badge: 'Premium',
    badgeColor: 'bg-green-600'
  },
  {
    name: 'HIMAWARI',
    image: '/images/unit-himawari.jpg',
    ukuran: '8 x 14',
    lt: 112,
    lb: 104.2,
    lantai: 2,
    kamarTidur: 4,
    kamarMandi: 2,
    carport: '2 + Kanopi',
    hargaCash: 1986050850,
    hargaKPR: 2385043502,
    dp5: 99302542,
    dp10: 198605085,
    cicilan: 8793158,
    badge: 'Exclusive',
    badgeColor: 'bg-yellow-600'
  },
]

// Ruko Types
const rukoTypes = [
  {
    name: 'RUKO 2 Lantai',
    image: '/images/ruko-2-lantai.jpg',
    ukuran: '4 x 12',
    lt: 48,
    lb: 48,
    lantai: 2,
    hargaCash: 1950327720,
    hargaKPR: 2353843800,
    cicilan: 8700000,
    badge: 'Investasi',
    badgeColor: 'bg-blue-500'
  },
  {
    name: 'RUKO 3 Lantai',
    image: '/images/ruko-3-lantai.jpg',
    ukuran: '4 x 12',
    lt: 48,
    lb: 72,
    lantai: 3,
    hargaCash: 2310726960,
    hargaKPR: 2788808400,
    cicilan: 10300000,
    badge: 'Premium',
    badgeColor: 'bg-green-600'
  },
]

// Promo Items
const promoItems = [
  'Booking hanya 10 juta',
  'Free PPN',
  'Free DP',
  'Free BPHTB',
  'Free SHM',
  'Free AC',
  'Free Canopy',
  'Free Furnish',
]

// Facilities
const facilities = [
  { name: 'Danau Pribadi', image: '/images/facility-lake-new.jpg', description: 'Danau eksklusif untuk warga' },
  { name: 'Gym Modern', image: '/images/facility-gym-new.jpg', description: 'Peralatan fitness lengkap' },
  { name: 'Clubhouse', image: '/images/facility-clubhouse-new.jpg', description: 'Tempat berkumpul premium' },
  { name: 'Kolam Renang', image: '/images/facility-pool-new.jpg', description: 'Kolam renang keluarga' },
  { name: 'Taman Hijau', image: '/images/facility-park-new.jpg', description: 'Area hijau asri' },
  { name: 'Jogging Track', image: '/images/facility-jogging-new.jpg', description: 'Trekk lari sehat' },
  { name: 'Ikame Water Gear', image: '/images/facility-water-gear.jpg', description: 'Wahana air seru' },
  { name: 'Lapangan Padel', image: '/images/facility-padel.png', description: 'Lapangan olahraga modern' },
]

// Gallery Images - Ganti foto di folder /public/images/gallery/
const galleryImages = [
  '/images/hero-house.jpg',
  '/images/interior-living.jpg',
  '/images/interior-kitchen.jpg',
  '/images/interior-bedroom.jpg',
  '/images/facility-pool-new.jpg',
  '/images/facility-park-new.jpg',
  '/images/facility-lake-new.jpg',
  '/images/house-exterior.jpg',
]

// Why Choose Us
const whyChooseUs = [
  { icon: Shield, title: 'Aman & Terpercaya', description: 'Langsung dari sales resmi developer' },
  { icon: CheckCircle, title: 'Bebas Banjir', description: 'Lokasi tinggi, bebas dari banjir' },
  { icon: Sparkles, title: 'Siap Huni', description: 'Rumah siap ditempati segera' },
  { icon: Heart, title: 'Lingkungan Asri', description: 'Area hijau 1.2 hektar' },
]

// Target Market
const targetMarkets = [
  { icon: Users, title: 'Keluarga', description: 'Lingkungan aman untuk anak' },
  { icon: Heart, title: 'Pasangan Muda', description: 'Hunian pertama impian' },
  { icon: TrendingUp, title: 'Investor', description: 'Nilai investasi meningkat' },
  { icon: Star, title: 'Karyawan', description: 'Lokasi strategis dekat kantor' },
]

export default function LandingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const whatsappNumber = '6285282828727'
  const whatsappMessage = encodeURIComponent('Halo, saya tertarik dengan Springhill Yume Lagoon. Bisa info lebih lanjut?')

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-livia.png"
              alt="Livia Real Estate Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800">Livia Real Estate</h1>
              <p className="text-xs text-green-600 font-medium">Springhill In-House Sales</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('unit')} className="text-sm text-gray-600 hover:text-yellow-600 transition-colors">Tipe Unit</button>
            <button onClick={() => scrollToSection('fasilitas')} className="text-sm text-gray-600 hover:text-yellow-600 transition-colors">Fasilitas</button>
            <button onClick={() => scrollToSection('galeri')} className="text-sm text-gray-600 hover:text-yellow-600 transition-colors">Galeri</button>
            <button onClick={() => scrollToSection('lokasi')} className="text-sm text-gray-600 hover:text-yellow-600 transition-colors">Lokasi</button>
          </nav>
          <Button
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold shadow-lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-house.jpg"
            alt="Rumah Modern di Tangerang"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-1">
              Springhill Yume Lagoon - Cisauk Tangerang
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Rumah Nyaman &{' '}
              <span className="text-yellow-500">Strategis</span>{' '}
              di Tangerang
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Hunian siap huni, <span className="text-green-600 font-semibold">bebas banjir</span>, dekat fasilitas & harga terjangkau untuk keluarga dan investasi.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('unit')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-8 py-6 text-lg shadow-xl shadow-yellow-200"
              >
                Lihat Tipe Rumah
              </Button>
              <Button
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 text-lg shadow-xl shadow-green-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp Sekarang
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Langsung dari sales resmi developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 bg-white" id="tentang">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-700">Tentang Project</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Springhill <span className="text-green-600">Yume Lagoon</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Springhill Yume Lagoon adalah perumahan modern di <span className="font-semibold text-yellow-600">Cisauk Tangerang</span> dengan luas 15 hektar dan area hijau 1.2 hektar. Lingkungan asri dekat danau, cocok untuk tempat tinggal maupun investasi.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-600">15 Ha</p>
                  <p className="text-sm text-gray-500">Luas Total Area</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-yellow-600">1.2 Ha</p>
                  <p className="text-sm text-gray-500">Area Hijau</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/interior-living.jpg"
                alt="Interior Modern Springhill"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800">Cocok Untuk Siapa?</h3>
            <p className="text-gray-500 mt-2">Hunian nyaman untuk semua kalangan</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetMarkets.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="py-20 bg-white" id="unit">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Pilihan Unit</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tipe <span className="text-yellow-500">Rumah</span> Tersedia
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Berbagai pilihan tipe rumah dengan cicilan mulai dari 2 jutaan per bulan
            </p>
          </div>

          {/* House Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitTypes.map((unit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400 overflow-hidden">
                <CardContent className="p-0">
                  {/* Image - Portrait */}
                  <div 
                    className="relative h-72 bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedImage(unit.image)}
                  >
                    <Image
                      src={unit.image}
                      alt={`Tipe ${unit.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {unit.badge && (
                      <Badge className={`absolute top-3 right-3 ${unit.badgeColor} text-white shadow-lg z-10`}>
                        {unit.badge}
                      </Badge>
                    )}
                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.3-4.3"/>
                          <path d="M11 8v6"/>
                          <path d="M8 11h6"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{unit.name}</h3>
                      <p className="text-white/80 text-sm">Ukuran {unit.ukuran} m</p>
                    </div>
                  </div>
                  
                  {/* Specs */}
                  <div className="p-4 bg-gray-50 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Lt:</span>
                      <span className="font-semibold text-gray-800">{unit.lt} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Lb:</span>
                      <span className="font-semibold text-gray-800">{unit.lb} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Lantai:</span>
                      <span className="font-semibold text-gray-800">{unit.lantai}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">KT/KM:</span>
                      <span className="font-semibold text-gray-800">{unit.kamarTidur}/{unit.kamarMandi}</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="p-4">
                    <Button
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik dengan tipe rumah ${unit.name}. Bisa info lebih lanjut?`)}`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Tanya Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ruko Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Tipe <span className="text-yellow-500">Ruko</span>
              </h3>
              <p className="text-gray-500 mt-2">Pilihan ruko untuk investasi bisnis Anda</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {rukoTypes.map((ruko, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image - Portrait */}
                    <div 
                      className="relative h-72 bg-gray-100 cursor-pointer"
                      onClick={() => setSelectedImage(ruko.image)}
                    >
                      <Image
                        src={ruko.image}
                        alt={ruko.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {ruko.badge && (
                        <Badge className={`absolute top-3 right-3 ${ruko.badgeColor} text-white shadow-lg z-10`}>
                          {ruko.badge}
                        </Badge>
                      )}
                      {/* Zoom Icon Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                            <path d="M11 8v6"/>
                            <path d="M8 11h6"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h4 className="text-xl font-bold text-white">{ruko.name}</h4>
                        <p className="text-white/80 text-sm">Ukuran {ruko.ukuran} m</p>
                      </div>
                    </div>
                    
                    {/* Specs */}
                    <div className="p-4 bg-gray-50 grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <p className="text-gray-500">LT</p>
                        <p className="font-semibold text-gray-800">{ruko.lt} m²</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">LB</p>
                        <p className="font-semibold text-gray-800">{ruko.lb} m²</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Lantai</p>
                        <p className="font-semibold text-gray-800">{ruko.lantai}</p>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-4">
                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik dengan ${ruko.name}. Bisa info lebih lanjut?`)}`, '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tanya Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-yellow-600 shadow-lg">
              <Sparkles className="w-4 h-4 mr-1" />
              Promo Spesial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Penawaran <span className="text-white">Terbatas!</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Dapatkan berbagai keuntungan eksklusif dengan membeli rumah sekarang
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {promoItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin tanya tentang promo Springhill Yume Lagoon.')}`, '_blank')}
              className="bg-white text-yellow-600 hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Klaim Promo Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white" id="fasilitas">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Fasilitas Premium</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fasilitas <span className="text-green-600">Lengkap</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Nikmati berbagai fasilitas premium untuk kenyamanan keluarga Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{facility.name}</h3>
                      <p className="text-white/80 text-sm">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50" id="galeri">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700">Galeri</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Galeri <span className="text-yellow-500">Foto</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lihat keindahan rumah dan fasilitas Springhill Yume Lagoon
            </p>
          </div>

          {/* Main Gallery Display */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-4 shadow-xl">
            <Image
              src={galleryImages[currentGalleryIndex]}
              alt="Gallery Image"
              fill
              className="object-cover cursor-pointer"
              onClick={() => setSelectedImage(galleryImages[currentGalleryIndex])}
            />
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            {/* Foto saja tanpa nama */}
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  currentGalleryIndex === index ? 'ring-2 ring-yellow-400 ring-offset-2' : 'hover:opacity-80'
                }`}
              >
                <Image
                  src={image}
                  alt="Gallery Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white" id="lokasi">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Lokasi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lokasi <span className="text-green-600">Strategis</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lokasi strategis di Cisauk Tangerang dengan akses mudah
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2594213642947!2d106.62782061744383!3d-6.360460199999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e536025eb4d5%3A0x6254771153231176!2sSpringhill%20Yume%20Lagoon!5e0!3m2!1sid!2sid!4v1774148960900!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Koordinat Lokasi */}
          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-4 border border-yellow-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Koordinat Lokasi</p>
                  <p className="text-sm text-gray-500">Springhill Yume Lagoon</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Lat:</span>
                  <span className="font-mono font-semibold text-green-600 ml-1">-6.3604602</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-gray-500">Lng:</span>
                  <span className="font-mono font-semibold text-green-600 ml-1">106.6278206</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-800">Cisauk, Tangerang</p>
                <p className="text-sm text-gray-500">Lokasi premium</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-yellow-50 rounded-xl p-4">
              <Trees className="w-6 h-6 text-yellow-600" />
              <div>
                <p className="font-semibold text-gray-800">Lingkungan Asri</p>
                <p className="text-sm text-gray-500">Dekat area hijau</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
              <Shield className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-800">Akses Mudah</p>
                <p className="text-sm text-gray-500">Terhubung jalan utama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mengapa Pilih <span className="text-yellow-500">Livia Real Estate?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Livia Real Estate adalah bagian dari tim sales in-house Springhill yang membantu Anda mendapatkan properti langsung dari developer tanpa perantara.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Sales Resmi Developer</p>
                    <p className="text-sm text-gray-500">Bukan broker independen, jaminan harga resmi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Tanpa Perantara</p>
                    <p className="text-sm text-gray-500">Proses langsung, transparan, dan aman</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Konsultasi Gratis</p>
                    <p className="text-sm text-gray-500">Tim siap membantu Anda 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/logo-livia.png"
                    alt="Livia Real Estate Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Livia Real Estate</h3>
                    <p className="text-green-600">Springhill In-House Sales</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">852-8282-8727</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">28lifiaindah727@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Tangerang, Banten</span>
                  </div>
                </div>
                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">Ikuti Kami</p>
                  <div className="flex gap-3">
                    {socialMediaLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 transition-all ${social.color}`}
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Segera Miliki <span className="text-yellow-400">Rumah Impian</span> Anda
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Konsultasi GRATIS sekarang dan dapatkan penawaran terbaik untuk keluarga Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-10 py-6 text-lg shadow-xl shadow-yellow-400/30"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp Sekarang
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('unit')}
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold px-10 py-6 text-lg"
            >
              Lihat Tipe Rumah
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-livia.png"
                alt="Livia Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-gray-800">Livia Real Estate</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 transition-all ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              © 2025 Livia Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
