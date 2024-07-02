import Section from "./Section";

const ResumeDownload = () => {
  return (
    <Section className="flex items-baseline">
      <button className="bg-accent/30 font-mono border border-accent p-1 m-1  text-sm rounded-sm text-primary hover:bg-accent/50 transition-colors duration-300 ease-in-out ">
        <a href="/pdf/cvad.pdf" download target="_blank">
          Download CV
        </a>
      </button>
    </Section>
  );
};

export default ResumeDownload;
