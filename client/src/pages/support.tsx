import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { supportFormSchema, type SupportFormData } from "@shared/schema";
import { useState, useEffect } from "react";

const sovraLogo = "/sovra-logo.svg";

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  text: "#F8FAFC",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Support() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Support | Sovra — Get Help with Your App";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Contact the Sovra team for help, bug reports, or feature requests. We're here to help you get the most out of your private second brain.";
  }, []);

  const form = useForm<SupportFormData>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: SupportFormData) => {
      const res = await apiRequest("POST", "/api/support", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err: Error) => {
      toast({
        title: "Failed to send",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SupportFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: COLORS.glassBg,
          borderBottom: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="nav-logo-support">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src={sovraLogo} alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <Button variant="ghost" size="sm" className="text-sm gap-2" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Button>
          </Link>
        </div>
      </motion.nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}>
              <MessageSquare className="w-4 h-4" style={{ color: COLORS.primary }} />
              <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-support-badge">Get in Touch</span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4 text-white" data-testid="text-support-title">
              How can we help?
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg mb-12 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-support-description">
              Send us a message and we'll get back to you as soon as possible. Whether it's a bug, question, or idea — we're listening.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: `${COLORS.accent}0A`, border: `1px solid ${COLORS.accent}30` }}
                data-testid="section-success"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${COLORS.accent}20` }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: COLORS.accent }} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3" data-testid="text-success-title">Message sent!</h2>
                <p className="mb-8" style={{ color: COLORS.muted }} data-testid="text-success-description">
                  Thanks for reaching out. We'll reply to your email as soon as we can.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); form.reset(); }}
                  variant="outline"
                  className="border-white/10 text-white bg-transparent hover:bg-white/5"
                  data-testid="button-send-another"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp}
                custom={3}
                className="rounded-2xl p-8"
                style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }}
                data-testid="section-form"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-support">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                              data-testid="input-subject"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your issue or question in detail..."
                              rows={6}
                              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none"
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full gap-2 font-semibold border-none py-6 text-base"
                      style={{ backgroundColor: COLORS.primary, color: "white" }}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? (
                        <>Sending…</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            <motion.div variants={fadeUp} custom={4} className="mt-10 flex items-center justify-center gap-2 text-sm" style={{ color: COLORS.dimmed }} data-testid="text-support-email">
              <Mail className="w-4 h-4" />
              <span>Or email us directly at <a href="mailto:Info@nammu-tech.com" className="underline underline-offset-2" style={{ color: COLORS.muted }}>Info@nammu-tech.com</a></span>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
