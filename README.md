🌳 Save Forest — Save Our Future

A simple, responsive website designed to spread awareness about forest conservation, tree planting, wildlife protection, and environmental sustainability.

🌿 About the Project

Save Forest is a front-end web development project built using HTML, CSS, and JavaScript. Its goal is to educate visitors about the importance of forests and encourage everyone to take small steps toward protecting nature.

The website can also be deployed on an Azure Virtual Machine (VM) using Ubuntu and Nginx.

✨ Features

Responsive Design: Works on desktops, tablets, and mobile devices.

Navigation Menu: Easy navigation between website sections.

Forest Awareness: Information about the importance of forests.

Environmental Threats: Highlights deforestation, forest fires, and pollution.

Interactive Tree Counter: Allows visitors to make a demo tree-planting pledge.

Nature-Inspired Theme: Green colors and forest background imagery.

Conservation Resource: Link to the World Wildlife Fund website.

Azure Hosting: Can be hosted on an Azure VM with Nginx.

🛠️ Technologies Used

Technology

Purpose

HTML5

Website structure and content

CSS3

Styling, layout, and responsive design

JavaScript

Interactive navigation and tree counter

Ubuntu Linux

Operating system for Azure VM hosting

Nginx

Web server

Microsoft Azure

Cloud infrastructure and hosting

📁 Project Structure

SaveForest/
├── index.html     # Main webpage
├── style.css      # Website styling
├── script.js      # Interactive functionality
└── README.md      # Project documentation

🚀 How to Run Locally

Download or clone the project repository.

Open the SaveForest folder in Visual Studio Code.

Make sure all three files are present.

Open index.html in a web browser, or use the Live Server extension in VS Code.

Explore the website and test the navigation and tree pledge button.

No additional packages are required to run the front-end website.

☁️ Deploy on Microsoft Azure

The website can be hosted on an Ubuntu Virtual Machine in the East Asia region.

Step 1: Create Azure Resources

Create the following resources in the Azure Portal:

Resource group: RG-SaveForest

Virtual network: VNet-SaveForest

Subnet: WebSubnet

Network security group: NSG-SaveForest

Virtual machine: VM-SaveForest

Use the East Asia region and an appropriate virtual network address space and subnet.

Step 2: Install Nginx

Connect to the Ubuntu VM through SSH and run:

sudo apt update
sudo apt install nginx -y
sudo systemctl enable --now nginx

Step 3: Upload the Website Files

From PowerShell, run the following command in the project folder. Replace the key path and IP address with your actual values.

scp -i "$HOME\Downloads\your-key.pem" index.html style.css script.js azureuser@YOUR_PUBLIC_IP:/home/azureuser/

Step 4: Copy Files to the Web Directory

In the SSH terminal connected to your VM, run:

sudo cp /home/azureuser/index.html /var/www/html/
sudo cp /home/azureuser/style.css /var/www/html/
sudo cp /home/azureuser/script.js /var/www/html/
sudo nginx -t
sudo systemctl reload nginx

Step 5: Configure Network Access

Ensure the applicable Azure Network Security Group allows inbound HTTP traffic on port 80. Restrict SSH access on port 22 to trusted IP addresses.

Step 6: Open the Website

Open the following address in your browser:

http://YOUR_PUBLIC_IP

Replace YOUR_PUBLIC_IP with your VM's actual public IP address.

For a production website, configure HTTPS and a valid TLS certificate.

🌱 Website Sections

Home: Introduction to the Save Forest mission.

About: Explains why forests are important.

Threats: Describes major threats to forest ecosystems.

Take Action: Encourages visitors to protect nature and make a demo tree pledge.

🎯 Project Objectives

Spread awareness about forest conservation.

Encourage tree planting and responsible environmental habits.

Learn the fundamentals of HTML, CSS, and JavaScript.

Understand Azure VNets, subnets, virtual machines, and network security groups.

Learn how to deploy a website on a cloud-based Linux web server.

⚠️ Limitations

The tree pledge counter is a demonstration and does not record real tree planting.

The counter resets when the webpage is reloaded.

Forest images are loaded from external URLs and require internet access.

The website does not currently have a backend, database, or user authentication.

🔮 Future Improvements

Add a database to store tree pledges.

Add a real tree-planting registration form.

Integrate a backend using Python, Node.js, or another suitable technology.

Add a forest conservation events section.

Configure a custom domain and HTTPS.

Add website analytics and accessibility improvements.

🌍 Expected Outcome

A functional, responsive forest conservation website that can run locally or be hosted on Microsoft Azure using an Ubuntu VM and Nginx.

🤝 Contribution

Contributions are welcome! You can improve the website design, add educational content, fix bugs, or suggest new environmental awareness features.

📜 License

This project is intended for educational and learning purposes. Add an appropriate open-source license, such as the MIT License, if you want others to reuse and modify your code under its terms.

Save Forest, Save Trees, Save Our Future! 🌳
