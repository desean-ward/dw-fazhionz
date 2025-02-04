import React, { useEffect } from "react";
import {
  CoverImage,
  CoverImageContainer,
  GridBackgroundContainer,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroImagesContainer,
  HeroWrapper,
  LogoTitle,
  // Navbar,
  // NavItem,
  Revealer,
  RevelearsContainer,
  SiteInfo,
  SiteInfoContainer,
  SiteLogo,
} from "./hero.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

const Hero = () => {
  useGSAP(() => {
    if (typeof document === undefined) return;

    const splitH2 = new SplitType(".site-info h2", {
      types: "lines",
    });

    splitH2.lines.forEach((line) => {
      const text = line.textContent;
      const wrapper = document.createElement("div");
      wrapper.className = "line";
      const span = document.createElement("span");
      span.textContent = text;
      wrapper.appendChild(span);
      line.parentNode.replaceChildren(wrapper, line);
    });

    const mainTl = gsap.timeline();
    const revealerTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    revealerTl
      .to(".r-1", {
        y: "-100vh",
        duration: 1.5,
      })
      .to(
        ".r-2",
        {
          y: "100vh",
          duration: 1.5,
        },
        "<"
      );

    gsap.set(".img", {
      scale: 1.25,
    });

    gsap.set(["#cover-image", "#r-3"], { visibility: "hidden" });

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 1.25,
      delay: 0.5,
      ease: "power4.inOut",
    });

    // Get all of the images, except the first
    const images = document.querySelectorAll(".img:not(:first-child");

    // Fade in each image consecutively
    images.forEach((img, index) => {
      scaleTl.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
      });
    }, ">-0.5");

    mainTl
      .add(revealerTl)
      .add(scaleTl, "-=1.25")
      .add(() => {
        document
          .querySelectorAll(".img:not(.main)")
          .forEach((img) => img.remove());

        const state = Flip.getState(".main");

        const imagesContainer = document.querySelector(".images");
        imagesContainer.classList.add("stacked-container");

        document.querySelectorAll(".main").forEach((img, i) => {
          img.classList.add("stacked");
          img.style.order = i;
          gsap.set(".img.stacked", {
            clearProps: "transform, top, left",
          });
        });

        return Flip.from(state, {
          duration: 1.5,
          absolute: true,
          stagger: {
            amount: -0.3,
          },
          ease: "power4.in",
        });
      })
      .to(".word h1, .nav-item p, .line p, .line span", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1.25,
      })
      .to(["#cover-image", "#r-3"], { visibility: "visible", delay: -1 })

      .to(
        "#r-3",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );
  }, []);

  return (
    <HeroWrapper>
      <HeroContainer>
        {/* Revealers Container */}
        <RevelearsContainer>
          <Revealer className='top-0 r-1'></Revealer>
          <Revealer className='bottom-0 r-2'></Revealer>
        </RevelearsContainer>
        
        <GridBackgroundContainer>
          <img src="/images/hero/grid-background.png" alt="Grid Background" className="absolute inset-0" />
        </GridBackgroundContainer>
        
        {/* Hero Images Container */}
        <HeroImagesContainer className='images'>
          <HeroImage
            className='img'
            src='/images/hero/hero-1.jpg'
            alt='Hero Image 1'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-2.jpg'
            alt='Hero Image 2'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-3.jpg'
            alt='Hero Image 3'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-4.jpg'
            alt='Hero Image 4'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-5.jpg'
            alt='Hero Image 5'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-6.jpg'
            alt='Hero Image 6'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-7.jpg'
            alt='Hero Image 7'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-8.jpg'
            alt='Hero Image 8'
          />
        </HeroImagesContainer>

        {/* Hero Content */}
        <HeroContent>
          {/* Logo */}
          <SiteLogo id='site-logo'>
            <LogoTitle id='logo-title'>
              <div className='word fat-face'>
                <h1>D.W.</h1>
              </div>{" "}
              <div className='word fat-face'>
                <h1>Fazhionz!</h1>
              </div>
            </LogoTitle>

            <div className='line'>
              <p className='tagline'>
                Modern Apparel For Modern Mindz{" "}
                <sup className='absolute -top-[0.125em]'>&copy;</sup>
              </p>
            </div>
          </SiteLogo>
        </HeroContent>

        {/* Navbar
        <Navbar id='navbar'>
          <NavItem className='nav-item'>
            <p>Home</p>
          </NavItem>
          <NavItem className='nav-item'>
            <p>Shop</p>
          </NavItem>
          <NavItem className='nav-item'>
            <p>Contact Us</p>
          </NavItem>
          <NavItem className='nav-item'>
            <p></p>
          </NavItem>
        </Navbar> */}

        {/* Cover Image */}
        <CoverImageContainer id='cover-image'>
          <Revealer id='r-3' />
          <CoverImage src='/images/hero/hero-cover.jpeg' alt='Cover Image' />
        </CoverImageContainer>

        {/* Site Info Container */}
        <SiteInfoContainer>
          <SiteInfo className='site-info row'>
            <div className='col'>
              <div className='line'>
                <p className='font-medium uppercase featured'>
                  Featured Stylez
                </p>
              </div>
            </div>

            {/* Stacked Images */}
            <div></div>
          </SiteInfo>
          <SiteInfo className='site-info'>
            <div className='line'>
              <p className='copy text-balance'>
                Discover bold, modern fashion with D.W Fazhionz!. From statement
                pieces to timeless essentials, we bring elegance and confidence
                to every wardrobe. Redefine your look—because fashion is who you
                are.
              </p>
            </div>
          </SiteInfo>
        </SiteInfoContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
