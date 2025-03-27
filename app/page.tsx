import Image from "next/image";
import Link from "next/link";
import { Bot, MessageSquare, Zap, FileText, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/faktora-logo.svg" alt="Faktora Logo" width={30} height={30} className="mr-1" />
          <span className="font-bold text-lg">ai</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4]">
            Docs
          </Link>
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4]">
            Community
          </Link>
          <Link
            href="#"
            className="bg-[#2463eb] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded hover:bg-[#3773f4] transition-colors font-medium"
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-0 pb-6 sm:pb-12">
        <div className="flex flex-col items-center">
          {/* Robot Arm Image */}
          <div className="w-full flex justify-center mb-2 sm:mb-4">
            <div className="relative" style={{ width: "180px", height: "180px" }}>
              <Image
                src="/robot-arm.svg"
                alt="Robotic Arm"
                width={180}
                height={180}
                className="absolute top-0"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-medium mb-1">
              <span className="text-[#2463eb]">Talk to AI.</span> Execute on-chain.
            </h1>
            <h1 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Automate Defi.</h1>
            <Link
              href="#"
              className="bg-[#2463eb] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded hover:bg-[#3773f4] transition-colors inline-block font-medium"
            >
              Open App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-6 sm:py-10 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl font-medium mb-8 text-left">
            On-chain Intelligence advantage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Feature 1 */}
            <div className="bg-[#2463eb] rounded-2xl p-5 sm:p-6 text-white">
              <div className="mb-3 p-2 inline-block rounded-full bg-[#3773f4]">
                <Bot size={18} className="sm:hidden text-white" />
                <Bot size={22} className="hidden sm:block text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-medium mb-1">AI Wallet Agents</h3>
              <p className="text-xs sm:text-sm opacity-90">Autonomous wallets with smart execution logic.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f1f5fd] rounded-2xl p-5 sm:p-6">
              <div className="mb-3 p-2 inline-block rounded-full bg-[#d2dbea]">
                <FileText size={18} className="sm:hidden text-[#2463eb]" />
                <FileText size={22} className="hidden sm:block text-[#2463eb]" />
              </div>
              <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb]">
                Multi-agent orchestration
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Agents talk to each other to coordinate complex strategies.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#f1f5fd] rounded-2xl p-5 sm:p-6">
              <div className="mb-3 p-2 inline-block rounded-full bg-[#d2dbea]">
                <MessageSquare size={18} className="sm:hidden text-[#2463eb]" />
                <MessageSquare size={22} className="hidden sm:block text-[#2463eb]" />
              </div>
              <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb]">
                Natural Language Acquisition
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Talk to your agent like a human. Real commands. Real execution.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#f1f5fd] rounded-2xl p-5 sm:p-6">
              <div className="mb-3 p-2 inline-block rounded-full bg-[#d2dbea]">
                <Zap size={18} className="sm:hidden text-[#2463eb]" />
                <Zap size={22} className="hidden sm:block text-[#2463eb]" />
              </div>
              <h3 className="text-base sm:text-lg font-medium mb-1 text-[#2463eb]">
                Unified Liquidity Access
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Faktora AI Agents identify optimal routes and act autonomously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow Section */}
      <section className="container mx-auto px-4 py-8 sm:py-24 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="hidden sm:flex justify-between items-center mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-2 rounded-md mb-2">
                <MessageSquare size={20} />
              </div>
              <span className="text-[10px] font-medium">User</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-2 rounded-md mb-2">
                <Bot size={20} />
              </div>
              <span className="text-[10px] font-medium">AI Agent</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-2 rounded-md mb-2">
                <Users size={20} />
              </div>
              <span className="text-[10px] font-medium">
                Multi-agent<br />
                Orchestration
              </span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-2 rounded-md mb-2">
                <FileText size={20} />
              </div>
              <span className="text-[10px] font-medium">
                Smart Contract<br />
                Execution
              </span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-2 rounded-md mb-2">
                <Zap size={20} />
              </div>
              <span className="text-[10px] font-medium">
                On-Chain<br />
                Results
              </span>
            </div>
          </div>

          {/* Mobile Architecture Flow */}
          <div className="sm:hidden mb-5">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="bg-[#eaebed] p-1.5 rounded-md mb-1">
                  <MessageSquare size={16} />
                </div>
                <span className="text-[8px] font-medium">User</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#eaebed] p-1.5 rounded-md mb-1">
                  <Bot size={16} />
                </div>
                <span className="text-[8px] font-medium">AI Agent</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#eaebed] p-1.5 rounded-md mb-1">
                  <Users size={16} />
                </div>
                <span className="text-[8px] font-medium">
                  Multi-agent<br />
                  Orchestration
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-[#eaebed] p-1.5 rounded-md mb-1">
                  <FileText size={16} />
                </div>
                <span className="text-[8px] font-medium">
                  Smart Contract<br />
                  Execution
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#eaebed] p-1.5 rounded-md mb-1">
                  <Zap size={16} />
                </div>
                <span className="text-[8px] font-medium">
                  On-Chain<br />
                  Results
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-medium">You say it. Agents do it.</h2>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-6 sm:py-10 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl font-medium mb-5 sm:mb-6">
            How AI agents can help with your decisions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Use Case 1 */}
            <div className="bg-[#f1f5fd] rounded-lg p-4 sm:p-5">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-xs sm:text-sm">
                'Swap half of my ETH for the top-yielding LSO and stake it'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1 sm:p-1.5 rounded-md mr-1.5 sm:mr-2">
                  <Bot size={14} className="sm:hidden text-[#2463eb]" />
                  <Bot size={16} className="hidden sm:block text-[#2463eb]" />
                </div>
                <span className="text-[9px] sm:text-xs text-gray-600">Checking Lido, Ankr...</span>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#f1f5fd] rounded-lg p-4 sm:p-5">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-xs sm:text-sm">
                'Put 20% of my ETH into the highest lending yield'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1 sm:p-1.5 rounded-md mr-1.5 sm:mr-2">
                  <Bot size={14} className="sm:hidden text-[#2463eb]" />
                  <Bot size={16} className="hidden sm:block text-[#2463eb]" />
                </div>
                <span className="text-[9px] sm:text-xs text-gray-600">Evaluates Aave, Compound, Morpho...</span>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="bg-[#f1f5fd] rounded-lg p-4 sm:p-5">
              <p className="text-[#2463eb] font-medium mb-4 sm:mb-5 text-xs sm:text-sm">
                'Bridge to Sonic and farm the new meta'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-1 sm:p-1.5 rounded-md mr-1.5 sm:mr-2">
                  <Bot size={14} className="sm:hidden text-[#2463eb]" />
                  <Bot size={16} className="hidden sm:block text-[#2463eb]" />
                </div>
                <span className="text-[9px] sm:text-xs text-gray-600">Auto-bridges, allocates LP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Token Section */}
      <section className="container mx-auto px-4 py-5 sm:py-8 mb-5 sm:mb-8">
        <div className="max-w-6xl mx-auto bg-[#2463eb] rounded-lg p-4 sm:p-5 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-medium mb-1">$FAKT Powers your agents</h2>
              <p className="text-[10px] sm:text-xs opacity-80">Unlock bonuses, fund execution, enable governance and more.</p>
            </div>
            <Link
              href="#"
              className="bg-white text-[#2463eb] text-[10px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded hover:bg-[#f1f5fd] transition-colors mt-3 md:mt-0 font-medium"
            >
              Read tokenomics
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-1.5 sm:p-2 rounded-full mb-2 sm:mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                  <path d="M12 17.8L5.8 14.4V6.8L12 3.4L18.2 6.8V14.4L12 17.8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                  <path d="M12 17.8L5.8 14.4V6.8L12 3.4L18.2 6.8V14.4L12 17.8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[8px] sm:text-[10px] font-medium">
                Access premium<br />
                orchestration logic
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-1.5 sm:p-2 rounded-full mb-2 sm:mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                  <path d="M12 16V21M12 16L18 21M12 16L6 21M20 4L12 12L4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                  <path d="M12 16V21M12 16L18 21M12 16L6 21M20 4L12 12L4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[8px] sm:text-[10px] font-medium">
                Pay for agents fine<br />
                tune
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-1.5 sm:p-2 rounded-full mb-2 sm:mb-3">
                <Users size={14} className="sm:hidden text-white" />
                <Users size={16} className="hidden sm:block text-white" />
              </div>
              <h3 className="text-[8px] sm:text-[10px] font-medium">
                Participate in<br />
                AI governance
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-1.5 sm:p-2 rounded-full mb-2 sm:mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
                  <path d="M21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M21 9L12 3L3 9M21 9L3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
                  <path d="M21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M21 9L12 3L3 9M21 9L3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[8px] sm:text-[10px] font-medium">
                Fund execution<br />
                pipelines
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/faktora-logo.svg" alt="Faktora Logo" width={24} height={24} className="mr-1 sm:hidden" />
          <Image src="/faktora-logo.svg" alt="Faktora Logo" width={30} height={30} className="mr-1 hidden sm:block" />
          <span className="font-bold text-base sm:text-lg">ai</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="#" className="text-black text-xs sm:text-sm hover:text-[#3773f4]">
            Docs
          </Link>
          <Link
            href="#"
            className="text-xs sm:text-sm bg-[#2463eb] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded hover:bg-[#3773f4] transition-colors"
          >
            Community
          </Link>
        </div>
      </footer>
    </div>
  );
}
