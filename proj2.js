let users = [
    {
        "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        "name": "Aarav Mehta",
        "description": "Wildlife photographer who captures mountain and forest life with dramatic light."
    },
    {
        "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        "name": "Mira Kapoor",
        "description": "Travel writer sharing hidden city stories, local culture, and food experiences."
    },
    {
        "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
        "name": "Rohan Verma",
        "description": "Frontend developer building clean interfaces with smooth interactions and motion."
    },
    {
        "img": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
        "name": "Sara Ali",
        "description": "Digital artist focused on colorful portraits and storytelling through illustration."
    },
    {
        "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
        "name": "Kabir Nair",
        "description": "Fitness coach helping beginners build simple routines for strength and mobility."
    },
    {
        "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
        "name": "Isha Dutta",
        "description": "Baker and recipe creator sharing easy desserts with creative flavors and styling."
    }
]

function showUsers(arr){
    arr.forEach((user)=>{
        const card = document.createElement('div');
        card.classList.add("card");
        const img = document.createElement('img');
        img.src = user.img;
        const content = document.createElement('div');
        content.classList.add("card-content");
        const heading = document.createElement('h1');
        heading.textContent = user.name;
        const about = document.createElement('p');
        about.textContent = user.description;
        content.appendChild(heading);
        content.appendChild(about);
        card.appendChild(img);
        card.appendChild(content);
        document.getElementById('cardGrid').appendChild(card);
    })

}
showUsers(users);
function filteruser(name) {
    return users.filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase());
    });
}

const input = document.getElementById('searchInput');
input.addEventListener('input',(e)=>{
    const searchTerm = e.target.value.toLowerCase();
    const filtered = filteruser(searchTerm);
    document.getElementById("cardGrid").innerHTML = "";
    showUsers(filtered);
})


