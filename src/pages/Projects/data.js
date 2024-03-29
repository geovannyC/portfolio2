import image1 from "../../assets/projects/brg/image1.png";
import image2 from "../../assets/projects/brg/image2.png";
import image3 from "../../assets/projects/brg/image3.png";
import image4 from "../../assets/projects/brg/image4.png";
import image5 from "../../assets/projects/brg/image5.png";
import image11 from "../../assets/projects/freshii/image1.jpg";
import image12 from "../../assets/projects/freshii/image2.jpg";
import image13 from "../../assets/projects/freshii/image3.png";
import image21 from "../../assets/projects/f1App/image21.png";
import image22 from "../../assets/projects/f1App/image22.png";
import image23 from "../../assets/projects/f1App/image23.png";
import image24 from "../../assets/projects/f1App/image24.png";
import image25 from "../../assets/projects/f1App/image25.png";
import image31 from "../../assets/projects/softwareMarket/image31.png";
import image32 from "../../assets/projects/softwareMarket/image32.png";
import image33 from "../../assets/projects/softwareMarket/image33.png";
import photo1Desktop from "../../assets/projects/pexApp/photo1Desktop.png";
import desktop from "../../assets/projects/pexApp/2desktop.png";
import mobile1 from "../../assets/projects/pexApp/mobile1.png";
import mobile2 from "../../assets/projects/pexApp/mobile2.png";
import planex from "../../assets/projects/planex/image.png";
import planex2 from "../../assets/projects/planex/image2.png";
import planex3 from "../../assets/projects/planex/image3.png";
import planex4 from "../../assets/projects/planex/image4.png";

const IMAGES = [
  {
    image: image1,
    arrayText: ["Native", "Forms"],
  },
  {
    image: image2,
    arrayText: ["APP", "Mobile", "BGR"],
  },
  {
    image: image3,
    arrayText: ["React", "Native", "Project"],
  },
  {
    image: image4,
    arrayText: ["Android", "&", "IOS"],
  },
  {
    image: image5,
    arrayText: ["APP", "Mobile", "BGR"],
  },
];
const IMAGESPLANEX = [
  {
    image: planex,
    arrayText: ["React", "Next", "Redux", "Scss"],
  },
  {
    image: planex2,
    arrayText: ["Responsive", "WithOut", "External", "Libraries"],
  },
  {
    image: planex3,
    arrayText: ["Mobile", "Phablet", "Desktop", "Adaptative"],
  },
  {
    image: planex4,
    arrayText: ["Better", "Fast", "Modern Design"],
  }
];
const IMAGESPE = [
  {
    image: photo1Desktop,
    arrayText: ["NextJs", "Redux"],
  },
  {
    image: desktop,
    arrayText: ["Best", "Optimization", "With Out", "CSS Libraries"],
  },
  {
    image: mobile1,
    arrayText: ["UI", "adaptative"],
  },
  {
    image: mobile2,
    arrayText: ["Individual", "Dinamic", "Data", "Management"],
  },
];
const IMAGES2 = [
  {
    image: image11,
    arrayText: ["Frehii", "Control", "System"],
  },
  {
    image: image12,
    arrayText: ["Deployed", "With", "Odoo"],
  },
  {
    image: image13,
    arrayText: ["Rancher", "Kubernetes"],
  },
];
const IMAGES3 = [
  {
    image: image21,
    arrayText: ["Node", "+", "MongoDB"],
},
{
    image: image22,
    arrayText: [ "React toys", "useReducer", "Context", "ReactForms"],
},
{
    image: image23,
    arrayText: ["F1", "Web", "APP"],
},
{
    image: image24,
    arrayText: ["React"],
},
{
    image: image25,
    arrayText: ["AI", "Text", "Recognization"],
  },
];
const IMAGES4 = [
  {
    image: image31,
    arrayText: ["Conditional", "Rules", "Form", ],
  },
  {
    image: image32,
    arrayText: ["Backlog", "System"],
  },
  {
    image: image33,
    arrayText: ["Full", "MaterialUI"],
  },
];

export const projects = [
  {
    nameProject: "Planex App",
    link: "https://planexec.netlify.app/",
    images: IMAGESPLANEX,
  },
  {
    nameProject: "Banco General Rumiñahui Digital App",
    images: IMAGES,
  },
  {
    nameProject: "Planet Express EC",
    link: "https://planetexpressec.netlify.app/",
    images: IMAGESPE,
  },
  {
    nameProject: "FRESHII Inventory control system",
    link: "https://orders.freshii.com/en",
    images: IMAGES2,
  },
  {
    nameProject: "F1 Web App contest",
    images: IMAGES3,
  },
  {
    nameProject: "SMarket personal project",
    images: IMAGES4
  },
];
