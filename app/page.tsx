
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

import {Container,ContainerHead} from "@/components/container";
import {Blog} from "@/components/blog";

export default function Home() {
  return (<>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>𝕄𝔸𝕋ℍ𝔼𝕄𝔸𝕋𝕀ℂ𝕊&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
		“Nature is written in mathematical language.”<br/> &nbsp; &nbsp;— Galileo Galilei
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <Container>
        <ContainerHead>Featured Blogs</ContainerHead>
        <Blog title={"The Joy of Numbers: Why Math Matters"} author={"Author"}>
        When most people hear the word "math," they often think of tedious calculations or complex formulas. However, math is so much more than that! It’s a fascinating world filled with patterns, logic, and creativity. Here’s why embracing math can enrich our lives in unexpected ways.
        </Blog>
        <Blog title={"Embracing the Beauty of Math"} author={"ChatGPT"}>
        Math often gets a bad rap. Many of us remember struggling with equations and feeling overwhelmed by numbers. But what if we took a step back and looked at math from a different perspective?
        </Blog>
   </Container>
   </section>
</>);
}


{/*
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
*/}
