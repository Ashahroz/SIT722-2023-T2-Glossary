var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const glossaryData = [
    {
      "ID": 1,
      "Term": "Agile Development",
      "Description": "Agile development is an iterative and incremental software development approach that emphasizes collaboration, adaptability, and customer feedback to deliver high-quality products efficiently.",
      "References": "[1] A. Cockburn, J. Highsmith, A. Kern, J. W. Scrum. Agile software development: The cooperative game, IEEE Computer, 2001. https://www.researchgate.net/publication/265754004_Agile_Software_Development_The_Cooperative_Game_An_Overview"
    },
    {
      "ID": 2,
      "Term": "Docker",
      "Description": "Docker is an open-source containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers for easy deployment and scalability.",
      "References": "[2] Turnbull. The Docker Book: Containerization Is the New Virtualization, Lulu, 2014. https://books.google.com.au/books/about/The_Docker_Book.html?id=4xQKBAAAQBAJ&redir_esc=y"
    },
    {
      "ID": 3,
      "Term": "Cloud",
      "Description": "Cloud computing refers to the delivery of computing resources, such as servers, databases, networking, and storage, over the internet on a pay-as-you-go basis.",
      "References": "[3] P. Mell, T. Grance. The NIST Definition of Cloud Computing, National Institute of Standards and Technology, 2011. https://csrc.nist.gov/pubs/sp/800/145/final#:~:text=Cloud%20computing%20is%20a%20model,effort%20or%20service%20provider%20interaction."
    },
    {
      "ID": 4,
      "Term": "DevOps",
      "Description": "DevOps is a collaborative culture and set of practices that unify development and operations teams to streamline software delivery, improve efficiency, and enhance communication through automation and continuous integration.",
      "References": "[4] Amazon, What is DevOps? - Amazon Web Services (AWS), Amazon Web Services, Inc., 2019. https://aws.amazon.com/devops/what-is-devops/"
    },
    {
      "ID": 5,
      "Term": "Wall of Confusion",
      "Description": "Wall of Confusion refers to the barriers and miscommunication between development and operations teams in non-DevOps organizations, hindering effective collaboration and workflow.",
      "References": "[5] S. Kawaguchi, The Wall of Confusion, Medium, Feb. 12, 2022. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26"
    },
    {
      "ID": 6,
      "Term": "Kubernetes",
      "Description": "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications, simplifying container management across clusters.",
      "References": "[6] B. Burns, J. Beda, B. Grant. Design Patterns for Container-Based Distributed Systems, USENIX, 2016. https://www.usenix.org/conference/hotcloud16/workshop-program/presentation/burns"
    },
    {
      "ID": 7,
      "Term": "Silos",
      "Description": "Silos refer to isolated and disconnected teams or departments within an organization, which obstruct effective collaboration and communication, often leading to inefficiencies.",
      "References": "[7] S. McConnell. Software Project Survival Guide, Microsoft Press, 1998. https://dl.acm.org/doi/10.5555/270015"
    },
    {
      "ID": 8,
      "Term": "Microservices",
      "Description": "Microservices is an architectural style where an application is composed of small, independent services that communicate through APIs, allowing for modular development, deployment, and scalability.",
      "References": "[8] M. Fowler. Microservices: A definition of this new architectural term, martinfowler.com, 2014. https://martinfowler.com/articles/microservices.html#:~:text=In%20short%2C%20the%20microservice%20architectural,often%20an%20HTTP%20resource%20API."
    },
    {
      "ID": 9,
      "Term": "SDLC (Software Development Life-cycle)",
      "Description": "SDLC is a structured approach to software development that encompasses planning, design, coding, testing, deployment, and maintenance, ensuring a systematic and organized development process.",
      "References": "[9] W. Moore. A Life Cycle Model for Software Development and Support, IEEE Transactions on Software Engineering, 1987. https://dl.acm.org/doi/10.5555/4330"
    },
    {
      "ID": 10,
      "Term": "Terraform",
      "Description": "Terraform is an open-source infrastructure as code (IaC) tool that allows developers to define and manage cloud infrastructure through declarative configuration files, enabling consistent and automated infrastructure provisioning.",
      "References": "[10] M. Wittig and Y. Wittig, Terraform: Up and Running, 3rd Edition [Book], O'Reilly, 2019. https://learning.oreilly.com/library/view/terraform-up-and/9781098116736/ch01.html"
    },
    {
      "ID": 11,
      "Term": "Azure",
      "Description": "Microsoft's cloud computing platform that offers a range of services for building, deploying, and managing applications and services through a global network of data centers.",
      "References": "[11] Wikipedia Contributors, “Microsoft Azure,” Wikipedia, Oct. 12, 2019. https://en.wikipedia.org/wiki/Microsoft_Azure"
    },
    {
      "ID": 12,
      "Term": "Google Cloud",
      "Description": "Google's suite of cloud computing services that provide infrastructure, storage, data analytics, machine learning, and other cloud-based solutions.",
      "References": "[12] Wikipedia Contributors, “Google Cloud Platform,” Wikipedia, Oct. 11, 2019. https://en.wikipedia.org/wiki/Google_Cloud_Platform"
    },
    {
      "ID": 13,
      "Term": "Architecture Development Method (ADM)",
      "Description": "The Architecture Development Method (ADM) is a step-by-step process within the TOGAF framework for creating and managing enterprise architectures. It provides a structured approach to design, plan, and implement architecture solutions.",
      "References": "[13] “What is TOGAF Architecture Development Method - EA Learning,” www.ealearning.com. https://www.ealearning.com/info-centre/togaf-adm.html#:~:text=The%20ADM%20is%20a%20generic."
    },
    {
      "ID": 14,
      "Term": "Minimum Viable Product (MVP)",
      "Description": "A version of a product with the minimum features required to satisfy early customers and gather feedback for future development.",
      "References": "[14] ProductPlan, “What is a Minimum Viable Product (MVP)? | A Product Mgmt Definition,” www.productplan.com, 2022. https://www.productplan.com/glossary/minimum-viable-product/"
    },
    {
      "ID": 15,
      "Term": "Continuous Integration/Continuous Deployment (CI/CD)",
      "Description": "Continuous Integration/Continuous Deployment, a software development practice where code changes are automatically built, tested, and deployed to production.",
      "References": "[15] Redhat, “What is CI/CD?,” Redhat.com, 2019. https://www.redhat.com/en/topics/devops/what-is-ci-cd"
    },
    {
      "ID": 16,
      "Term": "DevOps Cycle",
      "Description": "A set of continuous development, testing, deployment, and monitoring practices aimed at improving collaboration and efficiency between software developers and IT operations teams.",
      "References": "[16] “DevOps Lifecycle : Different Phases in DevOps,” BrowserStack. https://www.browserstack.com/guide/devops-lifecycle#:~:text=The%20DevOps%20lifecycle%20is%20a"
    },
    {
      "ID": 17,
      "Term": "Productivity",
      "Description": "The measure of how efficiently resources, such as time and effort, are utilized to achieve desired outputs or results.",
      "References": "[17] corporateName:Productivity Commission, “What is Productivity?,” www.pc.gov.au, May 13, 2021. https://www.pc.gov.au/what-is-productivity"
    },
    {
      "ID": 18,
      "Term": "Everything-as-Code",
      "Description": "The practice of representing all aspects of software development and infrastructure management as code, allowing for automation and version control.",
      "References": "[18] O. Deploy, “What is Everything as Code?,” Octopus Deploy. https://octopus.com/blog/what-is-everything-as-code#:~:text=Everything%20as%20Code%20(EaC)%20is"
    },
    {
      "ID": 19,
      "Term": "IT Service Management",
      "Description": "A set of practices for planning, delivering, managing, and improving IT services to meet the needs of an organization and its customers.",
      "References": "[19] Wikipedia Contributors, “IT service management,” Wikipedia, Mar. 20, 2019. https://en.wikipedia.org/wiki/IT_service_management"
    },
    {
      "ID": 20,
      "Term": "DevOps Principles",
      "Description": "Core principles in the DevOps culture, including automation, collaboration, continuous feedback, and shared responsibility between development and operations teams.",
      "References": "[20] S. Roddewig, “7 Principles of DevOps for Successful Development Teams,” blog.hubspot.com. https://blog.hubspot.com/website/devops-principles"
    },
    {
      "ID": 21,
      "Term": "Containers",
      "Description": "Lightweight and isolated environments that package applications and their dependencies, enabling consistent deployment across different computing environments.",
      "References": "[21] Docker, “What is a Container?,” Docker. https://www.docker.com/resources/what-container/"
    },
    {
      "ID": 22,
      "Term": "Virtual Machines",
      "Description": "Virtualized instances of operating systems that emulate dedicated hardware, allowing multiple operating systems to run on a single physical host.",
      "References": "[22] “What is a Virtual Machine? | VMware Glossary,” VMware, Aug. 04, 2022. https://www.vmware.com/au/topics/glossary/content/virtual-machine.html#:~:text=A%20Virtual%20Machine%20(VM)%20is"
    },
    {
      "ID": 23,
      "Term": "Container Images",
      "Description": "Standalone, executable packages that include application code, runtime, libraries, and settings, enabling consistent application deployment and scaling.",
      "References": "[23] “What is container image? | Definition from TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/definition/container-image"
    },
    {
      "ID": 24,
      "Term": "Repositories",
      "Description": "Storage locations for versioned code, configuration, and artifacts, facilitating collaboration and version control in software development.",
      "References": "[24] “Repositories,” Docker Documentation, Dec. 18, 2020. https://docs.docker.com/docker-hub/repos/"
    },
    {
      "ID": 25,
      "Term": "Docker Image",
      "Description": "A lightweight, standalone, executable software package that includes everything needed to run a piece of software, including code, runtime, libraries, and system tools.",
      "References": "[25] “What is a Docker Image? Introduction and use cases,” IT Operations.https://www.techtarget.com/searchitoperations/definition/Docker-image#:~:text=A%20Docker%20image%20is%20a"
    },
    {
      "ID": 26,
      "Term": "Declarative Container Management",
      "Description": "The approach of specifying the desired state of containers and infrastructure, letting automated tools ensure the actual state matches the desired state.",
      "References": "[26] Packtpub.com, 2022. https://subscription.packtpub.com/book/cloud-and-networking/9781800562387/3/ch03lvl1sec20/declarative-container-management-with-docker-compose"
    },
    {
      "ID": 27,
      "Term": "Cloud Native",
      "Description": "Designing and building applications that leverage cloud resources, dynamically scale, and follow modern architecture patterns for resilience and flexibility.",
      "References": "[27] “What is Cloud Native? - Cloud Native Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/cloud-native/"
    },
    {
      "ID": 28,
      "Term": "Docker Compose",
      "Description": "A tool to define and manage multi-container applications using a simple YAML file, enabling easy orchestration of interconnected services.",
      "References": "[28] “What is Docker Compose: Benefits and Basic Commands,” Simplilearn.com. https://www.simplilearn.com/tutorials/docker-tutorial/docker-compose"
    },
    {
      "ID": 29,
      "Term": "Azure Storage",
      "Description": "A cloud-based storage service provided by Microsoft Azure, offering scalable and durable data storage solutions for various types of data.",
      "References": "[29] tamram, “Introduction to Azure Storage - Cloud storage on Azure,” learn.microsoft.com, 2023. https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction"
    },
    {
      "ID": 30,
      "Term": "MongoDB",
      "Description": "An open-source NoSQL database system that stores data in a flexible, schema-less format, making it suitable for handling diverse and rapidly changing data.",
      "References": "[30] MongoDB, “What Is MongoDB?,” MongoDB, 2019. https://www.mongodb.com/what-is-mongodb"
    },
  ];

  res.render('index', {
    title: 'DevOps SIT722 Glossary', sub: 'Explore my website featuring a curated collection of DevOps terms and their concise descriptions.',glossaryData: glossaryData });
});

module.exports = router;

