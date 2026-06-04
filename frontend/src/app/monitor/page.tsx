"use client";

import {
  Activity,
  ArrowDownToLine,
  ArrowUpFromLine,
  Brain,
  Database,
  Globe,
  Network,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const systemMetrics = [
  { label: "CPU", value: 12, unit: "%", color: "bg-info" },
  { label: "RAM", value: 284, unit: "MB", max: 1024, color: "bg-primary" },
  { label: "Red", value: 0.4, unit: "MB/s", color: "bg-success" },
  { label: "Disco", value: 23, unit: "GB libres", color: "bg-warning" },
];

const services = [
  { name: "InfoCol Portal", status: "online", latency: "120ms", icon: Globe },
  { name: "Claude API", status: "online", latency: "420ms", icon: Brain },
  { name: "Local Keychain", status: "online", latency: "0.5ms", icon: ShieldCheck },
  { name: "SQLite DB", status: "online", latency: "2ms", icon: Database },
];

const logStream = [
  { time: "12:42:18", level: "INFO", msg: "Expediente V67391281 procesado correctamente en 12.3s" },
  { time: "12:41:55", level: "INFO", msg: "Análisis IA completado · confianza 97%" },
  { time: "12:41:43", level: "INFO", msg: "Códigos seleccionados: YYDDDYT + XADDD2T" },
  { time: "12:41:30", level: "DEBUG", msg: "Sanitización PII aplicada (3 campos)" },
  { time: "12:41:12", level: "INFO", msg: "Login InfoCol exitoso · sesión cifrada" },
  { time: "12:40:58", level: "INFO", msg: "Browser Chromium iniciado" },
  { time: "12:40:30", level: "WARN", msg: "Latencia API elevada (>400ms) - retry no necesario" },
  { time: "12:39:45", level: "INFO", msg: "Sincronización local completada · 0 pendientes" },
];

const uptime = [
  { day: "Lun", uptime: 100 },
  { day: "Mar", uptime: 100 },
  { day: "Mié", uptime: 100 },
  { day: "Jue", uptime: 99.8 },
  { day: "Vie", uptime: 100 },
  { day: "Sáb", uptime: 100 },
  { day: "Dom", uptime: 100 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
} as const;

const levelColor: Record<string, string> = {
  INFO: "text-info",
  DEBUG: "text-muted-foreground",
  WARN: "text-warning",
  ERROR: "text-danger",
};

export default function MonitorPage() {
  const [trafficIn, setTrafficIn] = useState(2.4);
  const [trafficOut, setTrafficOut] = useState(0.8);
  const [activeUsers, _setActiveUsers] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficIn((v) => Math.max(0.2, Math.min(5, v + (Math.random() - 0.5) * 0.4)));
      setTrafficOut((v) => Math.max(0.1, Math.min(2, v + (Math.random() - 0.5) * 0.2)));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="success" className="gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Operativo
            </Badge>
            <span className="text-xs text-muted-foreground">Tiempo real · refresco 5s</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Monitor del Sistema</h1>
          <p className="mt-1 text-muted-foreground">
            Estado de los servicios, recursos y eventos en vivo
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemMetrics.map((m, idx) => (
          <Card key={m.label} className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">{m.label}</p>
              <Server className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <p className="mt-3 text-2xl font-bold text-foreground">
              {m.value}
              <span className="ml-1 text-sm font-medium text-muted-foreground">{m.unit}</span>
            </p>
            {m.max && (
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(m.value / m.max) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                  className={`h-full rounded-full ${m.color}`}
                />
              </div>
            )}
            {!m.max && (
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, m.value * 20)}%` }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                  className={`h-full rounded-full ${m.color}`}
                />
              </div>
            )}
          </Card>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Servicios</CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">
                  Estado de las dependencias externas
                </p>
              </div>
              <Network className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {services.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.08 }}
                className="flex items-center justify-between rounded-xl border border-border/30 bg-muted/10 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card ring-1 ring-border/40">
                    <s.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">Latencia {s.latency}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-1.5 w-1.5 rounded-full bg-success"
                  />
                  <span className="text-xs font-medium text-success">Online</span>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Tráfico</CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">Últimos 60s</p>
              </div>
              <Wifi className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownToLine className="h-3.5 w-3.5 text-info" />
                  <span className="text-xs font-medium text-foreground">Entrada</span>
                </div>
                <span className="font-mono text-sm font-bold text-info">
                  {trafficIn.toFixed(2)} MB/s
                </span>
              </div>
              <div className="mt-2 h-12 overflow-hidden rounded-lg bg-muted/30">
                <motion.div
                  key={trafficIn}
                  initial={{ height: 0 }}
                  animate={{ height: `${(trafficIn / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-info/40 to-info"
                  style={{ marginTop: "auto" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpFromLine className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Salida</span>
                </div>
                <span className="font-mono text-sm font-bold text-primary">
                  {trafficOut.toFixed(2)} MB/s
                </span>
              </div>
              <div className="mt-2 h-12 overflow-hidden rounded-lg bg-muted/30">
                <motion.div
                  key={trafficOut}
                  initial={{ height: 0 }}
                  animate={{ height: `${(trafficOut / 2) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-primary/40 to-primary"
                  style={{ marginTop: "auto" }}
                />
              </div>
            </div>

            <div className="rounded-xl border border-border/30 bg-muted/10 p-3">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Sesiones activas
              </p>
              <p className="mt-1 text-3xl font-bold text-foreground">{activeUsers}</p>
              <p className="text-[10px] text-muted-foreground">Pedro González · Local</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Stream de Eventos</CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">Últimos 100 eventos</p>
              </div>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-xs space-y-1 max-h-72 overflow-y-auto">
              {logStream.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className="flex items-start gap-3 rounded-md px-2 py-1.5 hover:bg-muted/30 transition-colors"
                >
                  <span className="text-muted-foreground/60 shrink-0">{log.time}</span>
                  <span className={`shrink-0 font-bold ${levelColor[log.level]}`}>{log.level}</span>
                  <span className="text-foreground/80 flex-1">{log.msg}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Disponibilidad</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Últimos 7 días</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-foreground">
                99.97<span className="text-base text-muted-foreground">%</span>
              </p>
              <p className="text-xs text-muted-foreground">SLA acumulado del mes</p>
            </div>
            <div className="space-y-2">
              {uptime.map((d, idx) => (
                <div key={d.day} className="flex items-center gap-3">
                  <span className="w-8 text-xs font-medium text-muted-foreground">{d.day}</span>
                  <div className="flex-1 h-6 overflow-hidden rounded-md bg-muted/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${d.uptime}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + idx * 0.05 }}
                      className={`h-full ${
                        d.uptime === 100
                          ? "bg-gradient-to-r from-success/80 to-success"
                          : "bg-gradient-to-r from-warning/80 to-warning"
                      }`}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-xs font-medium text-foreground">
                    {d.uptime}%
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">100% en local</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Cero datos enviados sin tu confirmación
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
