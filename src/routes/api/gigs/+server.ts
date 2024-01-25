import { json } from "@sveltejs/kit";

export function GET() {
    let user = {
        "name": "John Josh Joe",
        "country": "Greece",
        "lastDeliveryDays": 3,
        "memberSince": 12312312312,
        "languages": ["english", "greek"],
        "avarageResponseTimeHours": 4,
        "averageStars": 4,
        "profileImageSrc" : "http://res.cloudinary.com/dtrlrppzk/image/upload/v1701143887/Fiverr/nnbf9xytlfonmdjhtc5v.png"
    }

    const data = [
        {
            "id": "qbbrq0x17c1jskdw055ml0rch0oh2gne",
            "title": "I will create your professional instagram content strategy",
            "description": "Transform your brand's online presence with my artistic touch! As a Social Media Artisan, I specialize in crafting visually appealing and engaging content to elevate your social media game.",
            "reviwes": [],
            "imagesSrc": ["https://img-c.udemycdn.com/course/750x422/4850596_3d98_2.jpg"],
            "category": {
                "title": "Social Media",
                "urlName": "social-media",
            },
            "startingAt": {
                price: 40,
                currency: "bitcoin"
            },
            "user": user
        },
        {
            "id": "88318j7zxog2yl2yxyp3x25tqw6jkmpo",
            "title": "I'm doing Viral marketing",
            "description": "Transform your brand's online presence with my artistic touch! As a Social Media Artisan, I specialize in crafting visually appealing and engaging content to elevate your social media game.",
            "reviwes": [],
            "imagesSrc": ["https://wbweb.com.br/images/blog/o-que-um-social-media-faz.png"],
            "category": {
                "title": "Social Media",
                "urlName": "social-media",
            },
            "startingAt": {
                price: 40,
                currency: "bitcoin"
            },
            "user": user
        }
    ]
    

    return json(data);
}