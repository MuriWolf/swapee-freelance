import { json } from "@sveltejs/kit";

export function GET() {
    const data = [
        {
            "title": "Social Media",
            "subtitle": "Reach more costumers",
            "urlName": "social-media",
            "imgSrc": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
        },
        {
            "title": "Seo",
            "subtitle": "Unlock growth online",
            "urlName": "seo",
            "imgSrc": "https://images.assetsdelivery.com/compings_v2/kantver/kantver1609/kantver160900251.jpg"
        },
        {
            "title": "Translation",
            "subtitle": "Go global",
            "urlName": "translation",
            "imgSrc": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
        },
        {
            "title": "Data entry",
            "subtitle": "Learn your business",
            "urlName": "data-entry",
            "imgSrc": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
        },
    ]

    return json(data);
}
