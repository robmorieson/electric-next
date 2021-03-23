type Experience = {
  date: string;
  role: string;
  company: {
    name: string;
    url: string;
  };
  summary: string;
};

const experiences: Experience[] = [
  {
    date: "Jun 2019 - Oct 2020",
    role: "Lead Developer",
    company: {
      name: "Prime Motive",
      url: "https://primemotive.com.au/",
    },
    summary:
      "Alongside leading and mentoring a small team of developers, the role also involved contributing to proposals, drafting estimates, documenting tech stack approaches, collaboration across departments and client liaisons.",
  },
  {
    date: "Feb 2014 - Jun 2019",
    role: "Senior Developer (Freelance)",
    company: {
      name: "Prime Motive",
      url: "https://primemotive.com.au/",
    },
    summary:
      "Collaborating with UI, UX and design strategy teams to provide engaging online solutions for a diverse range of clients.",
  },
  {
    date: "Jan 2013 - Dec 2014",
    role: "Sessional Lecturer",
    company: {
      name: "Swinburne University of Technology",
      url: "https://www.swinburne.edu.au/",
    },
    summary:
      "Lecturing the [i]Interactive Design for Web Technologies[/i] and [i]Experience Design and Usability for the Web[/i] subjects at Swinburne University in a workshop setting, along with one-on-one student tutoring, lesson planning and assessment grading.",
  },
  {
    date: "Mar 2009 - Dec 2012",
    role: "Frontend Developer",
    company: {
      name: "Square Circle Triangle / Blocks Global",
      url: "https://www.linkedin.com/company/blocks-global/about/",
    },
    summary:
      "My first foray into agency life allowed for expansion of my skills over four years, working on a variety of client projects, each with unique technical requirements.",
  },
];

export default experiences;
