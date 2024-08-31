'use client'
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Ripple from "@/components/magicui/ripple";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ShinyButton from "@/components/magicui/shiny-button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Drawer } from 'vaul';

export default function HeroSectionSimpleCentred() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            
      <div className="z-10" >
        
      <div>
        <div className="container py-24 lg:py-32">
          {/* Announcement Banner */}
          <div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full mb-[10px] border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Gitribe</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <GradualSpacing
      className="font-display text-center text-4xl  font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Let&apos;s Build Together"
    />
          {/* End Title */}
          <div className="mt-5 max-w-[600px] text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              Gitribe is a platform where you can find open-source project&apos;s to contribute and win exciting reward&apos;s.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
            <div className="z-10 flex flex-row items-center justify-center">
      <ShimmerButton className="shadow-2xl rounded-none">
        <span className="whitespace-pre-wrap flex  justify-center items-center  gap-[10px] text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
          Join Waitlist
          <ArrowRightIcon/>
        </span>
      </ShimmerButton>
    </div>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-gray-100 flex z-20 flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                  <Drawer.Handle className="bg-gray-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium text-[black] mb-4">Drawer for React.</Drawer.Title>
                    <p className="text-gray-600 mb-2">
                      This component can be used as a Dialog replacement on mobile and tablet devices. You can read
                      about why and how it was built{' '}
                      <a
                        target="_blank"
                        className="underline"
                        href="https://emilkowal.ski/ui/building-a-drawer-component"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className="text-gray-600 mb-2">
                      It comes unstyled, has gesture-driven animations, and is made by{' '}
                      <a href="https://emilkowal.ski/" className="underline" target="_blank">
                        Emil Kowalski
                      </a>
                      .
                    </p>
                    <p className="text-gray-600 mb-8">
                      It uses{' '}
                      <a
                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                        className="underline"
                        target="_blank"
                      >
                        Radix's Dialog primitive
                      </a>{' '}
                      under the hood and is inspired by{' '}
                      <a
                        href="https://twitter.com/devongovett/status/1674470185783402496"
                        className="underline"
                        target="_blank"
                      >
                        this tweet.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://github.com/emilkowalski/vaul"
                      target="_blank"
                    >
                      GitHub
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://twitter.com/emilkowalski_"
                      target="_blank"
                    >
                      Twitter
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
    
            
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-muted-foreground">
              Launch Date:
            </span>
            <span className="text-sm font-bold">19 Sep 2024 </span>
            <svg
              className="h-5 w-5 text-muted-foreground"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
              href="https://discord.gg/3CWnj3UV"
            >
              Discord
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="z-0">
    <Ripple></Ripple>
    </div>
    </div>
       
  );
}


