import Container from "@/components/Container";
// import Button from "@/components/Ui/Button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const Custom404: React.FC = () => {
  return (
    <Fragment>
      <Container className="lg:py-[118px] md:py-20 py-12 flex justify-center items-center flex-col md:gap-10 gap-5">
        <Image
          src={"/assets/content-tab/404.png"}
          alt="404"
          width={689}
          height={362}
        />

        <Link href={"/"}>
          <button className="flex items-center gap-2.5 group">
            Go To Home
            <div className="lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center bg-[#F2F0F51A] group-hover:bg-primary">
              <ArrowBigRight />
            </div>
          </button>
        </Link>
      </Container>
    </Fragment>
  );
};

export default Custom404;
