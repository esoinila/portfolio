

const projectRows = [
    {
        "name": "Re-training Stable diffusion with selfies to produce selfie",
        "company": "Hobby project",
        "customer": "Customer 1",
        "period": "2019–2020",
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
        "period": "12/2019",
        "description": "Assemble MoccaMaster Coffeemaker in virtual reality and make virtual coffee with it using Oculus Quest-VR-glasses",
        "tools": "Unity coding on PC and deploying to Oculus Quest-VR-glasses",
        "role": "Senior Software Developer",
        "responsibilityareas": "",
        "image_src": "",
        "link": "",
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
            innerHtml += '<a href="' + row.link + '"> Link </a>';
        }
        innerHtml += '</p>';

        if(row.image_src != ""){
            innerHtml += '<img class="table-image" src="' + row.image_src + '" alt="related image"></img>';
        }
        innerHtml += '<h5 class="table-h5">Tools</h5>';
        innerHtml += '<p class="table-p">' + row.tools + '</p>';
        innerHtml += '</td>';
        innerHtml += '</tr>';
    }); 
    innerHtml += '</tbody>';
    document.getElementById('rows_start').innerHTML = innerHtml;
}

insertTableCells();


