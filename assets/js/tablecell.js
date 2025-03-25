const projectRows = [
    {
        "name": "IoT Workshop Machine Monitoring System using RuuviTags + Ruuvi Gateway",
        "company": "Prog-IT",
        "customer": "Confidential",
        "period": "10/2023",
        "description": "Developed a system using RuuviTags sensors and Ruuvi Gateway to monitor and determine which workshop machines are operational. The solution includes real-time data collection from IoT sensors with a .NET Core backend for data processing and storage.",
        "tools": "Dotnet Core, Entity Framework Code First with migrations, Visual Studio, MS SQL Server, RuuviTags, Ruuvi Gateway",
        "role": "Lead Developer",
        "responsibilityareas": "Development and architecture design of the entire solution",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Energy Infrastructure LLM Data Search RAG AI Solution, (Production)",
        "company": "Prog-IT",
        "customer": "Confidential",
        "period": "1/2024 - Present",
        "description": "Production implementation of RAG-based AI assistant using Azure AI Search and GPT-4o for energy sector documentation. Handles complex regulatory documents with vector search (ada-002 embeddings) and citation generation.",
        "tools": "Azure AI Studio, .NET Core, Azure AI Search, GPT-4o, Ada-002 embeddings, Azure App Service, Azure Blob Storage, Vue, Bootstrap",
        "role": "AI Solution Architect",
        "responsibilityareas": "AI & Front-end development",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Energy Infrastructure LLM Data Search RAG AI Solution, (POC)",
        "company": "Prog-IT",
        "customer": "Confidential",
        "period": "11/2023 - 12/2023",
        "description": "Proof-of-concept for regulatory document chatbot using RAG architecture. Demonstrated document ingestion pipeline with Azure AI Search and GPT-4 integration for natural language queries.",
        "tools": "Azure AI Search, .NET Core, Python, GPT-4, Azure Blob Storage, Azure App Service",
        "role": "Lead Developer",
        "responsibilityareas": "Architecture design for AI system",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Azure RAG LLM Data Search Prototype",
        "company": "Prog-IT",
        "customer": "Internal R&D",
        "period": "9/2023 - 10/2023",
        "description": "Prototype development of RAG framework for energy documentation using GPT-4o and Azure AI Search...",
        "tools": "Azure AI Studio, .NET Core, Azure AI Search, GPT-4o, Ada-002 embeddings, Azure App Service, Azure Blob Storage",
        "role": "AI Solution Architect",
        "responsibilityareas": "System architecture, performance optimization, security compliance, prototype development",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Contract Content Management and Editing Framework",
        "company": "Prog-IT",
        "customer": "Confidential",
        "period": "8/2023 - Present",
        "description": "Full stack development of enterprise contract content management system using .NET Framework and Entity Framework. Web-based solution for legal document customization and version control.",
        "tools": ".NET Framework, Entity Framework, Azure SQL Server, Azure App Service, REST API, JavaScript, jQuery, Bootstrap",
        "role": "Senior Full Stack Developer",
        "responsibilityareas": "Backend development, API integration, database design, Azure deployment",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Client Data Integration Solutions",
        "company": "Prog-IT",
        "customer": "Confidential",
        "period": "8/2023 - Present",
        "description": "Development of custom ETL pipelines and API integrations for external clients across various industries. Implemented cloud-based data solutions handling sensitive customer data with strict compliance requirements.",
        "tools": "ASP.NET Core, Azure Data Factory, REST/SOAP APIs, Azure SQL, Azure DevOps",
        "role": "Integration Developer",
        "responsibilityareas": "Client requirements analysis, secure data pipeline design, API development, cloud deployment",
        "image_src": "",
        "link": "",
        "repo": ""
    },
    {
        "name": "Freely hosted reservation system for a roleplaying convention",
        "company": "",
        "customer": "",
        "period": "2023",
        "description":  "Serverless NodeJS with Atlas MongoDB backend for free hosting. Idea is to provide simple freely hosted tool for organizing roleplaying meetings. Conventions-Games-Signups combination. Repo will be opensource. Demosite link is provided here. Tested also hosting at Azure App Service via Docker, but that started to produce costs.",
        "tools": "VSCode, NodeJS, MongoDB, JavaScript, Git, Docker, Azure App Service, (Maybe React later)",
        "role": "",
        "responsibilityareas": "",
        "image_src": "images/con_planner.png",
        "link": "https://library-rkgu.onrender.com/con",
        "repo": "https://github.com/esoinila/con-planner",
    },

    {
        "name": "Re-training Stable diffusion with selfies to produce selfies",
        "company": "Hobby project",
        "customer": "Customer 1",
        "period": "2023",
        "description": "Re-training stable diffusion 1.5 with own pictures to make realistic fake selfie images.",
        "tools": "Google Colab, Automatic111, PyTorch, Diffucers-library, GitHub",
        "role": "",
        "responsibilityareas": "",
        "image_src": "images/deep-selfie.png",
        "link": "",
    },
    {
        "name": "Cornerstone",
        "company": "Zoan",
        "customer": "",
        "period": "8/2022 – 11/2022",
        "description": "Crypto-metaverse-NFT-scheme, where people buy NFT-land from a shared 3D game world running in the cloud. Game is played via browser client that handles interactive game video from pixelstreaming host and communication via Web RTC to other players.",
        "tools": "React TS, CloudFormation, AWS Amplify VS Code,  AWS SAM, Unreal Engine, Kubernetes",
        "role": "",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "Zombie game with UE5",
        "company": "Hobby project",
        "customer": "",
        "period": "7/2022 – 8/2022",
        "description": "I needed to learn Unreal Engine 5. So I combined my favorite Zombie game tutorials into one combination I liked. There is a repo and a link to video of the gameplay.",
        "tools": "Unreal Engine 5, Visual Studio",
        "role": "",
        "responsibilityareas": "",
        "image_src": "images/zombies.png",
        "link": "https://youtu.be/Eu39aQ-dCTQ",
        "repo": "https://github.com/esoinila/BP_comm"
    },


    {
        "name": "Visualizing 3D Data from Point Distance Information with multidimensional scaling-algorithm (MDS) in Python",
        "company": "Hobby project",
        "customer": "",
        "period": "4/2022 – 5/2022",
        "description": "Applying linear algebra and scientific algorithms (MDS, Procrustes) to 3D point cloud data and visualizing the 3D data with python.",
        "tools": "Visual Studio Code, Jupyter notebook, GitHub CoPilot, SciPy",
        "role": "",
        "responsibilityareas": "",
        "image_src": "",
        "link": "https://medium.com/mlearning-ai/visualizing-3d-data-from-point-distance-information-with-mds-algorithm-in-python-e413c8d28631#e2e4-5ec3e29e34a4",
    },

    {
        "name": "Mobile app for customer company (in AppStore and Android Play)",
        "company": "Circles Consulting",
        "customer": "Medium size Finnish company",
        "period": "7/2021 – 10/2021",
        "description": "Technical satellite related monitoring and customer engagement app for iOS and Android",
        "tools": "Visual Studio Code, Flutter, Twitter API, custom python backend",
        "role": "Flutter developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "Matching scraped wanted ads with free consultants CVs",
        "company": "Circles Consulting",
        "customer": "Internal project",
        "period": "3/2021 – 6/2021",
        "description": "Office automation. Scraping Indeed for wanted ads and company google drive folder for CVs. Matching based on unary-, binary- and tertiary terms.",
        "tools": "Python, Natural Language ToolKit, KeyBert on PC (Anaconda / Jupyter Notebook).",
        "role": "Data scientist, developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "Reinforcement Learning in 3D Environment",
        "company": "Hobby project",
        "customer": "",
        "period": "8/2020 – 2/2021",
        "description": "Combining Unity3D library with Python TensorFlow to have AI agent learn by experience i.e. trial and error inside artificial 3D world. One on a plane, two mobile artillery pieces move and shoot each other with indirect fire. Second with Keplerian orbits, where ML-Agents learn to navigate in space by trial and error with realistic space physics. Here the grid data is used to visualize acceleration vectors in space for UI purposes.",
        "tools": "Unity3D ML-Agents, Tensorflow on PC (Anaconda / Jupyter Notebook).",
        "role": "",
        "responsibilityareas": "",
        "image_src": "images/reinforcement.png",
        "link": "https://www.linkedin.com/feed/update/urn:li:activity:6735863576419946496?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6735863576419946496%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FErp%2F9rHRVWCwiNZ7xZWHQ%3D%3D",
    },


    {
        "name": "Global Spare Part Management Software",
        "company": "Softability",
        "customer": "Large Global Company",
        "period": "1/2020 – 3/2021",
        "description": "C# Desktop app maintenance and development for actively used global spare part management software. Software is used to manage spare parts for some of the largest industrial machinery in the world.",
        "tools": "Visual Studio, C#, git",
        "role": "Front-end developer (only one)",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },


    {
        "name": "VR-assembly and machine use training demo",
        "company": "Softability Oy",
        "customer": "",
        "period": "12/2019 – 1/2020",
        "description": "Assemble MoccaMaster Coffeemaker in virtual reality and make virtual coffee with it using Oculus Quest-VR-glasses",
        "tools": "Unity coding on PC and deploying to Oculus Quest-VR-glasses",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "ARKit 3.0 trade show demo",
        "company": "Softability Oy",
        "customer": "Large industrial outdoor light manufacturer",
        "period": "11/2019 – 1/2020",
        "description": "Customer product portfolio presentation using ARKit 3 with multiple users. Different viewers see and can interact with shared added reality objects to select product options in a try-before-buy type of scenario.",
        "tools": "Unity coding on Mac with iPhone & iPad deployment, XCode for installing onto device.",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "ARKit 3.0 Sales support demo",
        "company": "Softability Oy",
        "customer": "Global heavy industry manufacturer",
        "period": "12/2019 – 1/2020",
        "description": "Customer product portfolio presentation using ARKit 3 with multiple users. Different viewers see the forklift and can interact with shared added reality objects to select product options in a try-before-buy type of scenario.",
        "tools": "Unity coding on Mac with iPhone & iPad deployment, XCode for installing onto device.",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "Demo application for Android Smart-glasses HMT-1 Realwear",
        "company": "Softability Oy",
        "customer": "Pyylahti",
        "period": "8/2019 – 9/2019",
        "description": "Exhibition demo about using smart-glasses to set up explosions in urban areas with smart detonators (for construction purposes).",
        "tools": "Unity coding on Mac with iPhone & iPad deployment, XCode for installing onto device.",
        "role": "Senior Software Developer",
        "responsibilityareas": "Technical implementation (Unity coding)",
        "image_src": "",
        "link": "",
    },

    {
        "name": "UI for autonomously moving huge floating objects",
        "company": "Softability Oy",
        "customer": "Global British company in aviation and maritime industries",
        "period": "1/2019 – 7/2019",
        "description": "Autonomously moving objects need UI to display the result of sensor fusion to the user/users.",
        "tools": "Unity coding on Mac with iPhone & iPad deployment, XCode for installing onto device.",
        "role": "Senior Software Developer",
        "responsibilityareas": "<ul class='table-ul'><li>Coding / development for the Unity UI</li><li>Participating in architecture decisions</li></ul>",
        "image_src": "",
        "link": "",
    },

    {
        "name": "HoloLens demo for Dynamics 365",
        "company": "Softability Oy",
        "customer": "Arrow / Microsoft",
        "period": "10/2018 – 12/2018",
        "description": "HoloLens data visualization for remote maintenance use case demonstration in Microsoft demo-rooms.",
        "tools": "Unity coding on Mac with iPhone & iPad deployment, XCode for installing onto device.",
        "role": "Senior Software Developer",
        "responsibilityareas": "<ul class='table-ul'><li>Coding / development for the Unity AR side on HoloLens</li><li>On site demo showcasing and tuning</li></ul>",
        "image_src": "",
        "link": "",
    },

    {
        "name": "ARKit 2.0 3D object position and orientation recognizer and scanner demo",
        "company": "Softability Oy",
        "customer": "",
        "period": "7/2018 – 9/2018",
        "description": "Testing of ARKit 2.0 (beta) technology, especially 3D object recognition and scanning for later recognition.",
        "tools": "For natiove iOS, Swift on Xcode 10(beta). For Unity3D (Visual Studio / C#). running on iOS12 (beta). For Unity3D using the ARKit unity plugin (beta).",
        "role": "Senior Software Developer",
        "responsibilityareas": "<ul class='table-ul'><li>For Unity versions testing the recognition of own scanned multiple objects with a simple test app</li><li>For native iOS(Swift) adding multiple object recognition capability and storage onto Apple provided single-scan-recognizing-swift-sample app. Also added user provided description and UI to it using auto layout on storyboard in Xcode.</li></ul>",
        "image_src": "",
        "link": "",
    },
    {
        "name": "Inertial Navigation System using Suunto MoveSense IMU",
        "company": "Softability Oy",
        "customer": "Global Mining Technology Company",
        "period": "04/2018 – 06/2018",
        "description": "Inertial navigation system is used to calculate user position based on accumulated user movements when normal open-sky-methods are not available.",
        "tools": "For natiove iOS, Swift on Xcode 10(beta). For Unity3D (Visual Studio / C#). running on iOS12 (beta). For Unity3D using the ARKit unity plugin (beta).",
        "role": "Senior Software Developer",
        "responsibilityareas": "<ul class='table-ul'><li>Collecting the IoT data from the device and sending it to be analyzed in the cloud.</li><li>Database API is used to collect all users data and provide it to 3D VR mobile UI</li><li>Unity3D version of step quaternion sender</li><li>Native Java version step quaternion sender</li></ul>",
        "image_src": "",
        "link": "",
    },
    {
        "name": "X-Reality Workshop",
        "company": "Softability Oy",
        "customer": "IT-startup digitalizing construction sites",
        "period": "1/2018 – 3/2018",
        "description": "Testing client relevant technologies: mobile browser AR, 3D-meshes from camera-drone photogrammetry, deep learning. Included a full-stack demo with mobile browser client & deep learning REST backend for image recognition.",
        "tools": "For natiove iOS, Swift on Xcode 10(beta). For Unity3D (Visual Studio / C#). running on iOS12 (beta). For Unity3D using the ARKit unity plugin (beta).",
        "role": "",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },
    {
        "name": "WebRTC related project",
        "company": "Softability Oy",
        "customer": "Global Mining Technology Company",
        "period": "3/2018",
        "description": "Research for call notification architecture for multiplatform (PC, iOS, Android) product.",
        "tools": "Unity3D(C#), XCode, OneSignal, Android Studio, Visual Studio, Git",
        "role": "",
        "responsibilityareas": "Research and demo",
        "image_src": "",
        "link": "",
    },
    {
        "name": "Tehomet AR project",
        "company": "Softability Oy",
        "customer": "Tehomet",
        "period": "sometime during 2017",
        "description": "A lighting pole AR demonstration program on iOS.",
        "tools": "Unity3D(C#), XCode, OneSignal, Android Studio, Visual Studio, Git",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },
    {
        "name": "Free-time AR-Basketball game",
        "company": "Hobby game project",
        "customer": "",
        "period": "Random free time moments 2017 & 2018",
        "description": "Place a basketball hoop and throw basketballs into it. Many similar ones in AppStore, so this one still needs more development to stand out somehow.",
        "tools": "Unity3D(C#), XCode, OneSignal, Android Studio, Visual Studio, Git",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },
    {
        "name": "WebRTC related project",
        "company": "Softability Oy",
        "customer": "Global Mining Technology Company",
        "period": "Some months during 2017",
        "description": "WebRTC plugin for Unity3D iOS-development.",
        "tools": "Unity3D(C#), XCode, ObjectiveC, Visual Studio, Git",
        "role": "",
        "responsibilityareas": "Research and development",
        "image_src": "",
        "link": "",
    },
    {
        "name": "Softability SLUSH demo",
        "company": "Softability Oy",
        "customer": "",
        "period": "Several weeks before Slush 2017",
        "description": "Vuforia image recognition of circuit board adds information about circuit board when circuit board is recognized. On HMT-1 glasses uses audio commands.",
        "tools": "Unity3D(C#), Vuforia, Android Studio, Visual Studio, Git",
        "role": "",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },

    {
        "name": "Industrial Equipment manufacturer AR project",
        "company": "Softability Oy",
        "customer": "Global vertical people moving equipment manufacturer",
        "period": "3/2017",
        "description": "Integrating Augmented Reality into maintenance.",
        "tools": "Unity3D(C#), Android Studio, Visual Studio, Git",
        "role": "",
        "responsibilityareas": "Developing UI experience",
        "image_src": "",
        "link": "",
    },
    {
        "name": "HummCar",
        "company": "Indie iOS AppStore published game",
        "customer": "",
        "period": "4/2015 - 3/2017",
        "description": "Study of using human voice humming as an input method for a ScalexTrix-like car racing game. The 3D game was available in Apple App Store. Link to video of the game being played: ",
        "tools": "Unity3D(C#), XCode, OneSignal, Android Studio, Visual Studio, Git",
        "role": "Everything except music and some graphics",
        "responsibilityareas": "",
        "image_src": "images/hummcar.png",
        "link": "https://drive.google.com/file/d/1bXvZ7NdEfqYenoIbnua3qfu9cmcuvFx8/view?usp=sharing",
    },
    {
        "name": "Pilvisanakoe",
        "company": "",
        "customer": "Various teachers at Saarnilaakso School",
        "period": "9/2012 - 12/2014",
        "description": "Cloud data-based word test / learning solution. Both for website and iOS devices. Material can be created from mobile devices.  ",
        "tools": "Unity3D (JavaScript), Blender, Visual Studio, Gimp, PHP, MySQL",
        "role": "Unity3D coding",
        "responsibilityareas": "",
        "image_src": "images/pilvisanakoe.png",
        "link": "https://youtu.be/aw-tK9XCiKc",
    },
    {
        "name": "Avaruusmetro",
        "company": "ASSEMBLY game-jam game",
        "customer": "",
        "period": "8/2015 (4 days)",
        "description": "2D Unity game where player flies in space with a fire-extinguisher hoping to commute from big-cannon launch to a gigantic butterfly-net at destination.",
        "tools": "Unity3D (JavaScript), Blender, Visual Studio, Gimp, PHP, MySQL",
        "role": "Unity3D coding",
        "responsibilityareas": "Coming up with the idea and selling it to collaborators, programming, technical 2D graphics production from 3D models",
        "image_src": "images/avaruusmetro.png",
        "link": "https://youtu.be/HVsaQlt-b-Y",
    },
    {
        "name": "AMORFIT",
        "company": "Aalto University",
        "customer": "TEKES",
        "period": "6/2006 - 12/2009",
        "description": "Study on the commercialization potential of my doctoral thesis topic.",
        "tools": "Office-tools, research tools, Comsol, CAD, Research data processing tools",
        "role": "Project Manager / Research / Reporting",
        "responsibilityareas": "Project manager. Implementing project steering group decisions, Project plan first draft writing, technical aspects, writing the first draft project report.",
        "image_src": "images/amorfit.png",
        "link": "",
    },
    {
        "name": "AMORFISET",
        "company": "Aalto University",
        "customer": "TEKES / NOKIA Research Centre / Savcor/ Outokumpu PoriCopper",
        "period": "6/2006 - 12/2009",
        "description": "Research project suggested by Nokia Research Centre. A study on the potential applications of amorphous metals on cellphones. The designed and built patented research equipment was the basis of my Doctoral thesis.  See link for equipment use video.",
        "tools": "Office-tools, research tools, Comsol, CAD, Research data processing tools",
        "role": "Project Manager / Research / Reporting",
        "responsibilityareas": "Project manager. Machine design. Implementing project steering group decisions, Project plan first draft writing, technical aspects, writing the first draft project report.",
        "image_src": "images/amorfiset.jpg",
        "link": "https://youtu.be/J2fUFyAZN8g",
        //"video": "https://youtu.be/J2fUFyAZN8g"
    },
    {
        "name": "Milnet-website",
        "company": "SA-Int (part of military service)",
        "customer": "",
        "period": "6/2002 - 1/2003",
        "description": "A learning portal maintenance & further development. The portal makes it possible to do theories before coming to exercise into service for reservists.",
        "tools": "PHP / PostgreSQL / HTML / CSS / Apache / Linux / Windows Server",
        "role": "Team selection, PHP coding, Customer support",
        "responsibilityareas": "Lead coder / Team Manager",
        "image_src": "",
        "link": "",
    },
    {
        "name": "STARAOKE",
        "company": "Elmorex",
        "customer": "Intervisio",
        "period": "11/2001 - 1/2003",
        "description": "Singing game and Emmy award winning TV-format based on it. ",
        "tools": "Visual Studio / C++ / Windows",
        "role": "Separating the ready made singing game from a previous product into the Staraoke Game Product. Adding one height level to the schrolling graphics. ",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
    },
    {
        "name": "Soittopeli / PlaySingMusic",
        "company": "Elmorex",
        "customer": "",
        "period": "11/1997 - 1/2002",
        "description": "Musical edutainment game with 3 accompaniment orchestras and 3 sub games. The Forest, Undersea and Space orchestras accompanimented the players melody note with two accompaniment notes selected by neural network. The games could be played with musical instruments (pitch detection). One of the sub-games was the singing game that was separated into the TV-format Staraoke. ",
        "tools": "Visual Studio / C++ / Windows",
        "role": "Head programmer, UI-coding and combining all the C++ parts of the application into one project. Tirelesly promoting / evangelicising the idea of making a singing game until we got permission to do it. Rumour is that the excited bear character is based on me.",
        "responsibilityareas": "",
        "image_src": "images/soittopeli.png",

        "link": "images/HS2001.pdf",
    },



]

const insertTableCells = () => {
    let innerHtml = '<tbody>';

    projectRows.forEach(row => {
        innerHtml += '<tr>';
        innerHtml += '<td class="project-td">';
        innerHtml += '<h5 class="table-h5">Name</h5> <p class="table-p">' + row.name + '</p>';
        innerHtml += '<h5 class="table-h5">Company</h5>';
        innerHtml += '<p class="table-p">' + row.company + '</p>';

        if(row.customer != ""){
            innerHtml += '<h5 class="table-h5">Customer</h5>';
            innerHtml += '<p class="table-p">' + row.customer + '</p>';
        }
        innerHtml += '<h5 class="table-h5">Period</h5>';
        innerHtml += '<p class="table-p">' + row.period + '</p>';
        innerHtml += '</td>';
        innerHtml += '<td class="project-td">';
        innerHtml += '<h5 class="table-h5">Project experience</h5>';
        innerHtml += '<p class="table-p">' + row.description;

        if(row.link != ""){
            innerHtml += ' <a href="' + row.link + '"> Demo Link </a> ' + ' ';
        }
        if('repo' in row && row.repo != ""){
            innerHtml += ' <a href="' + row.repo + '"> Repo Link </a> ' + ' ';
        }
        innerHtml += '</p>';

        if(row.image_src != ""){
            innerHtml += '<img class="table-image" src="' + row.image_src + '" alt="related image"></img>';
        }

        if(row.role != ""){
            innerHtml += '<h5 class="table-h5">Role</h5>';
            innerHtml += '<p class="table-p">' + row.role + '</p>';
        }

        innerHtml += '<h5 class="table-h5">Tools</h5>';
        innerHtml += '<p class="table-p">' + row.tools + '</p>';

        if(row.responsibilityareas != ""){
            innerHtml += '<h5 class="table-h5">Responsibility areas</h5>';
            innerHtml += '<p class="table-p">' + row.responsibilityareas + '</p>';
        }

        innerHtml += '</td>';
        innerHtml += '</tr>';
    }); 
    innerHtml += '</tbody>';
    document.getElementById('rows_start').innerHTML = innerHtml;
}

insertTableCells();


