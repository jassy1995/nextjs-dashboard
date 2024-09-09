const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-semibold xs:text-6xl text-4xl text-white xs:leading-[60px] leading-[40px] w-full",
    paragraph: "font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "px-6 ss:px-16 md:px-24",
    paddingY: "py-6 ss:py-8 md:py-10",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "mx-6 ss:mx-16 md:mx-24",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    hero: `flex md:flex-row flex-col space-y-10 md:space-y-0`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
