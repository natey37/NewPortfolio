import ecocoinsMain from '../../images/projects/eco-coins/eco-coins-main.png'
import ecocoinsAll from '../../images/projects/eco-coins/eco-coins-all.png'
import ecocoinsShow1 from '../../images/projects/eco-coins/eco-coins-show-1.png'
import ecocoinsShow2 from '../../images/projects/eco-coins/eco-coins-show-2.png'
import ecocoinsShow3 from '../../images/projects/eco-coins/eco-coins-show-3.png'
import ecocoinsShow4 from '../../images/projects/eco-coins/eco-coins-show-4.png'
import positivelyChargedMain from '../../images/projects/positively-charged/positively-charged-main.png'
import positivelyChargedShow1 from '../../images/projects/positively-charged/positively-charged-show-1.png'
import positivelyChargedShow2 from '../../images/projects/positively-charged/positively-charged-show-2.png'
import mapForActionMain from '../../images/projects/map-for-action/map-for-action-main.png'
import mapForActionShow1 from '../../images/projects/map-for-action/map-for-action-show-1.png'
import mapForActionShow2 from '../../images/projects/map-for-action/map-for-action-show-2.png'
import mapForActionShow3 from '../../images/projects/map-for-action/map-for-action-show-3.png'
import mapForActionShow4 from '../../images/projects/map-for-action/map-for-action-show-4.png'
import mapForActionShow5 from '../../images/projects/map-for-action/map-for-action-show-5.png'
import paintingWithPicassoMain from '../../images/projects/painting-with-picasso/painting-with-picasso-main.png'
import paintingWithPicassoShow1 from '../../images/projects/painting-with-picasso/painting-with-picasso-show-1.png'
import paintingWithPicassoShow2 from '../../images/projects/painting-with-picasso/painting-with-picasso-show-2.png'
import mixtapeMain from '../../images/projects/mixtape/mixtape-main.png'
import mixtapeShow1 from '../../images/projects/mixtape/mixtape-show-1.png'
import mixtapeShow2 from '../../images/projects/mixtape/mixtape-show-2.png'
import shareboothMain from '../../images/projects/sharebooth/sharebooth-main.png'
import shareboothShow1 from '../../images/projects/sharebooth/sharebooth-show-1.png'
import shareboothShow2 from '../../images/projects/sharebooth/sharebooth-show-2.png'
import shareboothShow3 from '../../images/projects/sharebooth/sharebooth-show-3.png'
import shareboothShow4 from '../../images/projects/sharebooth/sharebooth-show-4.png'
import me from '../../images/about/me.jpeg'
import chili_table from '../../images/about/chili_table.JPG'
import chili from '../../images/about/chili.PNG'
import sharebooth from '../../images/about/sharebooth.png'

export const MENU_ITEMS = ["About", "Projects", "Resume", "Contact"]
export const ABOUT_TITLES = ["about-title", "card-Web Developer", "card-Artist", "card-Pup Enthusiast", "card-Problem Solver"]
export const PROJECT_TITLES = ["project-title", "project-Sharebooth", "project-Eco-coins", "project-Positively Charged", "project-Map for Action", "project-The Mixtape", "project-Painting with Picasso"]
export const PROJECT_DETAIL_TITLES= ["project-details-title", "project-details-image", "project-details-about", "project-details-made-with", "project-details-back-button" ]
export const CONTACT_TITLES = ["contact-title", "contact-email-button", "contact-copy-button"]

export const PROJECTS = [
  {
    title: "Sharebooth", 
    image: shareboothMain, 
    images: [shareboothShow1, shareboothShow2, shareboothShow3, shareboothShow4],
    description: "Sharebooth is a dynamic digital platform that allows users to create and share personalized travel keepsakes, such as custom photos and postcards. From planning the perfect vacation to cherishing memories long after the trip is over, Sharebooth offers a unique and interactive way to capture and share special moments on the go.",
    madeWith: "This project was developed using React, Ruby on Rails, and AWS",
    url: "https://www.sharebooth.app/"
  },
  {
    title: 'Positively Charged',
    image: positivelyChargedMain,
    images: [positivelyChargedShow1, positivelyChargedShow2],
    description: "Positively Charged is a social platform designed to spread positivity and promote mental well-being. Utilizing the Google Natural Language API and a custom Rails API, we've implemented a sentiment analysis feature to ensure that only uplifting messages are shared within the community. Users' sentiment scores are tracked, allowing us to visualize the overall mood of the platform and promote a positive atmosphere. Positively Charged is dedicated to promoting healthy and positive interactions.",
    madeWith: "This project was developed using React, Ruby on Rails, Google Natural Language API, I Need A Prompt API, and styled with Material UI and custom illustrations.",
    videoUrl: "https://www.youtube.com/embed/zFqekojLpeE?controls=0"
  },
  {
    title: "Map for Action",
    image: mapForActionMain,
    images: [mapForActionShow1, mapForActionShow2, mapForActionShow3, mapForActionShow4, mapForActionShow5],
    description: "MapForAction is a powerful tool designed to combat social injustice and racial discrimination. By mapping instances of police brutality and other forms of racial injustice, users can gain a deeper understanding of the challenges facing marginalized communities and take meaningful action to address these issues. With its user-friendly interface and robust feature set, MapForAction empowers individuals to make a positive impact in the fight against systemic inequality.",
    madeWith: "This project was developed using Node/Express, MongoDB, and React",
  }, 
  {
    title: "The Mixtape",
    image: mixtapeMain,
    images: [mixtapeShow1, mixtapeShow2],
    description: "Introducing The Mixtape, the ultimate platform for creating and sharing personalized music compilations with your loved ones. Powered by the Spotify API, The Mixtape allows you to seamlessly select and curate the perfect playlist, then deliver it directly to your friends and family via email. The mixtape is the ultimate destination for music aficionados looking to share their favorite tracks with their inner circle.",
    videoUrl: "https://www.youtube.com/embed/OF3PDsiJzOU?controls=0",
    madeWith: "This project was developed using Ruby, Ruby on Rails, Spotify API"
  },
  {
    title: "Painting with Picasso",
    image: paintingWithPicassoMain,
    images: [paintingWithPicassoShow1, paintingWithPicassoShow2],
    description: "Painting with Picasso is a fun and interactive web application that allows users to unleash their creativity by creating custom artworks using various SVG painting tools. With a user interface inspired by classic painting software, users can easily design and animate their creations using an intuitive set of shapes and colors. Whether you're a seasoned artist or just looking for a fun and engaging way to pass the time, Painting with Picasso is the perfect platform for exploring your creative side.",
    madeWith: "This project was developed using JavaScript, Ruby on Rails API, Bootstrap",
    videoUrl: "https://www.youtube.com/embed/Q7bNSfk5Fxc?controls=0",
  }, 
  {
    title: 'Eco-coins',
    image: ecocoinsMain,
    images: [ecocoinsAll, ecocoinsShow1, ecocoinsShow2, ecocoinsShow3, ecocoinsShow4],
    description: "Eco-Coins is a personal project that aims to raise funds for animal conservation through the sale of unique, animal-themed non-fungible tokens (NFTs). Not only do these NFTs provide a fun and creative way to support animal welfare, but they also serve as a reminder of the importance of preserving and protecting our planet's biodiversity.",
    madeWith: "This project was developed using React, Three.js, and Procreate",
    url: "https://www.eco-coins.com/"
  },
];

export const ABOUT_ME_ITEMS = [
  {
    title: "Web Developer", 
    text: "As a web developer, I am dedicated to using my skills and knowledge to create beautiful and functional websites that help individuals and businesses showcase their unique talents and offerings. Whether it's through custom designs or smart problem-solving, I am committed to delivering top-quality results for my clients.",
    image: sharebooth
  }, 
  {
    title: "Artist", 
    text: "As an artist, I am constantly seeking new ways to express myself and bring my creative ideas to life. Whether it's through pour painting, drawing on my iPad with Procreate, or working with other mediums like stained glass and clay, I am always looking for opportunities to explore and grow my artistic skills.",
    image: chili_table
  }, 
  {
    title: "Pup Enthusiast", 
    text: "As an avid dog lover and former foster parent through Badass Brooklyn Animal Rescue, I have a deep appreciation for the joy and companionship that our four-legged friends bring into our lives. When I moved to Seattle, I was lucky enough to find my forever friend Chili, and now I am proudly one of those dog-obsessed people who can't get enough of their furry companion.",
    image: chili
  }, 
  {
    title: "Problem Solver", 
    text: "As a self-taught programmer, I have a passion for using my skills to solve problems and help others. I am constantly striving to learn and improve as a developer, and I am eager to use my knowledge and expertise to make a positive impact.",
    image: me
  }, 
]