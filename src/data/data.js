// ── EVENTS ─────────────────────────────────────────────────────────────────
import clean from '../images/cleanup.jpg'
import art from '../images/art.jpg'
import bootcamp from '../images/bootcamp.jpg'
import farmers from '../images/farmers.jpg'
import health from '../images/health.jpg'
import wellness from '../images/wellness.jpg'
import wintech from '../images/wintech.jpg'
import womensummit from '../images/womensummit.jpg'
import youthsummit from '../images/youthsummit.jpg'
import creative from '../images/creative.jpg'
import literacy from '../images/literacy.jpg'
import music from '../images/music.jpg'

export const EVENTS = [
  {
    id: 1,
    title: "Harare Community Clean-Up Day",
    cat: "Community",
    date: "Sat, Mar 8 2025",
    time: "7:00 AM",
    loc: "Westlea Park",
    price: "Free",
    img: clean,
    // emoji: "🌿",
    // bg: clean,
    desc: "Join hundreds of residents in a city-wide clean-up initiative.",
    // image: clean ,
  },
//   {
//     id: 2,
//     title: "Small Business Digital Branding Workshop",
//     cat: "Workshop",
//     date: "Wed, Mar 12 2025",
//     time: "10:00 AM",
//     loc: "COBA Centre, CBD",
//     price: "ZWL 500",
//     emoji: "💼",
//     bg: "linear-gradient(135deg,#B85C38,#7A2E10)",
//     desc: "Learn how to build your brand online with expert-led sessions.",
//   },
  {
    id: 3,
    title: "Weekend Farmers' Market",
    cat: "Market",
    date: "Sat, Mar 15 2025",
    time: "8:00 AM",
    loc: "Sam Levy's Village",
    price: "Free Entry",
    img : farmers,
    desc: "Fresh local produce, crafts, and food trucks.",
  },
  {
    id: 4,
    title: "Youth Art Exhibition",
    cat: "Arts",
    date: "Sun, Mar 16 2025",
    time: "11:00 AM",
    loc: "National Gallery",
    price: "ZWL 200",
    img : art,
    desc: "Celebrating creative youth voices from across Harare.",
  },
  {
    id: 5,
    title: "Women in Tech Networking Mixer",
    cat: "Community",
    date: "Thu, Mar 20 2025",
    time: "5:30 PM",
    loc: "Impact Hub Harare",
    price: "Free",
   img: wintech,
    desc: "Connecting women in technology across Zimbabwe.",
  },
  {
    id: 6,
    title: "Community Health & Wellness Fair",
    cat: "Health",
    date: "Sat, Mar 22 2025",
    time: "9:00 AM",
    loc: "Borrowdale Community Hall",
    price: "Free",
    img : wellness,
    desc: "Free health screenings, yoga, and wellness talks.",
  },
  {
    id: 7,
    title: "Financial Literacy for Youth",
    cat: "Workshop",
    date: "Sat, Mar 29 2025",
    time: "10:00 AM",
    loc: "COBA Centre, CBD",
    price: "ZWL 300",
    img : youthsummit,
    desc: "Equipping the next generation with money management skills.",
  },
  {
    id: 8,
    title: "Sunset Jazz in the Park",
    cat: "Arts",
    date: "Sun, Mar 30 2025",
    time: "4:00 PM",
    loc: "Harare Gardens",
    price: "ZWL 400",
    img : music ,
    desc: "Live jazz performances as the sun sets over the city.",
  },
  {
    id: 9,
    title: "Urban Gardening Masterclass",
    cat: "Community",
    date: "Sat, Apr 5 2025",
    time: "9:00 AM",
    loc: "Avondale Gardens",
    price: "ZWL 250",
    img: farmers,
    desc: "Grow your own food — practical hands-on gardening session.",
  },
  {
    id: 10,
    title: "Digital Skills Bootcamp",
    cat: "Workshop",
    date: "Mon, Apr 7 2025",
    time: "8:30 AM",
    loc: "COBA Centre, CBD",
    price: "ZWL 800",
    img : bootcamp,
    desc: "A 2-day intensive on digital tools, coding basics, and design.",
  },
  
  
  {
    id: 12,
    title: "Mental Health Awareness Walk",
    cat: "Health",
    date: "Sat, Apr 26 2025",
    time: "6:00 AM",
    loc: "Mukuvisi Woodlands",
    price: "Free",
   img: health,
    desc: "Walk together to break the stigma around mental health.",
  },
];

// ── GALLERY ─────────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "COBA Youth Business Summit 2024",
    aim: "Empowering young entrepreneurs to launch and grow their businesses through mentorship and funding connections.",
    date: "Nov 2024",
    img: youthsummit,
    tall: true,
  },
  {
    id: 2,
    title: "Community Clean-Up Drive",
    aim: "Mobilising 500+ residents to reclaim public spaces and instil civic pride across five Harare neighbourhoods.",
    date: "Sep 2024",
    img: clean,
  },
  {
    id: 3,
    title: "Women in Digital Media",
    aim: "Bridging the gender gap in technology by providing free digital skills training to 150 women.",
    date: "Aug 2024",
   img : womensummit,
  },
  {
    id: 4,
    title: "Harare Farmers Market Launch",
    aim: "Creating a sustainable platform connecting local farmers directly to urban consumers, reducing food waste.",
    date: "Jul 2024",
   img : farmers,
  },
  {
    id: 5,
    title: "Youth Arts Festival",
    aim: "Giving young creatives a platform to showcase their work and connect with galleries and collectors.",
    date: "Jun 2024",
   img : creative,
    tall: true,
  },
  {
    id: 6,
    title: "Financial Literacy Roadshow",
    aim: "Reaching 1,200 secondary school students with practical money management and savings education.",
    date: "May 2024",
   img: literacy,
  },
  {
    id: 7,
    title: "Mental Health Community Walk",
    aim: "Raising awareness and reducing stigma around mental health through public dialogue and free counselling booths.",
    date: "Apr 2024",
    img: health,
  },
];

// ── CATEGORIES ───────────────────────────────────────────────────────────────
export const CATEGORIES = ["All", "Community", "Workshop", "Market", "Arts", "Health"];

// ── TAG CLASS MAP ────────────────────────────────────────────────────────────
export const TAG_CLS = {
  Community: "t-community",
  Workshop:  "t-workshop",
  Market:    "t-market",
  Arts:      "t-arts",
  Health:    "t-health",
};