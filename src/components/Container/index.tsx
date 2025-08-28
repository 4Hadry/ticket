import clsx from "clsx";

interface Iprops {
  className?: string;
  size?: "md";
  children: React.ReactNode;
}

interface SsProps {
  md: string;
}

const sizeStyles: SsProps = {
  md: "md:max-w-[1324px] w-full px-4",
};

const Container = ({ size = "md", className, ...props }: Iprops) => {
  return (
    <div className="flex justify-center w-full">
      <div className={clsx(sizeStyles[size], className)} {...props} />
    </div>
  );
};

export default Container;
