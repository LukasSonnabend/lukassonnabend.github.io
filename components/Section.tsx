import { SectionProps } from "./propTypes";

const Section = (props: SectionProps) => {
  const headingColor = props.className?.includes("bg")
    ? "text-white"
    : "text-black";

  return (
    <div id={props.id} className={props.className + ' text-slate-900 dark:text-white'}>
      <div className="grid gap-4 grid-cols-12 justify-center p-2 lg:p-4">
        <div className="col-span-12 md:col-span-4 text-center">
          <h2 className={"p-8 text-4xl 2xl:text-8xl text-center font-bold " + headingColor}>
            {props.sectionTitle}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 xl:col-span-6 right_side">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Section;
