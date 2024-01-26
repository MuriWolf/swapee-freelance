import { json } from "@sveltejs/kit";

export function GET() {
    let user = {
        "name": "John Josh Joe",
        "username": "jonh88",
        "country": "Greece",
        "lastDeliveryDays": 3,
        "memberSince": "Apr 2023",
        "languages": ["english", "greek"],
        "avarageResponseTimeHours": 4,
        "averageStars": 4,
        "profileImageSrc" : "http://res.cloudinary.com/dtrlrppzk/image/upload/v1701143887/Fiverr/nnbf9xytlfonmdjhtc5v.png",
        "description": "I offer a range of services designed to help you fully realize the vision you have for your project, business, or startup: Commercial & Non Commercial voice over for radio, tv, and internet. Corporate projects, including marketing, training, voicemail, e- learning, and narration. Voice acting for animation, video games, theater, and band. I'm a 20+ year veteran of the Nashville music industry, which allows me to offer additional audio & video services (on a per case basis) including: Background music. Audio mixing, editing, and mastering.",
        "postsId": ["88318j7zxog2yl2yxyp3x25tqw6jkmpo"] 
    }

    let userTwo = {
        "name": "Aline Simpson",
        "username": "AlineSimp75",
        "country": "Italy",
        "lastDeliveryDays": 2,
        "memberSince": "Jan 2023",
        "languages": ["italian"],
        "avarageResponseTimeHours": 7,
        "averageStars": 4.5,
        "profileImageSrc" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg",
        "description": "I offer a range of services designed to help you fully realize the vision you have for your project, business, or startup: Commercial & Non Commercial voice over for radio, tv, and internet. Corporate projects, including marketing, training, voicemail, e- learning, and narration. Voice acting for animation, video games, theater, and band. I'm a 20+ year veteran of the Nashville music industry, which allows me to offer additional audio & video services (on a per case basis) including: Background music. Audio mixing, editing, and mastering.",
        "postsId": ["qbbrq0x17c1jskdw055ml0rch0oh2gne"] 
    };

    const data = [
        {
            "id": "qbbrq0x17c1jskdw055ml0rch0oh2gne",
            "title": "I will create your professional instagram content strategy",
            "slug": "i-will-create-your-professional-instagram-content-strategy",
            "description": "Transform your brand's online presence with my artistic touch! As a Social Media Artisan, I specialize in crafting visually appealing and engaging content to elevate your social media game.",
            "reviwes": [],
            "imagesSrc": ["https://img-c.udemycdn.com/course/750x422/4850596_3d98_2.jpg"],
            "category": {
                "title": "Social Media",
                "slug": "social-media",
            },
            "startingAt": {
                price: 27,
                currency: "bitcoin"
            },
            "user": userTwo
        },
        {
            "id": "88318j7zxog2yl2yxyp3x25tqw6jkmpo",
            "title": "I'm doing Viral marketing",
            "slug": "im-doing-viral-marketing",
            "description": "Transform your brand's online presence with my artistic touch! As a Social Media Artisan, I specialize in crafting visually appealing and engaging content to elevate your social media game.",
            "reviwes": [],
            "imagesSrc": ["https://wbweb.com.br/images/blog/o-que-um-social-media-faz.png"],
            "category": {
                "title": "Social Media",
                "slug": "social-media",
            },
            "startingAt": {
                price: 15,
                currency: "bitcoin"
            },
            "user": user
        }
    ]
    

    return json(data);
}