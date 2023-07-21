import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

export const Experience = () => {
  return (
    <div>
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date="2004 - 2017"
            iconStyle={{ background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'> DAV Boys Senior Secondary School, Chennai, Tamil Nadu</h3>
                <p> Completed Schooling</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">
                Velammal Engineering College, Chennai, Tamil Nadu
                </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree
                </h4>
                <p> Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">
            Front-End Developer - Tata Consultancy Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, Tamil Nadu
          </h4>
          <p>Developed the Front end infrastructure for 3 projects.</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
  )
}
