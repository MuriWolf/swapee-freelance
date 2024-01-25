import { json } from "@sveltejs/kit";

export function GET() {
    let user = {
        "name": "John Josh Joe",
        "username": "JohnJoe",
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
            "name": "Aline Simpson",
            "username": "AlineSimp75",
            "country": "Greece",
            "lastDeliveryDays": 3,
            "memberSince": 12312312312,
            "languages": ["english"],
            "avarageResponseTimeHours": 5,
            "averageStars": 5,
            "profileImageSrc" : "http://res.cloudinary.com/dtrlrppzk/image/upload/v1701143887/Fiverr/nnbf9xytlfonmdjhtc5v.png",
            "postsId": ["qbbrq0x17c1jskdw055ml0rch0oh2gne"] 
        },
        {
            "name": "John Josh Joe",
            "country": "Greece",
            "lastDeliveryDays": 3,
            "memberSince": 12312312312,
            "languages": ["english", "greek"],
            "avarageResponseTimeHours": 4,
            "averageStars": 4,
            "profileImageSrc" : "http://res.cloudinary.com/dtrlrppzk/image/upload/v1701143887/Fiverr/nnbf9xytlfonmdjhtc5v.png",
            "postsId": ["88318j7zxog2yl2yxyp3x25tqw6jkmpo"] 
        }
    ]
    

    return json(data);
}