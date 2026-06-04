"use client";

import { Bell, Command, Search } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.15 }}
      className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-border/30 bg-background/60 px-8 backdrop-blur-2xl"
    >
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar expedientes, códigos, clientes..."
          className="glass-subtle h-10 w-full rounded-xl pl-11 pr-16 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 rounded-md border border-border/50 bg-muted/50 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground sm:flex">
          <Command className="h-2.5 w-2.5" /> K
        </kbd>
      </div>

      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-card/40 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-white">
            3
          </span>
        </motion.button>

        <div className="mx-1 h-6 w-px bg-border/50" />

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-border/40 bg-card/40 pl-1.5 pr-3 py-1.5 transition-colors hover:border-primary/30"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-700 text-[11px] font-bold text-white">
            PG
          </div>
          <div className="text-sm">
            <p className="font-semibold leading-none text-foreground">Pedro G.</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">Online</p>
          </div>
          <div className="ml-1 h-2 w-2 rounded-full bg-success shadow-sm shadow-success/50" />
        </motion.div>
      </div>
    </motion.header>
  );
}
