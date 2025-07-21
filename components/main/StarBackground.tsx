"use client"

import * as THREE from 'three'
import React, { useState, useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// @ts-ignore
import *as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props: any) => {
    const ref = useRef<THREE.Points>(null)
  // Generate 5000 points (5000 * 3 floats for x, y, z)
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 })
  )

  // Generate random colors for each star
  const colors = useMemo(() => {
    const arr = new Float32Array(5000 * 3)
        for (let i = 0; i < 5000; i++) {
        arr[i * 3 + 0] = Math.random() // R
        arr[i * 3 + 1] = Math.random() // G
        arr[i * 3 + 2] = Math.random() // B
        }
        return arr
    }, [])

    // Animate rotation and twinkling effect
    useFrame((state, delta) => {
        if (ref.current) {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15

        // Optional: make stars twinkle (change size or opacity over time)
        const material = ref.current.material as THREE.PointsMaterial
        material.opacity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2
        }
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
        <points ref={ref} frustumCulled={false} {...props}>
            <bufferGeometry>
                <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
                />
                <bufferAttribute
                attach="attributes-color"
                args={[colors, 3]}
                />
            </bufferGeometry>
            <PointMaterial
            vertexColors
            transparent
            size={0.001}
            sizeAttenuation
            depthWrite={false}
            />
        </points>
        </group>
    )
    }

const StarsCanvas = () => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas 
        dpr={[1, 2]} // Enables high-res rendering on retina
        camera={{position: [0, 0, 1]}}>
            <Suspense fallback = {null}>
                <StarBackground />
            </Suspense>
        </Canvas>

    </div>
)

export default StarsCanvas
