import React, { useId } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import FooterProject from "../../components/ui/footerProject";
import HeaderProject from "../../components/ui/headerProjct";
import AutoSlider from "../../components/ui/autoSlider";
import styles from "./style.module.scss";
import { projects } from "./data";

const Projects = ({ offset, onClick }) => {
  const id = useId();
  return projects.map((project, index) => (
    <ParallaxLayer
      offset={index + 1}
      speed={0.3}
      onClick={() => onClick(index + 2)}
      key={id + index}
    >
      <div className={styles.generalContainer}>
        <div className={styles.generalContainerProjects}>
          <HeaderProject
            element={project}
          />
          <AutoSlider IMAGES={project.images} />
          <FooterProject text={project.nameProject} />
        </div>
      </div>
    </ParallaxLayer>
  ));
};

export default Projects;
