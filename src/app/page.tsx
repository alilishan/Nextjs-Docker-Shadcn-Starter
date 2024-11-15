
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { PiTrendDownDuotone, PiUsersThreeDuotone, PiWarehouseDuotone } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { GreetUser } from '@ounch/utils';

import { env } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
    const { APP_NAME } = env;

    console.log(GreetUser('Alilishan'));


    return (

        <>
            <header className="fixed top-0 z-30 w-full flex items-center gap-4 px-4 py-4 h-auto">
                <div className="container backdrop-blur-sm bg-white/70 py-4 rounded">
                    <div className="flex items-center justify-between">
                        <Image src="/images/storio-logo.png" className="w-auto h-6" alt={APP_NAME} width={311} height={68} />
                        <nav>
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link className="font-medium text-orange-700" href="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="font-medium text-orange-700" href="/">About</Link>
                                </li>
                                <li>
                                    <Link className="font-medium text-orange-700" href="/">Services</Link>
                                </li>
                                <li>
                                    <Link className="font-medium text-orange-700" href="/">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Button className="border border-orange-500 text-orange-500 bg-transparent uppercase font-semibold rounded-lg shadow-none">
                                <span>Get Started</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main>

                <section className="hero-section flex items-center justify-center flex-col relative h-screen">
                    <div className="absolute inset-0">
                        <video className="w-full h-full object-cover" src="/videos/cover.mp4" autoPlay loop muted />
                    </div>

                    {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-500" /> */}

                    <div className="absolute inset-0 flex items-start justify-end flex-col gap-10">
                        <div className="flex flex-col gap-5 p-16 items-start bg-gradient-to-tr from-white from-[15%] via-transparent to-transparent">
                            <h1 className="text-6xl font-semibold text-dark max-w-2xl text-start text-shadow-lg shadow-white">Unlock the Potential of <span className="text-orange-500">Automated Warehousing</span></h1>
                            <Button className="text-xl bg-transparent text-dark flex items-center gap-2 px-1 py-8 shadow-none">
                                <span>Explore</span>
                                <ArrowDown className="animate-bounce" size={24} />
                            </Button>
                        </div>
                    </div>

                </section>

                <section className="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Connect with all apps</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                role="button"
            >
                Check all apps
            </a>
        </div>
    </div>

    <img className="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png" alt="" />
</section>



                <section className="py-20 relative">
                    <div className="absolute flex items-start justify-end inset-0">
                        <img src="/images/web-bg.svg" className="w-auto h-2/3 rotate-180 object-cover" alt="Automated Warehouse" />
                    </div>
                    <div className="container relative z-10 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="flex items-center justify-center">
                                <div className="w-[400px] h-[400px] foundation_card overflow-hidden p-4">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/videos/about.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* <Image
                                    src="/images/about.png"
                                    alt="Automated Warehouse"
                                    width={500}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                /> */}
                            </div>
                            <div className="flex flex-col gap-6 items-start justify-center py-20">
                                <h2 className="text-4xl font-medium text-dark">About <span className="text-orange-500">Storio</span></h2>
                                <p className="text-dark text-lg">Storio is a warehouse operator that is set to transform the warehousing industry by combining artificial intelligence and robotics to create automated warehouse environments. We empower companies to significantly reduce their capital and operational costs while also increasing efficiency and productivity.</p>
                                <Button className="bg-orange-100 text-orange-500 uppercase font-semibold px-10 py-6 rounded-lg shadow-none">
                                    More about us
                                    <ArrowRight className="ml-2 animate-bounce-right" size={24} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 relative">
                    <div className="container relative z-10">
                        <div className="flex flex-col items-start max-w-3xl mx-auto">
                            <ImQuotesLeft className="text-orange-500" size={48} />
                            <blockquote className="text-2xl italic text-gray-700">
                                &quot;Storio has revolutionized our warehouse operations. Their AI-driven approach and robotic automation have not only cut our costs significantly but also boosted our efficiency beyond what we thought possible. It&apos;s not just a service; it&apos;s a game-changer in logistics.&quot;
                            </blockquote>
                            <p className="mt-4 text-xs font-medium text-orange-500">John Doe, CEO of Customer Inc</p>
                        </div>
                    </div>
                    <div className="absolute left-0 top-1/2 -mt-20 flex items-center justify-evenly w-full h-40 overflow-hidden">
                        {[...Array(90)].map((_, index) => (
                            <div
                                key={index}
                                className="h-10 w-[1px] bg-orange-200 opacity-50 animate-separate-bar"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            />
                        ))}
                    </div>
                </section>

                <section className="py-20 relative overflow-hidden">
                    <div className="absolute flex items-end justify-start inset-0">
                        <img src="/images/web-bg.svg" className="w-auto h-2/3 object-cover" alt="Automated Warehouse" />
                    </div>
                    <div className="container relative z-10 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="flex flex-col gap-6 items-start justify-center py-20">
                                <h2 className="text-4xl font-medium text-dark">How <span className="text-orange-500">Storio</span> Works</h2>
                                <p className="text-dark text-lg">Storio uses machine learning algorithms to monitor and track goods movement. This data is then used to optimize the placement and movement of goods within the warehouse. A fleet of autonomous robots are designed to work seamlessly to deliver maximum efficiency and accuracy.</p>
                                <p className="text-dark text-lg">Storio allows you to rent the pallets you actually need rather than a fixed floor area.</p>
                                <Button className="bg-orange-100 text-orange-500 uppercase font-semibold px-10 py-6 rounded-lg shadow-none">
                                    See how it works
                                    <ArrowRight className="ml-2 animate-bounce-right" size={24} />
                                </Button>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* <div className="w-[400px] h-[400px] foundation_card overflow-hidden">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/videos/3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div> */}
                                <Image
                                    src="/images/how-works.svg"
                                    alt="Automated Warehouse"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto" />
                            </div>
                        </div>
                   </div>


                    <div className="mt-16 mb-12 border-b border-slate-100 xl:mb-0 demo-sm:block dark:border-slate-800">
                        <div className="mb-[-3px] flex max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
                            <div className="flex items-start flex-none ml-[40rem] w-32">
                                <div className="flex flex-col items-center ml-[-2px]">
                                    <div className="w-px h-14 bg-slate-100 dark:bg-slate-800"></div>
                                    <div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"></div>
                                </div>
                                <div className="ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0 bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5">AGV</div>
                            </div>
                            <div className="flex items-start flex-none w-64">
                                <div className="flex flex-col items-center ml-[-2px]">
                                    <div className="w-px h-14 bg-slate-100 dark:bg-slate-800"></div>
                                    <div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"></div>
                                </div>
                                <div className="ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0 bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5">ASRS</div>
                            </div>
                            <div className="flex items-start flex-none w-64">
                                <div className="flex flex-col items-center ml-[-2px]">
                                    <div className="w-px h-14 bg-slate-100 dark:bg-slate-800"></div>
                                    <div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"></div>
                                </div>
                                <div className="ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0 bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5">Smart</div>
                            </div>
                            <div className="flex items-start flex-none w-64">
                                <div className="flex flex-col items-center ml-[-2px]">
                                    <div className="w-px h-14 bg-slate-100 dark:bg-slate-800"></div>
                                    <div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"></div>
                                </div>
                                <div className="ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0 bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5">Automated</div>
                            </div>
                            <div className="flex items-start flex-none">
                                <div className="flex flex-col items-center ml-[-2px]">
                                    <div className="w-px h-14 bg-slate-100 dark:bg-slate-800"></div>
                                    <div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"></div>
                                </div>
                                <div className="ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0 bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5">Savings</div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="py-20 relative">
                    <div className="absolute flex items-end justify-start inset-0">
                        <img src="/images/imageAA.webp" className="w-full h-full object-cover" alt="Automated Warehouse" />
                    </div>
                    <div className="container relative z-10 min-h-[600px] flex items-end justify-start">
                        <div className="max-w-2xl flex flex-col gap-6 items-start justify-start">
                            <h2 className="text-4xl font-bold text-white text-shadow-lg shadow-orange-800">Grow and scale your business confidently.</h2>
                            <p className="text-white font-semibold text-lg text-shadow-lg shadow-orange-800">We understand your concerns on the resources needed and the uncertainty of the future. Let us work with you so that you can confidently grow your business, enjoy better margins and cashflow and give your company a competitive advantage over your competitors.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 relative overflow-hidden">
                    <div className="absolute flex items-end rotate-180 justify-end inset-0">
                        <img src="/images/web-bg.svg" className="w-auto h-1/3 object-cover" alt="Automated Warehouse" />
                    </div>
                    <div className="container relative z-10 py-20 flex flex-col gap-14 items-center justify-center">
                        <div className="flex flex-col gap-6 items-stretch justify-start max-w-3xl mx-auto">
                            <h2 className="text-4xl font-medium text-dark text-center">Benefits of <span className="text-orange-500">Storio</span></h2>
                            <p className="text-dark text-lg text-center">One of the key benefits of Storio is its ability to significantly reduce costs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <PiTrendDownDuotone className="text-orange-500" size={32} />,
                                    title: "No CapEx",
                                    description: "Storio does not require any upfront investment in infrastructure or equipment. This means that you can start using our services without having to worry about the costs of building or maintaining a warehouse."
                                },
                                {
                                    icon: <PiWarehouseDuotone className="text-orange-500" size={32} />,
                                    title: "Reduce Operating Cost",
                                    description: "Storio can help you reduce your operating costs by up to 30%. This is because we use advanced algorithms to optimize the placement and movement of goods within the warehouse, which reduces the need for manual labor."
                                },
                                {
                                    icon: <PiUsersThreeDuotone className="text-orange-500" size={32} />,
                                    title: "Reduce Labour Cost",
                                    description: "Storio uses advanced algorithms to optimize the placement and movement of goods within the warehouse, which reduces the need for manual labor."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col gap-4 items-stretch justify-start foundation_card w-full p-8 bg-white">
                                    <div className="w-[48px] h-[48px] bg-orange-100 rounded-full flex items-center justify-center mb-10">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-medium text-dark">{item.title}</h3>
                                    <p className="text-dark">{item.description}</p>
                                </div>
                            ))}

                        </div>
                    </div>


                </section>


                <section className="py-20 relative">
                    <div className="absolute flex items-end justify-start inset-0">
                        <img src="/images/web-bg.svg" className="w-auto h-2/3 object-cover" alt="Automated Warehouse" />
                    </div>
                    <div className="container relative z-10 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="flex flex-col gap-6 items-start justify-center mx-auto">
                                <h2 className="text-4xl font-medium text-dark">What <span className="text-orange-500">Storio</span> Can Do For You</h2>
                                <p className="text-dark text-lg">Find the answers to your questions we get asked the most.</p>
                                <Button className="bg-orange-100 text-orange-500 uppercase font-semibold px-10 py-6 rounded-lg shadow-none">
                                    More Solutions
                                    <ArrowRight className="ml-2 animate-bounce-right" size={24} />
                                </Button>
                            </div>

                            <div className="flex flex-col gap-6 items-start justify-start">
                                <Card className="border-none bg-slate-50/50 shadow-2xl">
                                    <CardContent className="pt-6">
                                        <Accordion type="single" collapsible className="w-full">
                                            {[
                                                {
                                                    question: "How does Storio's automated warehousing work?",
                                                    answer: "Storio uses a combination of AI algorithms and robotic systems to automate warehouse operations. Our technology optimizes inventory placement, order picking, and overall warehouse management, resulting in increased efficiency and reduced costs."
                                                },
                                                {
                                                    question: "What are the benefits of using Storio's services?",
                                                    answer: "The main benefits include reduced operational costs, increased efficiency, improved accuracy in order fulfillment, scalability to meet changing demands, and the elimination of large upfront capital expenditures typically associated with warehouse automation."
                                                },
                                                {
                                                    question: "Is Storio suitable for businesses of all sizes?",
                                                    answer: "Yes, Storio's solutions are scalable and can be tailored to businesses of all sizes, from small e-commerce operations to large-scale distribution centers. Our flexible approach allows us to meet the unique needs of each client."
                                                },
                                                {
                                                    question: "How does Storio ensure the security of stored goods?",
                                                    answer: "We implement robust security measures including 24/7 surveillance, restricted access controls, and advanced inventory tracking systems. Our automated systems also minimize human error and potential security risks associated with manual handling."
                                                },
                                                {
                                                    question: "Can Storio integrate with existing inventory management systems?",
                                                    answer: "Absolutely. Storio's systems are designed to integrate seamlessly with a wide range of existing inventory management and ERP systems. We work closely with clients to ensure smooth integration and data flow between our automated warehouse solutions and their current systems."
                                                }
                                            ].map((faq, index) => (
                                                <AccordionItem key={index} value={`item-${index + 1}`}>
                                                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                                    <AccordionContent className="text-left">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <footer className="bg-slate-900 text-white py-10 mt-20">
                <div className="container flex flex-col gap-10 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex gap-4">
                            <Image src="/images/storio-logo-white.webp" className="w-auto h-6" alt={APP_NAME} width={311} height={68} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold border-b border-gray-700 pb-4 border-dashed">Services</h3>
                            <ul className="flex flex-col gap-2">
                                <li>Warehouse Management</li>
                                <li>Inventory Management</li>
                                <li>Order Fulfillment</li>
                                <li>Warehouse Management</li>
                                <li>Inventory Management</li>
                                <li>Order Fulfillment</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold border-b border-gray-700 pb-4 border-dashed">Contact</h3>
                            <a href="mailto:info@storio.com">info@storio.com</a>
                            <a href="tel:+60123456789">+60123456789</a>
                            <p>1234 Main St, Kuala Lumpur, Malaysia</p>
                            <div className="flex gap-4">
                                <FaFacebookF className="w-4 h-4" />
                                <FaXTwitter className="w-4 h-4" />
                                <FaLinkedin className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 border-dashed" />
                    <div className="flex gap-1 flex-col text-xs text-gray-400">
                        <p>© 2024 Storio Sdn Bhd. All rights reserved.</p>
                        <p>STORIO and the STORIO logo are trademarks of Storio Sdn Bhd. Third party trademarks are the property of their respective owners.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
