import Section from "../Section";
import Image from "next/image";

type EducationProps = {
    ref?: React.RefObject<HTMLDivElement>
}

const Education = ({ ref }: EducationProps) => {
    return <div ref={ref}>
        <Section id="educations" image="./images/planet-2.jpg">
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 z-20">
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                    <div className="flex flex-col items-start gap-8 sm:gap-20 md:flex-row-reverse md:items-center">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="mb-4 max-w-3xl text-2xl font-bold md:text-4xl">
                                Trường Đại học <br />Công nghệ Thông tin và Truyền thông Việt Hàn
                            </h2>
                            <p className="mb-2 text-xl font-bold md:text-2xl">
                                Ngành: Công nghệ thông tin
                            </p>
                            <p className="max-w-lg text-sm dark:text-gray-300 text-gray-900 sm:text-base">
                                Năm: 2018 - 2022
                            </p>
                            <p className="mb-6 text-lg font-bold md:text-xl">
                                GPA: 3.21
                            </p>
                            <a
                                href="https://vku.udn.vn"
                                target="_blank"
                                className="inline-block bg-black px-6 py-3 font-semibold text-white"
                            >
                                Xem thêm
                            </a>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/images/vku.webp"
                                alt=""
                                height={613}
                                width={1200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </div>
};

export default Education;