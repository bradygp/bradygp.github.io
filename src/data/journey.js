import React from 'react'
import { FaAward, FaPaperPlane, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

/*
 * Time-off Awards
 * Team Awards
 * DockerCon/SmashingCon/Fluent/PHP[Tek]/PHP[World]
 * Moving to Maryland
 * Chaning to wordpress/round table
 * */
const data = [
  {
    date: 'April 2019',
    headline: 'Attended Dockercon',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },
  {
    date: 'June 2018',
    headline: 'Promoted',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaBriefcase />,
  },
  {
    date: 'December 2017',
    headline: 'Attended PHP[World]',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },
  {
    date: 'June 2017',
    headline: 'Attended O\'Reilly Fluent',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },
  {
    date: 'June 2018',
    headline: 'Diet Promotion',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaBriefcase />,
  },
  {
    date: 'May 2017',
    headline: 'Attended PHP[Tek]',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },
  {
    date: 'April 2017',
    headline: 'Attended Smashing Conf San Francisco',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },
  {
    date: 'June 2016',
    headline: 'Promoted',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaBriefcase />,
  },
  {
    date: 'August 2013',
    headline: 'Started Working at Department of Defense',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image1,
    icon: <FaBriefcase />,
  },
  {
    date: 'August 2013',
    headline: 'Moved to Maryland',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image1,
    icon: <FaPaperPlane />,
  },
  {
    date: 'June 2013',
    headline: 'Graduated from Texas A&M',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaGraduationCap />,
  }

]

export default data
