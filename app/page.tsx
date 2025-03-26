import Image from "next/image"
import Link from "next/link"
import {
  Bot,
  MessageSquare,
  Zap,
  FileText,
  Droplet,
  Star,
  Coins,
  Users,
  PackageIcon as PipelineIcon,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="container mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="Faktora Logo" width={40} height={40} className="mr-1" />
          <span className="font-bold text-xl">ai</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-black hover:text-[#3773f4]">
            Docs
          </Link>
          <Link href="#" className="text-black hover:text-[#3773f4]">
            Community
          </Link>
          <Link
            href="#"
            className="bg-[#2463eb] text-white px-5 py-2 rounded-full hover:bg-[#3773f4] transition-colors font-medium"
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-8 relative pt-0 pb-28">
        <div className="flex flex-col items-center">
          {/* Robot Arm Image - positioned to come from top */}
          <div className="w-full flex justify-center mb-12">
            <div className="relative" style={{ height: "320px", width: "320px" }}>
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Robotic Arm"
                width={320}
                height={320}
                className="absolute top-0"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl font-medium mb-2">
              <span className="text-[#2463eb]">Talk to AI.</span> Execute on-chain.
            </h1>
            <h1 className="text-4xl font-medium mb-14">Automate Defi.</h1>
            <Link
              href="#"
              className="bg-[#2463eb] text-white px-6 py-3 rounded-full hover:bg-[#3773f4] transition-colors inline-block font-medium"
            >
              Open App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-8 py-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/4">
            <h2 className="text-3xl font-medium">
              On-chain Intelligence
              <br />
              advantage
            </h2>
          </div>

          <div className="md:w-3/4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#2463eb] rounded-xl p-8 text-white">
                <div className="mb-6 p-3 inline-block rounded-full bg-[#3773f4]">
                  <Bot size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">AI Wallet Agents</h3>
                <p className="text-sm">Autonomous wallets with smart execution logic.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#eaebed] rounded-xl p-8">
                <div className="mb-6 p-3 inline-block rounded-full bg-[#d2dbea]">
                  <FileText size={28} className="text-[#2463eb]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2463eb]">Multi-agent orchestration</h3>
                <p className="text-sm">Agents talk to each other to coordinate complex strategies.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#eaebed] rounded-xl p-8">
                <div className="mb-6 p-3 inline-block rounded-full bg-[#d2dbea]">
                  <MessageSquare size={28} className="text-[#2463eb]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2463eb]">Natural Language Acquisition</h3>
                <p className="text-sm">
                  Talk to your agent like a human.
                  <br />
                  Real commands. Real execution.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#eaebed] rounded-xl p-8">
                <div className="mb-6 p-3 inline-block rounded-full bg-[#d2dbea]">
                  <Droplet size={28} className="text-[#2463eb]" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2463eb]">Unified Liquidity Access</h3>
                <p className="text-sm">
                  Faktora AI Agents identify optimal
                  <br />
                  routes and act autonomously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="container mx-auto px-8 py-28 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-24">
            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-3 rounded-lg mb-3">
                <MessageSquare size={24} />
              </div>
              <span className="text-xs">User</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-3 rounded-lg mb-3">
                <Bot size={24} />
              </div>
              <span className="text-xs">AI Agent</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-3 rounded-lg mb-3">
                <Users size={24} />
              </div>
              <span className="text-xs">
                Multi-agent
                <br />
                Orchestration
              </span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-3 rounded-lg mb-3">
                <FileText size={24} />
              </div>
              <span className="text-xs">
                Smart Contract
                <br />
                Execution
              </span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[#bbbbbb]"></div>

            <div className="flex flex-col items-center">
              <div className="bg-[#eaebed] p-3 rounded-lg mb-3">
                <Zap size={24} />
              </div>
              <span className="text-xs">
                On-Chain
                <br />
                Results
              </span>
            </div>
          </div>

          <h2 className="text-4xl font-medium">You say it. Agents do it.</h2>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-8 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-[#eaebed] rounded-xl p-8">
              <p className="text-[#2463eb] font-medium mb-12 text-lg">
                'Swap half of my ETH for the top-yielding LSO and stake it'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-2 rounded-lg mr-3">
                  <Bot size={20} className="text-[#2463eb]" />
                </div>
                <span className="text-sm text-gray-600">Checking Lido, Ankr, ...</span>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#eaebed] rounded-xl p-8">
              <p className="text-[#2463eb] font-medium mb-12 text-lg">
                'Put 20% of my ETH into the highest lending yield'
              </p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-2 rounded-lg mr-3">
                  <Bot size={20} className="text-[#2463eb]" />
                </div>
                <span className="text-sm text-gray-600">Evaluating Aave, Compound, Morpho, ...</span>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-[#eaebed] rounded-xl p-8">
              <p className="text-[#2463eb] font-medium mb-12 text-lg">'Bridge to Sonic and farm the new meta'</p>
              <div className="flex items-center">
                <div className="bg-[#d2dbea] p-2 rounded-lg mr-3">
                  <Bot size={20} className="text-[#2463eb]" />
                </div>
                <span className="text-sm text-gray-600">Auto-bridges, allocates LP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="container mx-auto px-8 py-16 mb-28">
        <div className="max-w-6xl mx-auto bg-[#2463eb] rounded-xl p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-medium mb-2">$FAKT Powers your agents</h2>
              <p className="text-sm opacity-80">Unlock bonuses, fund execution, enable governance and more.</p>
            </div>
            <Link
              href="#"
              className="bg-white text-[#2463eb] px-5 py-2 rounded-full hover:bg-[#eaebed] transition-colors mt-6 md:mt-0 font-medium"
            >
              Read tokenomics
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-4 rounded-full mb-6">
                <Star size={24} />
              </div>
              <h3 className="text-sm font-medium">
                Access premium
                <br />
                orchestration logic
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-4 rounded-full mb-6">
                <Coins size={24} />
              </div>
              <h3 className="text-sm font-medium">
                Pay for agents fine
                <br />
                tune
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-4 rounded-full mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-sm font-medium">
                Participate in
                <br />
                AI governance
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#3773f4] p-4 rounded-full mb-6">
                <PipelineIcon size={24} />
              </div>
              <h3 className="text-sm font-medium">
                Fund execution
                <br />
                pipelines
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-8 py-8 flex justify-between items-center border-t border-[#eaebed]">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="Faktora Logo" width={40} height={40} className="mr-1" />
          <span className="font-bold text-xl">ai</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-black hover:text-[#3773f4]">
            Docs
          </Link>
          <Link
            href="#"
            className="bg-[#2463eb] text-white px-5 py-2 rounded-full hover:bg-[#3773f4] transition-colors font-medium"
          >
            Community
          </Link>
        </div>
      </footer>
    </div>
  )
}

