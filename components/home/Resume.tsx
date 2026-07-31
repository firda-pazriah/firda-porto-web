import { CloudDownload } from "lucide-react";
import Accent from "../accent";
import Image from "next/image";

import earthImage from "@/public/images/earth.webp";
import { DialogDownloadResume } from "../dialog-download-resume";

export default function Resume() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-background"
    >
      <Image
        src={earthImage}
        alt="Earth Image"
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center dark:hidden"
      />
      <Image
        src={earthImage}
        alt="Earth Image"
        className="absolute inset-0 -z-10 size-full object-cover object-right not-dark:hidden md:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <Accent position="center" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">My Resume</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
          Download My Latest CV
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
        A record of my professional journey in software engineering role
      </p>
      <div className="glass outline-1 outline-offset-5 rounded-md flex flex-col gap-6 justify-center items-center py-18 mt-16 outline-indigo-400 max-w-2xl mx-auto">
        <CloudDownload size={64} />
        <span>Click here to download my latest CV</span>
        <DialogDownloadResume />
      </div>
    </section>
  );
}
