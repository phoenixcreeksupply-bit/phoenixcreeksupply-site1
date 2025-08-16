// Updated gear image paths to fix public/page conflict import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import Image from "next/image";

const gear = [ { title: "Garrett AT Pro Metal Detector", image: "/gear-images/atpro.jpg", link: "https://amzn.to/3OjxJEF" }, { title: "Husqvarna 26" Wood Axe", image: "/gear-images/axe.jpg", link: "https://amzn.to/3Opr1qP" }, { title: "Bushcraft Survival Knife", image: "/gear-images/knife.jpg", link: "https://amzn.to/47vZJTG" }, { title: "Heavy-Duty Sluice Box", image: "/gear-images/sluice.jpg", link: "https://amzn.to/45cw7yl" }, { title: "Classifying Gold Pan Set", image: "/gear-images/panset.jpg", link: "https://amzn.to/45aTQxX" }, { title: "Fire Starter Ferro Rod Kit", image: "/gear-images/firestarter.jpg", link: "https://amzn.to/3YvvbWA" } ];

export default function GearPage() { return ( <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> {gear.map((item, index) => ( <Card key={index}> <a href={item.link} target="_blank" rel="noopener noreferrer"> <Image
src={item.image}
alt={item.title}
width={500}
height={300}
className="rounded-t-2xl"
/> <CardContent> <p className="text-xl font-bold pt-2">{item.title}</p> <p className="text-base text-muted-foreground">Amazon (Fast Ship)</p> </CardContent> </a> </Card> ))} </div> ); }


