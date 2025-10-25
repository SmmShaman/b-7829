import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_forms')
        .insert([formData]);

      if (error) throw error;

      setFormData({ name: "", email: "", message: "" });
      alert(t("message_sent"));
    } catch (error) {
      console.error("Error sending message:", error);
      alert(t("error_sending"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          {t("contact")}
        </h2>
        <p className="text-gray-300">{t("contact_description")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">{t("name")}</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg glass-card border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">{t("email")}</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-lg glass-card border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">{t("message")}</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full p-3 rounded-lg glass-card border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70"
        >
          {isSubmitting ? t("sending") : t("send_message")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
