import Image from "next/image";
import Link from "next/link";
import { Bot, MessageSquare, Zap, FileText, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/faktora-logo.png" alt="Faktora Logo" width={28} height={28} className="mr-1 sm:hidden" />
          <Image src="/faktora-logo.png" alt="Faktora Logo" width={48} height={48} className="mr-2 hidden sm:block" />
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body">
            Docs
          </Link>
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body">
            Community
          </Link>
          <Link
            href="#"
            className="bg-[#2463eb] text-white text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-md hover:bg-[#3773f4] transition-colors font-medium font-body"
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 sm:pt-12 pb-12 sm:pb-24">
        <div className="flex flex-col items-center">
          {/* Robot Arm Image */}
          <div className="w-full flex justify-center mb-4 sm:mb-8">
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
              <Image
                src="/robot-arm.png"
                alt="Robotic Arm"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-3xl font-medium mb-1 font-heading">
              <span className="text-[#2463eb]">Talk to AI.</span> Execute on-chain.
            </h1>
            <h1 className="text-xl sm:text-3xl font-medium mb-4 sm:mb-8 font-heading">Automate Defi.</h1>
            <Link
              href="#"
              className="bg-[#2463eb] text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-[#3773f4] transition-colors inline-block font-medium font-body"
            >
              Open App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Header */}
            <div className="md:w-1/4 mb-6 md:mb-0 md:pt-4">
              <h2 className="text-lg sm:text-xl font-medium font-heading">
                On-chain Intelligence advantage
              </h2>
            </div>
            
            {/* Right side - Cards */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Feature 1 */}
                <div className="bg-[#2463eb] rounded-xl p-4 sm:p-6 text-white">
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#3773f4]">
                    <Image src="/ai-wallet.png" alt="AI Wallet" width={24} height={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 font-heading">AI Wallet Agents</h3>
                  <p className="text-xs sm:text-sm opacity-90 font-body">Autonomous wallets with smart execution logic.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6">
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#d2dbea]">
                    <Image src="/multi.png" alt="Multi-agent orchestration" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Multi-agent orchestration
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Agents talk to each other to coordinate complex strategies.</p>
                </div>
                
                {/* Feature 3 */}
                <div className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6">
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#d2dbea]">
                    <Image src="/natural.png" alt="AI Wallet" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Natural Language Acquisition
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Talk to your agent like a human. Real commands. Real execution.</p>
                </div>
                
                {/* Feature 4 */}
                <div className="bg-[#f1f5fd] rounded-xl p-4 sm:p-6">
                  <div className="mb-3 p-2 inline-block rounded-lg bg-[#d2dbea]">
                    <Image src="/unified.png" alt="AI Wallet" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb] font-heading">
                    Unified Liquidity Access
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Faktora AI Agents identify optimal routes and act autonomously.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {/* User */}
            <div className="flex flex-col items-center mx-1 sm:mx-2">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mb-1 sm:mb-2">
                <Image src="/user.png" alt="User" width={24} height={24} className="object-contain sm:w-8 sm:h-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-body">User</span>
            </div>

            {/* Arrow */}
            <div className="mx-1 sm:mx-4">
              <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="sm:w-6 sm:h-6" />
            </div>

            {/* AI Agent */}
            <div className="flex flex-col items-center mx-1 sm:mx-2">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mb-1 sm:mb-2">
                <Image src="/agent.png" alt="AI Agent" width={24} height={24} className="object-contain sm:w-8 sm:h-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-body">AI Agent</span>
            </div>

            {/* Arrow */}
            <div className="mx-1 sm:mx-4">
              <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="sm:w-6 sm:h-6" />
            </div>

            {/* Multi-agent Orchestration */}
            <div className="flex flex-col items-center mx-1 sm:mx-2">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mb-1 sm:mb-2">
                <Image src="/multi-agent.png" alt="Multi-agent Orchestration" width={24} height={24} className="object-contain sm:w-8 sm:h-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-body">
                Multi-agent<br />
                Orchestration
              </span>
            </div>

            {/* Arrow */}
            <div className="mx-1 sm:mx-4">
              <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="sm:w-6 sm:h-6" />
            </div>

            {/* Smart Contract Execution */}
            <div className="flex flex-col items-center mx-1 sm:mx-2">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mb-1 sm:mb-2">
                <Image src="/smart-contract.png" alt="Smart Contract Execution" width={24} height={24} className="object-contain sm:w-8 sm:h-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-body">
                Smart Contract<br />
                Execution
              </span>
            </div>

            {/* Arrow */}
            <div className="mx-1 sm:mx-4">
              <Image src="/arrow.png" alt="Arrow" width={16} height={16} className="sm:w-6 sm:h-6" />
            </div>

            {/* On-Chain Results */}
            <div className="flex flex-col items-center mx-1 sm:mx-2">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mb-1 sm:mb-2">
                <Image src="/onchain.png" alt="On-Chain Results" width={24} height={24} className="object-contain sm:w-8 sm:h-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-body">
                On-Chain<br />
                Results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium pb-6 sm:pb-10 text-center font-heading">You say it. Agents do it.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Use Case 1 */}
            <div className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Swap half of my ETH for the top-yielding LSO and stake it'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Checking Lido, Ankr...</span>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Put 20% of my ETH into the highest lending yield'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Evaluates Aave, Compound, Morpho...</span>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="bg-[#f1f5fd] rounded-lg p-5 sm:p-6">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-sm sm:text-base font-heading">
                'Bridge to Sonic and farm the new meta'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                  <Image src="/robot-agent.png" alt="Bot" width={16} height={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">Auto-bridges, allocates LP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Token Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16 mb-4 sm:mb-8">
        <div className="max-w-6xl mx-auto bg-[#2463eb] rounded-lg p-6 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-10">
            <div>
              <h2 className="text-lg sm:text-2xl font-medium mb-2 font-heading">$FAKT Powers your agents</h2>
              <p className="text-xs sm:text-sm opacity-90 font-body">Unlock upgrades, fund execution, enable governance and more.</p>
            </div>
            <Link
              href="#"
              className="bg-white text-[#2463eb] text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-md hover:bg-[#f1f5fd] transition-colors mt-4 md:mt-0 font-medium font-body"
            >
              Read tokenomics
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Image src="/star.png" alt="Premium" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Access premium orchestration logic</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Image src="/broom.png" alt="Fine Tune" width={16} height={24} className="sm:w-5 sm:h-7" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Pay for agents fine tune</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Image src="/participate.png" alt="Governance" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Participate in AI governance</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Image src="/fund-execution.png" alt="Fund" width={20} height={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-medium mb-1 font-heading">Fund execution pipelines</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/faktora-logo.png" alt="Faktora Logo" width={28} height={28} className="mr-1 sm:hidden" />
          <Image src="/faktora-logo.png" alt="Faktora Logo" width={48} height={48} className="mr-2 hidden sm:block" />
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4] font-body">
            Docs
          </Link>
          <Link
            href="#"
            className="text-xs sm:text-sm bg-[#2463eb] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-[#3773f4] transition-colors font-body"
          >
            Community
          </Link>
        </div>
      </footer>
    </div>
  );
}
