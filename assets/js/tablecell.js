

const projectRows = [
    {
        "name": "Re-training Stable diffusion with selfies to produce selfie",
        "company": "Hobby project",
        "customer": "Customer 1",
        "period": "2019-2020",
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
        "period": "8/2022 - 11/2022",
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
    }





]




const insertTableCells = () => {

    //console.log("inserting table cells");

    let innerHtml = '<tbody>';

    projectRows.forEach(row => {
        //console.log("Adding row: " + row.name + " innerHtml length is: " + innerHtml.length);

        innerHtml += '<tr>';
        innerHtml += '<td class="project-td"><h5 class="table-h5">' + row.name + '</h5>';

        innerHtml += '<h5 class="table-h5">Company</h5>';
        innerHtml += '<p class="table-p">' + row.company + '</p>';
        innerHtml += '<h5 class="table-h5">Period</h5>';
        innerHtml += '<p class="table-p">' + row.period + '</p>';
        innerHtml += '</td>';

        innerHtml += '<td class="project-td">';
        innerHtml += '<h5 class="table-h5">Project experience</h5>';
        
        if(row.image_src != ""){
            innerHtml += '<img src="' + row.image_src + '" alt="sample fake selfie image"></img>';
        }
        
        innerHtml += '<p class="table-p">' + row.description;

        if(row.link != ""){
            innerHtml += '<a href="' + row.link + '"> Link </a>';
        }
        innerHtml += '</p>';


        innerHtml += '<h5 class="table-h5">Tools</h5>';
        innerHtml += '<p class="table-p">' + row.tools + '</p>';
        innerHtml += '</td>';
        innerHtml += '</tr>';

    }); 
    innerHtml += '</tbody>';

    //console.log(innerHtml);


    document.getElementById('rows_start').innerHTML = innerHtml;

}


insertTableCells();


