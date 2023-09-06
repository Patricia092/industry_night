// Student data as an array of objects
const students = [
    {
        name: "Abott Spencer",
        portfolio: "https://abott-spencer.com"
    },
    {
        name: "Aguilar Estefanía",
        portfolio: "https://aguilar-estefania.com"
    },
    {
        name: "Akbari Leila",
        portfolio: "https://akbari-leila.com"
    },
    {
        name: "Arora Bhuvnish",
        portfolio: "https://arora-bhuvnish.com"
    },
    {
        name: "Arora Junish",
        portfolio: "https://arora-junish.com"
    },
    {
        name: "Assi Mirdan",
        portfolio: "https://assi-mirdan.com"
    },
    {
        name: "Buria Mykyta",
        portfolio: "https://buria-mykyta.com"
    },
    {
        name: "Carriere Ezra",
        portfolio: "https://carriere-ezra.com"
    },
    {
        name: "Chaudhari Vasishth Sureshbhai",
        portfolio: "https://chaudhari-vasishth-sureshbhai.com"
    },
    {
        name: "Chaudhary Harsh Jaydevbhai",
        portfolio: "https://chaudhary-harsh-jaydevbhai.com"
    },
    {
        name: "Chicoine Jasmine",
        portfolio: "https://chicoine-jasmine.com"
    },
    {
        name: "Da Silva Martins Patricia",
        portfolio: "https://da-silva-martins-patricia.com"
    },
    {
        name: "Dahilan Kwency Maye",
        portfolio: "https://dahilan-kwency-maye.com"
    },
    {
        name: "Dames Deviano",
        portfolio: "https://dames-deviano.com"
    },
    {
        name: "Davies Amaral Lorina",
        portfolio: "https://davies-amaral-lorina.com"
    },
    {
        name: "Difuntorum Jason Marc Catamora",
        portfolio: "https://difuntorum-jason-marc-catamora.com"
    },
    {
        name: "Ekampreet Kaur Ekampreet Kaur",
        portfolio: "https://ekampreet-kaur-ekampreet-kaur.com"
    },
    {
        name: "Febra Marianne Kaye",
        portfolio: "https://febra-marianne-kaye.com"
    },
    {
        name: "Gesalan Apple Grace",
        portfolio: "https://Gesalan-apple-grace.com"
    },
    {
        name: "Gonzales David",
        portfolio: "https://gonzales-david.com"
    },
    {
        name: "Hanbury Xaviere",
        portfolio: "https://hanbury-xaviere.com"
    },
    {
        name: "Hortua Rodriguez Brayan",
        portfolio: "https://hortua-rodriguez-brayan.com"
    },
    {
        name: "Huang Shih-Hsuan",
        portfolio: "https://huang-shih-hsuan.com"
    },
    {
        name: "Huffman Logan",
        portfolio: "https://huffman-logan.com"
    },
    {
        name: "Idsardi Callidora",
        portfolio: "https://idsardi-callidora.com"
    },
    {
        name: "Jutila Ethan",
        portfolio: "https://jutila-ethan.com"
    },
    {
        name: "Kafle Samaya",
        portfolio: "https://kafle-samaya.com"
    },
    {
        name: "Khan Taylor",
        portfolio: "https://khan-taylor.com"
    },
    {
        name: "Kim Sooncheon",
        portfolio: "https://kim-sooncheon.com"
    },
    {
        name: "Linares Rico Maria Jose",
        portfolio: "https://linares-rico-maria-jose.com"
    },
    {
        name: "Ohene Jesica",
        portfolio: "https://ohene-jesica.com"
    },
    {
        name: "Perez Moreno Valentina",
        portfolio: "https://perez-moreno-valentina.com"
    },
    {
        name: "Quimosing Justine",
        portfolio: "https://quimosing-justine.com"
    },
    {
        name: "Siy Lalaine",
        portfolio: "https://siy-lalaine.com"
    },
    {
        name: "St. Pierre Renee",
        portfolio: "https://st-pierre-renee.com"
    },
    {
        name: "Zarandah Mohamed",
        portfolio: "https://zarandah-mohamed.com"
    },


    
];

const maxDisplayedStudents = 8;
let currentIndex = 0;

function generateStudentList() {
    const studentListContainer = document.querySelector(".student-list");

    for (let i = currentIndex; i < Math.min(currentIndex + maxDisplayedStudents, students.length); i++) {
        const student = students[i];

        const studentItem = document.createElement("div");
        studentItem.classList.add("student-item");

        const studentName = document.createElement("a");
        studentName.textContent = student.name;
        studentName.href = student.portfolio;
        studentName.target = "_blank";

        studentItem.appendChild(studentName);
        studentListContainer.appendChild(studentItem);
    }

    if (currentIndex + maxDisplayedStudents >= students.length) {
        document.getElementById("viewMoreBtn").style.display = "none";
    }
}

document.getElementById("viewMoreBtn").addEventListener("click", () => {
    currentIndex += maxDisplayedStudents;
    generateStudentList();
});

// Call the function to generate the initial student list
window.onload = generateStudentList;
