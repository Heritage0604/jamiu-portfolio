import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { Box, Flex,Image,Icon,Text } from '@chakra-ui/react'
import {fadeIn,textVariant} from "../utils/motion"
import d1Logo from '../assets/d1.png'
import d2Logo from '../assets/d2.png'
import d3Logo from '../assets/d3.png'
import d4Logo from '../assets/d4.png'
import d5Logo from '../assets/d5.png'
import d6Logo from '../assets/d6.png'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#5570e6ed",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #37436d" }}
      date={experience.date}
      iconStyle={{ background: experience.img}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.img}
            alt={"services"}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {"services"}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
       
          <li
            key={`experience-point`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {experience.text}
          </li>
      
      </ul>
    </VerticalTimelineElement>
  );
};

const Services = () => {

    const service=[
        {
            img:d1Logo,
            text:"1.	Data Cleaning and Preprocessing: I have the ability to clean and preprocess raw data to ensure accuracy and consistency, making it suitable for analysis."
        },
        {
            img:d2Logo,
            text:"2.	Data Visualization: Get more insights from your data in an interactive way. I can build Dashboards that will help you examine trends and patterns yourself."
        },
        {
            img:d3Logo,
            text:"3.	SQL Queries: As a Data Analyst I help to write SQL queries to extract, manipulate, and analyze data from databases."
        },
        {
            img:d5Logo,
            text:"4.	Data Mining and Scraping: Data exploration, application of statistical methods, reproducible data analysis"
        },
        {
img:d1Logo,
text:"5.	Data Analytics:  Data analysis  leading to actionable insights or influenced decision-making processes. for example by predicting behavior or targeting the right customer."
        }
    ]
  return (
   <Flex flexDirection={"column"} bg={"#ffffff"} align={"center"}   justify={"center"} width={"100vw"}>
    
      <Flex align={"center"} flexDirection={"column"}>
      <Flex b  width={"80%"}>
      <Text fontSize={{base:"15px",md:"18px"}} color={"gray.900"} borderBottom={"1px solid#b0aea9"} pr={"25px"} height={"30px"} >
        SERVICES
    </Text>
  </Flex>
  <Flex width={"80%"} mt={"10px"}>
<Text  color={"#4e4e4c"}>
   Welcome to my freelance data analyst portfolio! I am a highly skilled data analyst with a passion for unraveling the stories hidden within data. With expertise in SQL, Excel, Google Sheets, and Power BI, I offer comprehensive data analysis services to help businesses make informed decisions and drive success.
As a professional data analyst, I thrive on turning raw data into valuable insights.With Python, SQL, EXCEL/Google sheets and Power BI, I can efficiently extract, manipulate, and analyze large datasets, ensuring Data accuracy and completeness. 
 
</Text>
  </Flex>
</Flex>



   <div className='mt-20 flex flex-col '>
        <VerticalTimeline >
          {service.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
   </Flex>
  )
}

export default SectionWrapper(Services,"service")