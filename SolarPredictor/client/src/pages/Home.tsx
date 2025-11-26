import { motion } from "framer-motion";
import { Predictor } from "@/components/Predictor";
import { ArrowDown, Zap, Cpu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import assets
import heroVideo from "@assets/generated_videos/futuristic_solar_farm_with_data_overlays.mp4";
import techImage from "@assets/stock_images/solar_panels_technol_c3c1079f.jpg";
import aiImage from "@assets/stock_images/artificial_intellige_0bd8f656.jpg";

export default function Home() {
  const scrollToPredict = () => {
    document.getElementById('predict-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-cover w-full h-full opacity-60"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium tracking-wider uppercase">
              Next Gen Energy Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              AI POWERED <br />
              <span className="text-gradient">SOLAR PREDICTOR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Harness the power of machine learning to forecast solar energy production with unprecedented accuracy.
            </p>
            
            <Button 
              onClick={scrollToPredict}
              className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-black font-bold shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" /> Predict Energy Now
            </Button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={scrollToPredict}
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Cpu,
                title: "Adaptive AI Core",
                desc: "Our algorithms learn from historical weather patterns to refine predictions in real-time."
              },
              {
                icon: Leaf,
                title: "Eco-Optimization",
                desc: "Maximize renewable energy usage and reduce reliance on the grid through smart forecasting."
              },
              {
                icon: Zap,
                title: "Instant Analysis",
                desc: "Get immediate production estimates based on current environmental variables."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Split 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-2xl -z-10" />
              <img 
                src={aiImage} 
                alt="AI Visualization" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold">Data-Driven Precision</h2>
              <p className="text-lg text-muted-foreground">
                Traditional forecasting methods often fail to account for rapid micro-climate changes. Our Adaptive Solar Energy Predictor utilizes deep learning neural networks trained on thousands of hours of meteorological data to provide you with the most accurate production estimates possible.
              </p>
              <ul className="space-y-3">
                {['Neural Network Processing', 'Real-time Weather Integration', 'Historical Trend Analysis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

           {/* Content Split 2 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="text-4xl font-display font-bold">Sustainable Future</h2>
              <p className="text-lg text-muted-foreground">
                By accurately predicting solar output, grid operators and homeowners can better manage energy storage and consumption. This leads to a more stable grid, reduced carbon footprint, and significant cost savings.
              </p>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Read the Research
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-green-500/20 to-primary/20 rounded-2xl blur-2xl -z-10" />
              <img 
                src={techImage} 
                alt="Solar Technology" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prediction Section */}
      <section id="predict-section" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Live Prediction Engine</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Input your current environmental parameters below to generate an instant energy production forecast.
            </p>
          </div>
          
          <Predictor />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 AI Solar Predictor. Powering the future.</p>
        </div>
      </footer>
    </div>
  );
}
