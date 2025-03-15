import React from 'react';
import { LineChart } from 'lucide-react';

const MetricCard = ({ label, value, unit }: {
  label: string;
  value: number;
  unit: string;
}) => (
  <div className="bg-[#111111] p-4">
    <div className="text-red-600 text-sm mb-1">{label}</div>
    <div className="text-2xl font-bold text-white">
      {value}
      <span className="text-sm ml-1 text-gray-400">{unit}</span>
    </div>
  </div>
);

export default function TechnicalSection() {
  return (
    <div className="bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Doskonałość Techniczna
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Monitoring w Czasie Rzeczywistym</h3>
                <p className="text-gray-400">Zaawansowana diagnostyka z transmisją danych na żywo</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-px bg-red-600/20">
              <MetricCard label="Wzrost Mocy" value={45} unit="KM" />
              <MetricCard label="Wzrost Momentu" value={65} unit="Nm" />
              <MetricCard label="Czas Reakcji" value={0.2} unit="ms" />
              <MetricCard label="Wydajność" value={98.5} unit="%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}