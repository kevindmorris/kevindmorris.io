import {
  Avatar,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import noblis from "../../assets/experience/noblis.png";
import wvu from "../../assets/experience/wvu.png";
import mvb from "../../assets/experience/mvb.png";
import pollard from "../../assets/experience/pollard.png";
import Image from "next/image";

const experiences = [
  {
    organtization: "Noblis, Inc",
    src: noblis,
    href: "https://noblis.org/",
    title: "Data Scientist",
    startDate: "2022-September",
    endDate: "present",
  },
  {
    organtization: "Noblis, Inc",
    src: noblis,
    href: "https://noblis.org/",
    title: "Data Scientist Intern",
    startDate: "2022-June",
    endDate: "2022-August",
  },
  {
    organtization: "West Virginia University",
    src: wvu,
    href: "https://www.wvu.edu/",
    title: "Chambers College Graduate Assistant",
    startDate: "2021-August",
    endDate: "2022-May",
  },
  {
    organtization: "MVB Bank",
    src: mvb,
    href: "https://mvbbanking.com/",
    title: "Financial Planning and Analysis Intern",
    startDate: "2021-May",
    endDate: "2022-August",
  },
  {
    organtization: "Pollard & Associates, Inc.",
    src: pollard,
    href: "https://pollardpensions.com/",
    title: "Actuarial Intern",
    startDate: "2019-June",
    endDate: "2019-August",
  },
];

const education = [
  {
    school: "West Virginia University",
    src: wvu,
    href: "https://www.wvu.edu/",
    degree: "M.S. Business Data Analytics",
    startDate: "2021-January",
    endDate: "2022-August",
  },
  {
    school: "West Virginia University",
    src: wvu,
    href: "https://www.wvu.edu/",
    degree: "B.S. Mathematics",
    startDate: "2017-August",
    endDate: "2020-May",
  },
];

export default function Page() {
  return (
    <>
      <Typography variant="h5" mt={2}>
        Experience
      </Typography>
      <Divider />
      <List>
        {experiences.map((experience) => (
          <>
            <ListItem>
              <ListItemAvatar sx={{ minWidth: 75 }}>
                <Image
                  src={experience.src}
                  alt=""
                  style={{ height: "auto", width: 60 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={experience.title}
                secondary={
                  <Link href={experience.href}>{experience.organtization}</Link>
                }
              />
              <ListItemText
                secondary={experience.startDate + " to " + experience.endDate}
                secondaryTypographyProps={{
                  textAlign: "right",
                  fontStyle: "italic",
                }}
              />
            </ListItem>
          </>
        ))}
      </List>
      <Typography variant="h5">Education</Typography>
      <Divider />
      <List>
        {education.map((e) => (
          <>
            <ListItem>
              <ListItemAvatar sx={{ minWidth: 75 }}>
                <Image
                  src={e.src}
                  alt=""
                  style={{ height: "auto", width: 60 }}
                />
              </ListItemAvatar>
              <ListItemText primary={e.school} secondary={e.degree} />
              <ListItemText
                secondary={e.startDate + " to " + e.endDate}
                secondaryTypographyProps={{
                  textAlign: "right",
                  fontStyle: "italic",
                }}
              />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}
