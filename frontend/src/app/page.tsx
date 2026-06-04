"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Shield,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Wrench,
  ChevronRight,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapfreLogo } from "@/components/brand/mapfre-logo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2">
          <MapfreLogo size="md" />
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/manu-alvarez/InfoCool"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <Link href="/dashboard">
            <Button size="sm">
              Abrir Dashboard
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-24 sm:px-10 sm:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <motion.div variants={itemVariants}>
              <Badge variant="default" className="gap-1">
                <Sparkles className="h-2.5 w-2.5" />
                Beta · Junio 2026
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Automatiza tus partes{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-rose-400 bg-clip-text text-transparent">
                MAPFRE
              </span>{" "}
              con IA.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              INFOCOL procesa los expedientes FIN del portal, aplica los códigos de tarifa
              correctos y rellena los formularios. Tú solo revisas y confirmas.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard">
                <Button size="lg">
                  Abrir Dashboard
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/expedientes">
                <Button size="lg" variant="outline">
                  Ver Expedientes
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                RGPD / LOPD compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5" />
                Open Source
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                90% menos tiempo
              </span>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="glass relative overflow-hidden rounded-3xl border border-border/40 p-1 shadow-2xl shadow-primary/10">
              <div className="rounded-[20px] bg-gradient-to-br from-card to-card/50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-muted-foreground">
                      En vivo · InfoCol
                    </span>
                  </div>
                  <Badge variant="success">V67391281</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Descripción
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Fuga de agua en tubería del baño
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">
                      IA · Confianza 97%
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] font-semibold text-primary">
                      YYDDDYT
                    </span>
                    <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] font-semibold text-primary">
                      XADDD2T
                    </span>
                    <span className="rounded-md bg-muted/40 px-2 py-1 font-mono text-[11px] font-semibold text-muted-foreground">
                      SMDDDIT
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-border/40 pt-3">
                    <div>
                      <p className="text-[10px] text-muted-foreground">Mano de obra</p>
                      <p className="text-sm font-semibold">72.50 €</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Materiales</p>
                      <p className="text-sm font-semibold">45.00 €</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Desplazamiento</p>
                      <p className="text-sm font-semibold">0.00 €</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/40 pt-3">
                    <div>
                      <p className="text-[10px] text-muted-foreground">Total</p>
                      <p className="text-xl font-bold text-primary">117.50 €</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-warning/10 px-3 py-1.5 text-[11px] font-medium text-warning">
                      <Clock className="h-3 w-3" />
                      Esperando Aceptar manual
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: Sparkles,
              title: "IA que entiende la tarifa",
              text: "Claude analiza cada descripción y selecciona los códigos MAPFRE correctos en menos de un segundo.",
            },
            {
              icon: Shield,
              title: "100% local, 0% riesgo",
              text: "Tus credenciales viven en tu llavero. La IA solo ve descripciones técnicas, nunca datos personales.",
            },
            {
              icon: Clock,
              title: "De 2 min a 30 seg",
              text: "Lo que antes era un proceso manual de varios minutos, ahora es una confirmación de un click.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl border border-border/30 p-5 transition-all hover:border-primary/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/30 bg-border/30 sm:grid-cols-4"
        >
          {[
            { value: "12", label: "Partes procesados hoy", change: "+24% vs ayer" },
            { value: "1m 24s", label: "Tiempo medio por parte", change: "−32% vs antes" },
            { value: "0", label: "Errores de código", change: "Últimos 30 días" },
            { value: "97%", label: "Confianza de la IA", change: "Claude Sonnet 4" },
          ].map((s) => (
            <div key={s.label} className="bg-card p-5">
              <p className="text-3xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{s.change}</p>
            </div>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Diseñado y desarrollado por{" "}
            <a
              href="https://linkedin.com/in/manu-alvarez"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground transition-colors hover:text-primary"
            >
              Manu Alvarez
            </a>
            {" "}· Creador del producto
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            InfoCool · Beta · 2026 · La Rioja, España
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
