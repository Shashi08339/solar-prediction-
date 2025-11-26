import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Zap, Calendar, Wind, Sun, Gauge, Thermometer, Droplets, Waves } from "lucide-react";

export function Predictor() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    dateHour: new Date().toISOString().slice(0, 16),
    windSpeed: 2.5,
    sunshine: 60,
    airPressure: 1013,
    radiation: 450,
    airTemperature: 22,
    relativeHumidity: 45
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'dateHour' ? value : parseFloat(value) || 0
    }));
  };

  const handlePredict = () => {
    setLoading(true);
    setResult(null);
    
    // Simulate AI processing
    setTimeout(() => {
      // Mock calculation
      // Formula: Radiation * Efficiency factor based on Temp + Wind cooling effect
      const tempEfficiency = 1 - Math.abs(25 - formData.airTemperature) * 0.004;
      const windCooling = 1 + (formData.windSpeed * 0.01);
      const baseOutput = formData.radiation * 0.2 * (formData.sunshine > 0 ? 1 : 0.1);
      
      const output = (baseOutput * tempEfficiency * windCooling).toFixed(2);
      
      setResult(`${output} kW`);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm">
      <CardHeader className="border-b border-border/50 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">Solar Energy Output Model</CardTitle>
            <CardDescription>Enter meteorological parameters to forecast system production</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Date-Hour */}
          <div className="space-y-2 md:col-span-1">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Date-Hour (NMT)
            </Label>
            <Input 
              type="datetime-local" 
              name="dateHour"
              value={formData.dateHour}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
            />
          </div>

          {/* Wind Speed */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Wind className="h-4 w-4" /> Wind Speed (m/s)
            </Label>
            <Input 
              type="number" 
              name="windSpeed"
              value={formData.windSpeed}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
              step="0.1"
            />
          </div>

          {/* Sunshine */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Sun className="h-4 w-4" /> Sunshine (min/hr)
            </Label>
            <Input 
              type="number" 
              name="sunshine"
              value={formData.sunshine}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
            />
          </div>

          {/* Air Pressure */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Gauge className="h-4 w-4" /> Air Pressure (hPa)
            </Label>
            <Input 
              type="number" 
              name="airPressure"
              value={formData.airPressure}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
            />
          </div>

          {/* Radiation */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Waves className="h-4 w-4" /> Radiation (W/m²)
            </Label>
            <Input 
              type="number" 
              name="radiation"
              value={formData.radiation}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
            />
          </div>

          {/* Air Temperature */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Thermometer className="h-4 w-4" /> Air Temperature (°C)
            </Label>
            <Input 
              type="number" 
              name="airTemperature"
              value={formData.airTemperature}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
              step="0.1"
            />
          </div>

          {/* Relative Air Humidity */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Droplets className="h-4 w-4" /> Relative Air Humidity (%)
            </Label>
            <Input 
              type="number" 
              name="relativeHumidity"
              value={formData.relativeHumidity}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border/50 flex items-center justify-between">
          <Button 
            onClick={handlePredict} 
            disabled={loading}
            size="lg"
            className="min-w-[200px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {loading ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
            ) : (
              "Calculate Prediction"
            )}
          </Button>

          {result && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <span className="text-sm font-medium text-muted-foreground">Estimated Output:</span>
              <span className="text-2xl font-bold text-primary">{result}</span>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
