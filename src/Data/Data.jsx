import amyrobson from '../assets/images/avatars/image-amyrobson.png'
import maxblagun from '../assets/images/avatars/image-maxblagun.png'
import ramsesmiron from '../assets/images/avatars/image-ramsesmiron.png'
import juliusomo from '../assets/images/avatars/image-juliusomo.png'

export const commentsData = [
    {
        id: 1,
        content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt : "1 month ago",
        score : 12,
        username :  "amyrobson",
        image: amyrobson,
        vote: true,
        replyThis : false
    },

    {
        id: 2,
        content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt : "2 weeks ago",
        score : 5,
        username :  "maxblagun",
        image: maxblagun,
        vote: true,
        replyThis : false
    }
]

export const repliesData = [

    {
        id: 1,
        content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt :"1 week ago",
        score : 4,
        username :  "ramsesmiron",
        image: ramsesmiron,
        replyingTo : "maxblagun",
        vote: true,
        replyThis : false
    },

    {
        id: 2,
        content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt : "2 days ago",
        score : 2,
        username :  "juliusomo",
        image: juliusomo,
        replyingTo : "ramsesmiron",
        reply : false,
        action: true,
        currentUser: true,
        vote: false,
        replyThis : false,
        editThis : false
    },

]

