"use client"

import { useState, useRef, MouseEvent } from "react"
import Image from "next/image"

interface ImageMagnifierProps {
  src: string
  alt: string
  width: number
  height: number
  magnifierHeight: number
  magnifierWidth: number
  zoomLevel: number
}

export default function ImageMagnifier({
  src,
  alt,
  width,
  height,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 2.5
}: ImageMagnifierProps) {
  const [[x, y], setXY] = useState([0, 0])
  const [[imgWidth, imgHeight], setSize] = useState([0, 0])
  const [showMagnifier, setShowMagnifier] = useState(false)

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%"
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onMouseEnter={(e) => {
          // Get image size and position
          const elem = e.currentTarget
          const { width, height } = elem.getBoundingClientRect()
          setSize([width, height])
          setShowMagnifier(true)
        }}
        onMouseMove={(e: MouseEvent) => {
          // Get mouse position
          const elem = e.currentTarget
          const { top, left } = elem.getBoundingClientRect()

          // Calculate cursor position on the image
          const x = e.pageX - left - window.scrollX
          const y = e.pageY - top - window.scrollY
          setXY([x, y])
        }}
        onMouseLeave={() => {
          setShowMagnifier(false)
        }}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            // Move magnifier so center is at cursor
            left: `${x - magnifierWidth / 2}px`,
            top: `${y - magnifierHeight / 2}px`,
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            opacity: "1",
            border: "2px solid #rose-500",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            pointerEvents: "none",
            zIndex: 999,
            borderRadius: "100%",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)"
          }}
        />
      )}
    </div>
  )
} 