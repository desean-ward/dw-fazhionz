import tw from "twin.macro";

export const HeroWrapper = tw.section`
    relative 
    z-[10]
    w-screen 
    h-screen
    bg-black
    text-white
    overflow-hidden
    px-8
`;

export const HeroContainer = tw.div`
`;

export const RevelearsContainer = tw.div`
    fixed 
    top-0 
    left-0 
    w-screen 
    h-screen 
    flex 
    flex-col 
    z-[2] 
`;

export const Revealer = tw.div`
    flex-1 
    h-full
    w-full 
    bg-black
    absolute
`;

export const HeroImagesContainer = tw.div`
    w-full 
    h-full 
    absolute 
    left-0 
    top-0
    origin-[center center] 
    will-change-transform
`;

export const HeroImage = tw.img`
    absolute 
    left-0 
    top-0
    w-full 
    h-full 
    will-change-transform 
    opacity-0
    
`;

export const HeroContent = tw.div`
    relative 
    h-full 
    w-full
`;

export const Navbar = tw.ul`
    absolute 
    right-0 
    w-1/2 
    p-[2em] 
    flex 
    justify-end 
    gap-[1em]
`;

export const NavItem = tw.li`
    relative 
    text-lg
    font-medium
    list-none
    hover:text-[maroon]
    cursor-pointer
`;

export const GridBackgroundContainer = tw.div`
    absolute 
    inset-0
    opacity-50
    -z-10
`

export const GridBackground = tw.img`
    w-full 
    h-full
    object-cover
`

export const CoverImageContainer = tw.div`
    absolute 
    right-[1.5em]
    -translate-x-[1.5em]
    -bottom-[11.5em]
    md:bottom-[2em] 
    w-full
    md:w-[40%] 
    h-[50%]
    md:h-[40%]
    scale-y-0
    rounded-lg 
    overflow-hidden
`;

export const CoverImage = tw.img`
    w-full 
    h-full
    saturate-0
    object-fill
`;

export const SiteInfoContainer = tw.div`
    absolute
    top-[50%]
    md:top-[72.5%]
    lg:top-[46%] 
    md:w-1/2 
    h-1/2 
    flex 
    flex-col 
    lg:flex-row
`;

export const SiteInfo = tw.div`
    flex 
    w-full
    items-end
    lg:mb-[-1rem]
`;

export const SiteLogo = tw.div`
    relative 
    top-24 
    md:top-36 
    lg:top-28
    
    flex 
    flex-col
    items-start
    lg:flex-row 
    lg:items-end
    gap-[1em]
`;

export const LogoTitle = tw.div`
    text-[10vw]
    md:text-[5vw]
    font-medium
    leading-none
    tracking-[0.01em]
`;