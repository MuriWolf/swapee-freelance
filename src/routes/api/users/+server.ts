import { json } from "@sveltejs/kit";

export function GET() {
    const data = [
        {
            "name": "Aline Simpson",
            "username": "AlineSimp75",
            "country": "Greece",
            "lastDeliveryDays": 3,
            "memberSince": "Jan 2023",
            "languages": ["english"],
            "avarageResponseTimeHours": 5,
            "averageStars": 5,
            "profileImageSrc" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg",
            "description": "I offer a range of services designed to help you fully realize the vision you have for your project, business, or startup: Commercial & Non Commercial voice over for radio, tv, and internet. Corporate projects, including marketing, training, voicemail, e- learning, and narration. Voice acting for animation, video games, theater, and band. I'm a 20+ year veteran of the Nashville music industry, which allows me to offer additional audio & video services (on a per case basis) including: Background music. Audio mixing, editing, and mastering.",
            "postsId": ["qbbrq0x17c1jskdw055ml0rch0oh2gne"] 
        },
        {
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
    ]
    

    return json(data);
}