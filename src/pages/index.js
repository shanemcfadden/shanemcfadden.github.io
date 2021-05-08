import * as React from "react";
import "normalize.css";
import "../styles/index.scss";
import ContentCard from "../components/ContentCard";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  const technicalSkills = [
    "Javascript",
    "Typescript",
    "React",
    "React-Redux",
    "NodeJS",
    "Express",
    "HTML",
    "CSS",
    "SCSS/SASS",
    "MySQL",
    "MongoDB",
    "Firebase",
    "GraphQL",
    "Git/GitHub",
  ];
  return (
    <main>
      <Helmet>
        <title>Shane McFadden - Full-Stack Developer</title>
      </Helmet>
      <div className="banner">
        <div className="content-container">
          <div>Hi, my name is</div>
          <h1 className="align-center">Shane McFadden</h1>
          <div className="align-center">and I'm a</div>
          <h2 className="align-right">Full-Stack Developer</h2>
          <div className="social-links">
            <a href="https://github.com/shanemcfadden">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="content-container">
        <h1>About me</h1>
        <p>
          I moved to Chicago a few years ago with a couple of music degrees in
          hand and began my work as a professional musician. As a pianist, I
          accompanied classical singers and instrumentalists at countless
          recitals, classes, and other events. The bulk of my daily work was as
          a vocal coach, where I helped vocalists tackle the challenges of
          performing their music with a compelling interpretation and crystal
          clear diction in any language they needed to sing.
        </p>
        <p>
          In March of 2020, in-person work shut down completely due to the
          COVID-19 pandemic, and it was no longer safe to rehearse, perform, or
          even sing in communal spaces. Besides doing a few accompaniment
          recordings and online coachings each week, my music work essentially
          disappeared overnight.
        </p>
        <p>
          However, I decided to use that extra time to my advantage. I had never
          taken a computer science course in school, but I was always fascinated
          by the idea of being able to build a webpage or automate a task by
          writing a few lines of code. Fueled by a rabid curiosity and a love of
          learning, I took online courses in HTML, CSS, and Javascript on
          Skillshare and Udemy. That led to more coursework in data structures,
          algorithms, and back-end technologies. After months of absorbing
          information from step-by-step classes, I decided to put my skills to
          the test and begin making my own projects, even as my music work began
          to pick back up again.
        </p>
        <p>
          Today I'm excited to see where these new skills will take me. It's
          been incredibly fulfilling to start a project, run into unexpected
          challenges along the way, and come out on the other side of them even
          more knowledgeable than before. Because my entire progression thus far
          has been self-taught, I'm confident in my ability to dig deeper into
          my existing skills and learn new tech stacks as a member of a team. My
          objective is to work for a company where I can continue that growth
          and help develop software at a larger scale.
        </p>
        <div className="flex-columns">
          <div className="content-card flex-grow">
            <h2 className="align-center">Technical skills</h2>
            <div className="grid grid--two-columns">
              {technicalSkills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
            </div>
          </div>
          <div className="content-card">
            <h2 className="align-center">Education</h2>
            <p>
              <h3 className="margin-zero align-left">Master of Music</h3>
              <div>
                <strong>Collaborative Piano</strong>
              </div>
              <div>University of Michigan</div>
              <div>2016-2018</div>
            </p>
            <p>
              <h3 className="margin-zero align-left">Bachelor of Music</h3>
              <div>
                <strong>Piano </strong>
              </div>
              <div>University of Kansas</div>
              <div>2012-2016</div>
            </p>
          </div>
        </div>
        <h1>Recent projects</h1>
        {projects.map(({ frontmatter, html }, i) => {
          const { githubRepo, postmanDocs, siteLink } = frontmatter;
          return (
            <ContentCard
              key={i}
              githubRepo={githubRepo}
              siteLink={siteLink}
              postmanDocs={postmanDocs}
            >
              {html}
            </ContentCard>
          );
        })}
      </div>
    </main>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___orderIndex }) {
      nodes {
        frontmatter {
          githubRepo
          orderIndex
          postmanDocs
          siteLink
        }
        html
      }
    }
  }
`;

export default IndexPage;
