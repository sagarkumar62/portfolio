
"use client"

import * as THREE from "three";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Suspense, useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Mail, Github } from "lucide-react"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function generateSpherePositions(count = 5000, radius = 6) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    // spherical-to-cartesian with even distribution
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    const r = radius * Math.cbrt(Math.random()) // uniform density
    positions[i3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = r * Math.cos(phi)
  }
  return positions
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => generateSpherePositions(), [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#8b5cf6" size={0.05} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
    </Canvas>
  )
}

export default function Portfolio() {
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "Digital Solutions", logo: "DS" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Future Systems", logo: "FS" },
    { name: "Creative Studio", logo: "CS" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global Particle Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="border-gray-600 text-gray-300 bg-black/50 backdrop-blur-sm px-4 py-2 mb-8 text-sm"
          >
            WELCOME TO SAGAR KUMAR PORTFOLIO
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Premier Frontend
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Development Expert
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Finding the right developer to bring your digital vision to life can be challenging. That&apos;s where I come in.
            As a specialized Frontend Developer with Three.js expertise, I create immersive web experiences that connect
            brands with their audiences, driving engagement and delivering measurable results.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            REQUEST YOUR FREE CONSULTATION
          </Button>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            Join over 50+ businesses to elevate
            <br />
            your digital presence.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-gray-600 text-gray-300 bg-black/50 backdrop-blur-sm px-4 py-2 mb-6"
            >
              WHAT I OFFER
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Comprehensive Frontend
              <br />
              Development Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From interactive 3D experiences to responsive web applications, I deliver cutting-edge solutions that
              drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold">3D</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Three.js Development</h3>
              <p className="text-gray-400 mb-6">
                Create stunning 3D web experiences with interactive animations, immersive environments, and
                WebGL-powered visualizations.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• 3D Product Showcases</li>
                <li>• Interactive Animations</li>
                <li>• WebGL Shaders</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold">⚛</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">React Development</h3>
              <p className="text-gray-400 mb-6">
                Build scalable, performant web applications using React, Next.js, and modern JavaScript frameworks with
                best practices.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Single Page Applications</li>
                <li>• Server-Side Rendering</li>
                <li>• State Management</li>
                <li>• Component Libraries</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold">UI</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Implementation</h3>
              <p className="text-gray-400 mb-6">
                Transform designs into pixel-perfect, responsive interfaces with smooth animations and exceptional user
                experiences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Responsive Design</li>
                <li>• Animation Libraries</li>
                <li>• Accessibility Standards</li>
                <li>• Cross-browser Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Transform Your
            <br />
            Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something extraordinary together. Get in touch for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
