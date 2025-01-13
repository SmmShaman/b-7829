import React, { useState, useEffect } from 'react';
import { useTranslations } from "@/hooks/useTranslations";
import { Calendar } from "@/components/ui/calendar";
import { Clock } from "lucide-react";

const ClockSection = () => {
  const { t } = useTranslations();
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      // Update status based on time (Oslo timezone)
      const hour = now.getHours();
      if (hour >= 9 && hour < 17) {
        setStatus(t("status_working"));
      } else if (hour >= 17 && hour < 22) {
        setStatus(t("status_available"));
      } else {
        setStatus(t("status_resting"));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [t]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-2xl font-bold flex items-center gap-2">
        <Clock className="w-6 h-6" />
        {time.toLocaleTimeString()}
      </div>
      <div className="text-lg text-gray-400">
        {status}
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => newDate && setDate(newDate)}
        className="rounded-md border"
      />
    </div>
  );
};

export default ClockSection;