"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-3 sm:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="cursor-pointer">
            <Image src="/faktora-logo.png" alt="Faktora Logo" width={28} height={28} className="mr-1 sm:hidden" />
            <Image src="/faktora-logo.png" alt="Faktora Logo" width={48} height={48} className="mr-2 hidden sm:block" />
          </a>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="https://faktora-ai.gitbook.io/" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body" target="_blank" rel="noopener noreferrer">
            Docs
          </Link>
          <Link href="https://T.me/faktoraAI" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body" target="_blank" rel="noopener noreferrer">
            Community
          </Link>
          <Link
            href="https://app.faktora.ai"
            className="bg-[#2463eb] text-white text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-md hover:bg-[#3773f4] transition-colors font-medium font-body"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-8 sm:pb-24">
      <div className="flex flex-col items-center">
          {/* Robot Arm Image */}
          <motion.div 
            className="w-full flex justify-center sm:justify-start sm:pl-[20%] mb-2 sm:mb-4 mt-0 sm:-mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[160px] h-[160px] sm:w-[300px] sm:h-[300px]">
              <Image
                src="/robot-arm.png"
                alt="Robotic Arm"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-center max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-xl sm:text-3xl font-medium mb-1 font-heading">
              <span className="text-[#2463eb]">Talk to AI.</span> Execute on-chain.
            </h1>
            <h1 className="text-xl sm:text-3xl font-medium mb-3 sm:mb-8 font-heading">Automate Defi.</h1>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://app.faktora.ai"
                className="bg-[#2463eb] text-white text-sm sm:text-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-[#3773f4] transition-colors inline-block font-medium font-body"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open App
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Header */}
            <motion.div 
              className="md:w-1/4 mb-6 md:mb-0 md:pt-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg sm:text-xl font-medium font-heading">
                On-chain Intelligence advantage
              </h2>
            </motion.div>
            
            {/* Right side - Cards */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Feature 1 */}
                <motion.div 
                  className="bg-[#2463eb] rounded-xl p-4 sm:p-6 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-3 p-2 inline-block rounded-md bg-[#3773f4]">
                    <Image 
                      src="/ai-wallet.png" 
                      alt="AI Wallet" 
                      width={24} 
                      height={24} 
                      className="sm:w-8 sm:h-8 w-6 h-6" 
                      quality={100}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 font-heading">AI Wallet Agents</h3>
                  <p className="text-xs sm:text-sm opacity-90 font-body">Autonomous wallets with smart execution logic.</p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#D2DBEA]">
                    <Image 
                      src="/multi.png" 
                      alt="Multi-agent orchestration" 
                      width={20} 
                      height={20} 
                      className="sm:w-6 sm:h-6 w-5 h-5" 
                      quality={100}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Multi-agent orchestration
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Agents talk to each other to coordinate complex strategies.</p>
                </motion.div>
                
                {/* Feature 3 */}
                <motion.div 
                  className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#D2DBEA]">
                    <Image 
                      src="/natural.png" 
                      alt="Natural Language" 
                      width={20} 
                      height={20} 
                      className="sm:w-6 sm:h-6 w-5 h-5" 
                      quality={100}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Natural Language Acquisition
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Talk to your agent like a human. Real commands. Real execution.</p>
                </motion.div>
                
                {/* Feature 4 */}
                <motion.div 
                  className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-3 p-2 inline-block rounded-md bg-[#D2DBEA]">
                    <Image 
                      src="/unified.png" 
                      alt="Unified Interface" 
                      width={20} 
                      height={20} 
                      className="sm:w-6 sm:h-6 w-5 h-5" 
                      quality={100}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Unified Liquidity Access
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Faktora AI Agents identify optimal routes and act autonomously.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl font-medium mb-8 sm:mb-12 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How it works
          </motion.h2>
          
          {/* Mobile View (Vertical Flow) */}
          <div className="flex flex-col gap-6 sm:hidden">
            {/* Step 1 */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#f1f5fd] rounded-xl p-4 flex-1">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-3">
                    <Image src="/user.png" alt="User" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2463eb] font-heading">User</h3>
                    <p className="text-xs text-gray-600 font-body">Gives natural language instructions</p>
                  </div>
                </div>
              </div>
              <div className="mx-2 flex justify-center">
                <motion.div 
                  className="bg-[#e0e7f7] rounded-full p-1 rotate-90"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="rotate-90" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#f1f5fd] rounded-xl p-4 flex-1">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-3">
                    <Image src="/agent.png" alt="AI Agent" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2463eb] font-heading">AI Agent</h3>
                    <p className="text-xs text-gray-600 font-body">Interprets and plans execution</p>
                  </div>
                </div>
              </div>
              <div className="mx-2 flex justify-center">
                <motion.div 
                  className="bg-[#e0e7f7] rounded-full p-1 rotate-90"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                >
                  <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="rotate-90" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-[#f1f5fd] rounded-xl p-4 flex-1">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-3">
                    <Image src="/multi-agent.png" alt="Multi-agent Orchestration" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2463eb] font-heading">Multi-agent Orchestration</h3>
                    <p className="text-xs text-gray-600 font-body">Coordinates complex strategies</p>
                  </div>
                </div>
              </div>
              <div className="mx-2 flex justify-center">
                <motion.div 
                  className="bg-[#e0e7f7] rounded-full p-1 rotate-90"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                >
                  <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="rotate-90" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-[#f1f5fd] rounded-xl p-4 flex-1">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-3">
                    <Image src="/smart-contract.png" alt="Smart Contract Execution" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2463eb] font-heading">Smart Contract Execution</h3>
                    <p className="text-xs text-gray-600 font-body">Securely executes transactions</p>
                  </div>
                </div>
              </div>
              <div className="mx-2 flex justify-center">
                <motion.div 
                  className="bg-[#e0e7f7] rounded-full p-1 rotate-90"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
                >
                  <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="rotate-90" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-[#f1f5fd] rounded-xl p-4 flex-1">
                <div className="flex items-center">
                  <div className="bg-[#d2dbea] p-2 rounded-lg mr-3">
                    <Image src="/onchain.png" alt="On-Chain Results" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2463eb] font-heading">On-Chain Results</h3>
                    <p className="text-xs text-gray-600 font-body">Verifiable blockchain outcomes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Desktop View (Horizontal Flow) */}
          <div className="hidden sm:flex justify-between items-center">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-3 p-5">
                <Image src="/user.png" alt="User" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-md font-medium text-[#2463eb] mb-1 font-heading">User</h3>
              <p className="text-xs text-gray-600 max-w-[120px] font-body">Gives natural language instructions</p>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-shrink-0"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="rounded-full p-2">
                <Image src="/arrow.png" alt="Arrow" width={20} height={20} />
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-3 p-5">
                <Image src="/agent.png" alt="AI Agent" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-md font-medium text-[#2463eb] mb-1 font-heading">AI Agent</h3>
              <p className="text-xs text-gray-600 max-w-[120px] font-body">Interprets and plans execution</p>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-shrink-0"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.1 }}
            >
              <div className="rounded-full p-2">
                <Image src="/arrow.png" alt="Arrow" width={20} height={20} />
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-3 p-5">
                <Image src="/multi-agent.png" alt="Multi-agent Orchestration" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-md font-medium text-[#2463eb] mb-1 font-heading">Multi-agent</h3>
              <p className="text-xs text-gray-600 max-w-[120px] font-body">Coordinates complex strategies</p>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-shrink-0"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              <div className="rounded-full p-2">
                <Image src="/arrow.png" alt="Arrow" width={20} height={20} />
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-3 p-5">
                <Image src="/smart-contract.png" alt="Smart Contract Execution" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-md font-medium text-[#2463eb] mb-1 font-heading">Execution</h3>
              <p className="text-xs text-gray-600 max-w-[120px] font-body">Securely executes transactions</p>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              className="flex-shrink-0"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              <div className="rounded-full p-2">
                <Image src="/arrow.png" alt="Arrow" width={20} height={20} />
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-3 p-5">
                <Image src="/onchain.png" alt="On-Chain Results" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-md font-medium text-[#2463eb] mb-1 font-heading">Results</h3>
              <p className="text-xs text-gray-600 max-w-[120px] font-body">Verifiable blockchain outcomes</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl font-medium pb-6 sm:pb-10 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            You say it. Agents do it.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Use Case 1 */}
            <motion.div 
              className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Swap half of my ETH for the top-yielding LSO and stake it'
              </p>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Checking Lido, Ankr...</span>
              </motion.div>
            </motion.div>

            {/* Use Case 2 */}
            <motion.div 
              className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Put 20% of my ETH into the highest lending yield'
              </p>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Evaluates Aave, Compound, Morpho...</span>
              </motion.div>
            </motion.div>
            
            {/* Use Case 3 */}
            <motion.div 
              className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Bridge to Sonic and farm the new meta'
              </p>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Auto-bridges, allocates LP</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Token Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16 mb-4 sm:mb-8">
        <motion.div 
          className="max-w-6xl mx-auto bg-[#2463eb] rounded-lg p-6 sm:p-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-10">
            <div>
              <h2 className="text-lg sm:text-2xl font-medium mb-2 font-heading">$FAKT Powers your agents</h2>
              <p className="text-xs sm:text-sm opacity-90 font-body">Unlock upgrades, fund execution, enable governance and more.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="bg-white text-[#2463eb] text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-md hover:bg-[#f1f5fd] transition-colors mt-4 md:mt-0 font-medium font-body"
              >
                Read tokenomics
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-10">
            <motion.div 
              className="flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-lg mb-2 sm:mb-4">
                <Image src="/star.png" alt="Premium" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Access premium<br />orchestration logic</h3>
            </motion.div>

            <motion.div 
              className="flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#3773f4] p-2 sm:pb-3 sm:pr-4 sm:pl-3 sm:pt-3 rounded-lg mb-2 sm:mb-4">
                <Image src="/broom.png" alt="Fine Tune" width={16} height={24} className="sm:w-5 sm:h-7" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Pay for agents<br />fine tune</h3>
            </motion.div>

            <motion.div 
              className="flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-lg mb-2 sm:mb-4">
                <Image src="/participate.png" alt="Governance" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Participate in<br />AI governance</h3>
            </motion.div>

            <motion.div 
              className="flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-lg mb-2 sm:mb-4">
                <Image src="/fund-execution.png" alt="Fund" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Fund execution<br />pipelines</h3>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="cursor-pointer">
            <Image src="/faktora-logo.png" alt="Faktora Logo" width={28} height={28} className="mr-1 sm:hidden" />
            <Image src="/faktora-logo.png" alt="Faktora Logo" width={48} height={48} className="mr-2 hidden sm:block" />
          </a>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="https://faktora-ai.gitbook.io/" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body" target="_blank" rel="noopener noreferrer">
            Docs
          </Link>
          <Link
            href="https://T.me/faktoraAI"
            className="text-xs sm:text-sm bg-[#2463eb] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-[#3773f4] transition-colors font-body"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </Link>
        </div>
      </footer>
    </div>
  );
}
