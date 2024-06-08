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
    title: 'Drug Discovery and Development',
    description: `Leveraging Darwin's advanced computational chemistry capabilities, researchers can accelerate drug discovery and development. By simulating drug-target interactions at the molecular level, Darwin aids in identifying potential drug candidates, optimizing lead compounds, and predicting pharmacokinetic and toxicological properties, thus streamlining the drug development process.`,
    imgSrc: '/static/images/psivant.webp',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Battery Material Design',
    description: `Darwin's platform enables the development of advanced battery materials by simulating electrochemical properties and stability. This accelerates the discovery of materials with higher energy densities and longer lifespans, crucial for next-generation batteries in electric vehicles and renewable energy storage.`,
    imgSrc: '/static/images/battery-design.webp',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Forensic Identification',
    description: `Darwin's platform, in combination with NMR Spectroscopy, plays a critical role in forensic science for the identification of unknown chemical compounds. By offering detailed molecular simulations and precise analysis, Darwin enhances the accuracy and efficiency of forensic investigations, aiding in the swift identification of substances in criminal cases and toxicology studies.`,
    imgSrc: '/static/images/forensic_identification.jpeg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData

