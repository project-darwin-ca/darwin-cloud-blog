interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Polymer Design',
    description: `Using Darwin, researchers can design and optimize new polymers with desired mechanical, thermal, and chemical properties. By simulating polymer behavior at the molecular level, Darwin aids in predicting performance and identifying promising candidates for various applications.`,
    imgSrc: '/static/images/polymerdesign.webp',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Battery Materials Innovation',
    description: `Darwin's platform enables the development of advanced battery materials by simulating electrochemical properties and stability. This accelerates the discovery of materials with higher energy densities and longer lifespans, crucial for next-generation batteries in electric vehicles and renewable energy storage.`,
    imgSrc: '/static/images/battery-design.webp',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Forensic Identification',
    description: `Darwin's platform, in combination with NMR Spectroscopy, plays a critical role in forensic science for the identification of unknown chemical compounds. By offering detailed molecular simulations and precise analysis, Darwin enhances the accuracy and efficiency of forensic investigations, aiding in the swift identification of substances in criminal cases and toxicology studies.`,
    imgSrc: '/static/images/forensic-identification.webp',
    href: '/blog/the-time-machine',
  },
]

export default projectsData

