"use client";

import React from "react";
import Link from "next/link";
import { CreateOutlined } from "@mui/icons-material";
import MonitorIcon from '@mui/icons-material/Monitor';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


const Navbar = () => {
  return (
    <nav className="min-h-screen w-[200px] flex flex-col items-center gap-10 shadow-black shadow-lg p-4">
      <h1 className="font-bold text-lg mt-[10px]">OEE-BOX</h1>
      <div className="flex flex-col gap-[20px]">
        <Link href="/" className="flex gap-2">
          <CreateOutlined />
          <p>Input</p>
        </Link>
        <Link href="#  " className="flex gap-2">
          <MonitorIcon />
          <p>Maintenance</p>
        </Link>
        <Link href="/reports" className="flex gap-2">
          <SummarizeIcon />
          <p>Report</p>
        </Link>
        <Link href="/graphical" className="flex gap-2">
          <LeaderboardIcon />
          <p>Graphical</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
