import { SyllabusData } from './types';

export const SYLLABUS: SyllabusData = {
  themeA: [
    {
      id: "A.1",
      title: "Computer Fundamentals",
      description: "Guiding question: What principles underpin the operation of a computer, from low-level hardware functionality to operating system interactions?",
      theme: "A",
      iconName: "Cpu",
      sections: [
        {
          id: "A.1.1",
          title: "Computer Hardware & Operation",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.1 Describe the functions and interactions of the main CPU components.</h3>
<ul class="space-y-4 ml-6">
  <li class="flex items-start">
    <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Units:</span>
    <span>arithmetic logic unit (ALU), control unit (CU)</span>
  </li>
  <li class="flex items-start">
    <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Registers:</span>
    <span>instruction register (IR), program counter (PC), memory address register (MAR), memory data register (MDR), accumulator (AC)</span>
  </li>
  <li class="flex items-start">
    <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Buses:</span>
    <span>address, data, control</span>
  </li>
  <li class="flex items-start">
    <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Processors:</span>
    <span>single core processor, multi-core processor, co-processors</span>
  </li>
  <li class="flex items-start">
    <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">5. Diagram:</span>
    <span>A diagrammatic representation of the relationship between the specified CPU components</span>
  </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.2 Describe the role of a GPU.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Architecture:</span>
        <span>The architecture that allows graphics processing units (GPUs) to handle specific tasks and makes them suitable for complex computations</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Applications:</span>
        <span>Real-world scenarios may include video games, artificial intelligence (AI), large simulations and other applications that require graphics rendering and machine learning.</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.3 Explain the differences between the CPU and the GPU. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Design:</span>
        <span>Differences in their design philosophies, usage scenarios</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Architecture:</span>
        <span>Differences in their core architecture, processing power, memory access, power efficiency</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Collaboration:</span>
        <span>CPUs and GPUs working together: task division, data sharing, coordinating execution</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.4 Explain the purposes of different types of primary memory.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Random-access memory (RAM), read only memory (ROM), cache (L1, L2, L3), registers</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Optimization:</span>
        <span>The interaction of the CPU with different types of primary memory to optimize performance</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Terminology:</span>
        <span>The relevance of the terms "cache miss" and "cache hit"</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.5 Describe the fetch, decode and execute cycle.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Operations:</span>
        <span>The basic operations a CPU performs to execute a single instruction in machine language</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Buses:</span>
        <span>The interaction between memory and registers via the three buses: address, data, control</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.6 Describe the process of pipelining in multi-core architectures. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Stages:</span>
        <span>The instructions fetch, decode, execute</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Performance:</span>
        <span>Write-back stages to improve the overall system performance in multi-core architectures</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Parallelism:</span>
        <span>Overview of how cores in multi-core processors work independently and in parallel</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.7 Describe internal and external types of secondary memory storage.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Internal:</span>
        <span>Internal hard drives: solid state drive (SSD), hard disk drive (HDD), embedded multimedia cards (eMMCs)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. External:</span>
        <span>External hard drives: SSD, HDD, optical drives, flash drives, memory cards, network attached storage (NAS)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Usage:</span>
        <span>The scenarios in which the various types of drive are used</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.8 Describe the concept of compression.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Methods:</span>
        <span>The differences between lossy compression methods and lossless compression methods</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Coding:</span>
        <span>Run-length encoding and transform coding</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A1.1.9 Describe the different types of services in cloud computing.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Services:</span>
        <span>Services: software as a service (SaaS), platform as a service (PaaS), infrastructure as a service (IaaS)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Approaches:</span>
        <span>The differences between the approaches of SaaS, PaaS, and IaaS in various real-world scenarios, recognizing that different degrees of control and flexibility influence resource management and resource availability</span>
    </li>
</ul>`,
          codeExample: `# Simulating the Fetch-Decode-Execute Cycle
class CPU:
    def __init__(self):
        self.pc = 0  
        self.acc = 0 
        self.memory = ["LOAD 5", "ADD 3", "STORE 6", "HALT", "0", "10", "0"]
    
    def fetch(self):
        instr = self.memory[self.pc]
        print(f"FETCH: fetching instruction {instr} from address {self.pc}")
        self.pc += 1
        return instr

    def decode_execute(self, instr):
        parts = instr.split(" ")
        op = parts[0]
        
        if op == "LOAD":
            addr = int(parts[1])
            self.acc = int(self.memory[addr])
            print(f"EXECUTE: Loaded value {self.acc} from address {addr}")
        elif op == "ADD":
            val = int(parts[1])
            self.acc += val
            print(f"EXECUTE: Added {val} to Accumulator. Result: {self.acc}")
        elif op == "STORE":
            addr = int(parts[1])
            self.memory[addr] = str(self.acc)
            print(f"EXECUTE: Stored {self.acc} to address {addr}")
        elif op == "HALT":
            print("EXECUTE: Halt instruction received.")
            return False
            
        return True`
        }
      ]
    },
    {
      id: "A.2",
      title: "Networks",
      description: "Focuses on how computing systems communicate, including protocols, security, and data transmission methods.",
      theme: "A",
      iconName: "Network",
      sections: [
        {
          id: "A.2.1",
          title: "Network Fundamentals",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A2.1.1 Describe the purpose and characteristics of networks.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Networks:</span>
        <span>Local area network (LAN), wide area network (WAN), personal area network (PAN), virtual private network (VPN)</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.1.2 Describe the purpose, benefits and limitations of modern digital infrastructures.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Infrastructure:</span>
        <span>Modern digital infrastructure: the internet, cloud computing, distributed systems, edge computing, mobile networks</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Applications:</span>
        <span>Examples where specific networks are used may include the worldwide web (WWW), cryptocurrency blockchains, smart traffic lights, a school</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.1.3 Describe the function of network devices.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Hardware:</span>
        <span>Gateways, hardware firewalls, modems, network interface cards, routers, switches, wireless access points</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Mapping:</span>
        <span>How devices map to the layers of the TCP/IP model</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.1.4 Describe the network protocols used for transport and application.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Protocols:</span>
        <span>Transmission control protocol (TCP), user datagram protocol (UDP), hypertext transfer protocol (HTTP), hypertext transfer protocol secure (HTTPS), dynamic host configuration protocol (DHCP)</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.1.5 Describe the function of the TCP/IP model. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Layers:</span>
        <span>Application, transport, internet, network interface</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Interaction:</span>
        <span>The role of each layer and the interaction between these layers to ensure reliable data transmission over a network</span>
    </li>
</ul>`,
        },
        {
          id: "A.2.2",
          title: "Network Architecture",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A2.2.1 Describe the functions and practical applications of network topologies.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Topologies:</span>
        <span>Network topologies: star, mesh, hybrid</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Factors:</span>
        <span>Factors to consider must include reliability, transmission speed, scalability, data collisions, cost</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Scenarios:</span>
        <span>Examples may include home and small office settings, where reliability is paramount, and the use of networks in larger settings (e.g. corporations, government departments, college campuses)</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.2.2 Describe the function of servers. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Types of servers: domain name server (DNS), dynamic host configuration protocol (DHCP), file server, mail server, proxy server, web server</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Factors:</span>
        <span>Factors to consider must include function, scalability, reliability and security</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.2.3 Compare and contrast networking models.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Models:</span>
        <span>Client-server and peer-to-peer models</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Comparison:</span>
        <span>The respective benefits and drawbacks of client-server and peer-to-peer models</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Applications:</span>
        <span>Real-world applications may include web browsing, email services, online banking, file sharing, VoIP services, blockchain</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.2.4 Explain the concepts and applications of network segmentation.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Purpose:</span>
        <span>Segmentation for network performance and security, to reduce congestion, to manage network resources efficiently</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Methods:</span>
        <span>Network segmentation must include the uses and roles of segmenting, subnetting and virtual local area networks (VLANs)</span>
    </li>
</ul>`,
          codeExample: `# Simple Python Socket Example (Client)
import socket

def connect_to_server():
    # Create a socket object
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    # Get local machine name
    host = socket.gethostname()
    port = 9999
    
    try:
        # Connection to hostname on the port
        client_socket.connect((host, port))
        
        # Receive no more than 1024 bytes
        msg = client_socket.recv(1024)
        print(msg.decode('ascii'))
        
        client_socket.close()
    except ConnectionRefusedError:
        print("Server not found. Ensure server is running.")

# connect_to_server() # Uncomment to run if server exists`
        },
        {
          id: "A.2.3",
          title: "Data Transmissions",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A2.3.1 Describe different types of IP addressing.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Versions:</span>
        <span>The distinction between IPv4 and IPv6 addressing</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Visibility:</span>
        <span>The differences between public IP addresses and private IP addresses, and between static IP addresses and dynamic IP addresses</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. NAT:</span>
        <span>The role of network address translation (NAT) to minimize the use of IP addresses and to facilitate communication between private internal networks and the public internet</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.3.2 Compare types of media for data transmission.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Wired transmission via fibre optic cables and twisted pair cables; wireless transmission</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Comparison:</span>
        <span>The advantages and disadvantages of these three types of data transmission</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Factors:</span>
        <span>Factors to consider must include bandwidth, complexity of installation, cost, range, susceptibility to interference, attenuation, reliability, security</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.3.3 Explain how packet switching is used to send data across a network.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Process:</span>
        <span>The process of segmenting data into packets with a routing header attached, and independently transmitting control information, allowing the data to be reassembled at the destination</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Roles:</span>
        <span>The role that switches and routers play in packet switching</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.3.4 Explain how static routing and dynamic routing move data across local area networks. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Static:</span>
        <span>The process of static routing, and its advantages and disadvantages</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Dynamic:</span>
        <span>The process of dynamic routing, and its advantages and disadvantages (explanation of a specific routing protocol is not required)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Factors:</span>
        <span>Factors to consider must include configuration, maintenance, complexity, resource usage, convergence, scalability, network size</span>
    </li>
</ul>`,
        },
        {
          id: "A.2.4",
          title: "Network Security",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A2.4.1 Discuss the effectiveness of firewalls at protecting a network.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Function:</span>
        <span>The function of firewalls in inspecting and filtering incoming and outgoing traffic based on whitelists, blacklists and rules</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Analysis:</span>
        <span>The strengths and limitations of firewalls</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. NAT:</span>
        <span>The role of NAT to enhance network security</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.4.2 Describe common network vulnerabilities. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Threats:</span>
        <span>Distributed denial of service (DDoS), insecure network protocols, malware, man-in-the-middle (MitM) attacks, phishing attacks, SQL injection, cross-site scripting (XSS), unpatched software, weak authentication, zero-day exploits</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.4.3 Describe common network countermeasures. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Policies:</span>
        <span>Content security policies, complex password policies, DDoS mitigation tools, email filtering solutions</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Tools:</span>
        <span>Encrypted protocols, input validation (filtering, whitelisting), intrusion detection systems (IDS), intrusion prevention systems (IPS), multifactor authentication (MFA)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Encryption:</span>
        <span>Secure socket layer (SSL) certificate, transport layer security (TLS) certificate, update software, VPNs</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Training:</span>
        <span>The importance of regular security testing and employee training</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">5. Wireless:</span>
        <span>Wireless security measures may include media access controllers (MAC), whitelists and blacklists</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A2.4.4 Describe the process of encryption and digital certificates.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Cryptography:</span>
        <span>The difference between symmetric and asymmetric cryptography</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Certificates:</span>
        <span>The role of digital certificates in establishing secure network connections</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Keys:</span>
        <span>The use of public and private keys in asymmetric cryptography</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Management:</span>
        <span>The significance of encryption key management</span>
    </li>
</ul>`,
        }
      ]
    },
    {
      id: "A.3",
      title: "Databases",
      description: "Covers data modeling, normalization, SQL management, and the ethical implications of data storage.",
      theme: "A",
      iconName: "Database",
      sections: [
        {
          id: "A.3.1",
          title: "Database Fundamentals",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A3.1.1 Explain the features, benefits and limitations of a relational database.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Features:</span>
        <span>Composite keys, foreign keys, primary keys, relationships, tables</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Benefits:</span>
        <span>Benefits of databases: community support, concurrency control, data consistency, data integrity, data retrieval, reduced data duplication, reduced redundancy, reliable transaction processing, scalability, security features</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Limitations:</span>
        <span>Limitations of databases: "big data" scalability issues, design complexity, hierarchical data handling, rigid schema, object-relational impedance mismatch, unstructured data handling</span>
    </li>
</ul>`,
        },
        {
          id: "A.3.2",
          title: "Database Design",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.1 Describe database schemas.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Conceptual schema, logical schema, physical schema</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Definition:</span>
        <span>Abstract definitions of the data structure and organization of the data at different levels</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.2 Construct ERDs.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Significance:</span>
        <span>The significance of entity relationship diagrams (ERDs) in crafting organized, efficient database designs tailored for specific applications</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Relationships:</span>
        <span>The relationships between different data entities within a database</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Roles:</span>
        <span>The roles of cardinality and modality in defining relationships in ERDs</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.3 Outline the different data types used in relational databases.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Consistency:</span>
        <span>The importance of data type consistency</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Impact:</span>
        <span>The potential effects of choosing the wrong data type</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.4 Construct tables for relational databases.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Keys:</span>
        <span>The relationship between tables using primary keys, foreign keys, composite keys and concatenated keys</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Integrity:</span>
        <span>The importance of well-defined tables in ensuring data integrity</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.5 Explain the difference between normal forms.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Forms:</span>
        <span>First normal form (1NF), second normal form (2NF), third normal form (3NF)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Terms:</span>
        <span>The terms atomicity, unique identification, functional dependencies, partial-key dependencies, non-key/transitive dependencies</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Normalization:</span>
        <span>Normalization issues can encompass data duplication, missing data, and a range of dependency concerns, including data dependencies, composite key dependencies, transitive dependencies, and multi-valued dependencies.</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.6 Construct a database normalized to 3NF for a range of real-world scenarios.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Examples:</span>
        <span>Examples may include library management, hospital management, e-commerce platforms, school management, employee management, inventory management, police crime reporting</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.2.7 Evaluate the need for denormalizing databases.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Analysis:</span>
        <span>The advantages and disadvantages of normalizing and denormalizing databases</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Scenarios:</span>
        <span>Situations where denormalization can enhance performance, particularly in read-intensive applications</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Risk:</span>
        <span>The balance between straightforward query structures and the risk of data redundancy in denormalized schemas</span>
    </li>
</ul>`,
          codeExample: `# Python SQLite Example
import sqlite3

conn = sqlite3.connect('school.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE IF NOT EXISTS students
             (id INTEGER PRIMARY KEY, name TEXT, grade INTEGER)''')

# Insert a row of data
c.execute("INSERT INTO students (name, grade) VALUES ('Alice', 11)")

# Save (commit) the changes
conn.commit()

# Query
for row in c.execute('SELECT * FROM students'):
    print(row)

conn.close()`
        },
        {
          id: "A.3.3",
          title: "Database Programming",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.1 Outline the differences between data language types within SQL.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Data language types must include data definition language (DDL) and data manipulation language (DML)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. SQL:</span>
        <span>SQL statements to define data structures or to manipulate data</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.2 Construct queries between two tables in SQL.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Queries:</span>
        <span>Queries must include joins, relational operators, filtering, pattern matching, and ordering data</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Commands:</span>
        <span>SQL commands: SELECT, DISTINCT, FROM, WHERE, BETWEEN, ORDER BY, GROUP BY, HAVING, ASC, DESC, JOIN, LIKE with % wildcard, AND, OR, NOT (note: Syntax may vary in different database systems)</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.3 Explain how SQL can be used to update data in a database.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Operations:</span>
        <span>Insert new records (INSERT INTO), modify data (UPDATE SET), remove data (DELETE)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Performance:</span>
        <span>The performance implications of updating data in indexed columns, and how indexes might need to be rebuilt or reorganized following significant data modifications</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.4 Construct calculations within a database using SQL's aggregate functions. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Functions:</span>
        <span>Aggregate functions on grouped data to aid reporting and decision-making</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Commands:</span>
        <span>Aggregate commands: AVERAGE, COUNT, MAX, MIN, SUM</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.5 Describe different database views. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Virtual views and materialized (snapshot) views</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Benefits:</span>
        <span>Hiding data complexity, data consistency, independence, performance, query simplification, read-only data or updatable data, security</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.3.6 Describe how transactions maintain data integrity in a database. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. ACID:</span>
        <span>The role of atomicity, consistency, isolation and durability (ACID) to ensure reliable processing of transactions</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. TCL:</span>
        <span>Transaction control language (TCL) commands: BEGIN TRANSACTION, COMMIT, ROLLBACK</span>
    </li>
</ul>`,
        },
        {
          id: "A.3.4",
          title: "Alternative Databases",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A3.4.1 Outline the different types of databases as approaches to storing data.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Models:</span>
        <span>Databases models: NoSQL, cloud, spatial, in-memory</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Scenarios:</span>
        <span>Examples of the use of the database model in real-world scenarios may include e-commerce platforms, geographic information systems (GIS), managed services, real-time analytics, social media platforms, SaaS.</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.4.2 Explain the primary objectives of data warehouses in data management and business intelligence.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Roles:</span>
        <span>The roles of append-only data, subject-oriented data, integrated data, time-variant data, non-volatile data and data optimized for query performance, to ensure efficient data storage and analysis</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.4.3 Explain the role of online analytical processing (OLAP) and data mining for business intelligence.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Mining:</span>
        <span>Data mining techniques must include classification, clustering, regression, association rule discovery, sequential pattern discovery, anomaly detection (note: This links to “A4 Machine learning”).</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Usage:</span>
        <span>The uses of the techniques in extracting meaningful information from large data sets</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A3.4.4 Describe the features of distributed databases.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Consistency:</span>
        <span>The need to maintain data consistency in a distributed database</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. ACID:</span>
        <span>The role of ACID to ensure reliable processing of transactions in distributed databases</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Features:</span>
        <span>Features of distributed databases: concurrency control, data consistency, data partitioning, data security, distribution transparency, fault tolerance, global query processing, location transparency, replication, scalability</span>
    </li>
</ul>`,
        }
      ]
    },
    {
      id: "A.4",
      title: "Machine Learning",
      description: "A new module enabling innovation and exploration, covering AI concepts, neural networks, and ethical issues.",
      theme: "A",
      iconName: "BrainCircuit",
      sections: [
        {
          id: "A.4.1",
          title: "ML Fundamentals",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A4.1.1 Describe the types of machine learning and their applications in the real world.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Approaches:</span>
        <span>The different approaches to machine learning algorithms and their unique characteristics</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Types:</span>
        <span>Deep learning (DL), reinforcement learning (RL), supervised learning, transfer learning (TL), unsupervised learning (UL)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Applications:</span>
        <span>Real-world applications of machine learning may include market basket analysis, medical imaging diagnostics, natural language processing, object detection and classification, robotics navigation, sentiment analysis</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.1.2 Describe the hardware requirements for various scenarios where machine learning is deployed.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Scenarios:</span>
        <span>The hardware configurations for different machine learning scenarios, considering factors such as processing, storage and scalability</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Range:</span>
        <span>Hardware configurations for machine learning ranging from standard laptops to advanced infrastructure</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Infrastructure:</span>
        <span>Advanced infrastructure must include application-specific integrated circuits (ASICs), edge devices, field-programmable gate arrays (FPGAs), GPUs, tensor processing units (TPUs), cloud-based platforms, high-performance computing (HPC) centres</span>
    </li>
</ul>`,
        },
        {
          id: "A.4.2",
          title: "Data Preprocessing (HL only)",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A4.2.1 Describe the significance of data cleaning.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Quality:</span>
        <span>The impact of data quality on model performance</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Techniques:</span>
        <span>Techniques for handling outliers, removing or consolidating duplicate data, identifying incorrect data, filtering irrelevant data, transforming improperly formatted data, and imputation, deletion or predictive modelling for missing data</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Standardization:</span>
        <span>Normalization and standardization as crucial preprocessing steps</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.2.2 Describe the role of feature selection.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Selection:</span>
        <span>Feature selection to identify and retain the most informative attributes of the data set</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Strategies:</span>
        <span>Feature selection strategies: filter methods, wrapper methods, embedded methods</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.2.3 Describe the importance of dimensionality reduction.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Curse:</span>
        <span>The curse of dimensionality considerations may include overfitting, computational complexity, data sparsity, the effectiveness of distance metrics, data visualization, sample size increases, memory usage</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Reduction:</span>
        <span>Dimensionality reduction of variables, while preserving the relevant aspects of the data</span>
    </li>
</ul>
<p class="mt-4 text-sm text-gray-600 italic">Note: Statistical techniques such as principal component analysis (PCA) and linear discriminant analysis (LDA) are beyond the scope of this course.</p>`,
        },
        {
          id: "A.4.3",
          title: "ML Approaches (HL only)",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.1 Explain how linear regression is used to predict continuous outcomes.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Variables:</span>
        <span>The relationship between the independent (predictor) and dependent (response) variables</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Equation:</span>
        <span>The significance of the slope and intercept in the regression equation</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Fit:</span>
        <span>How well the model fits the data—often assessed using measures like r².</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.2 Explain how classifications techniques in supervised learning are used to predict discrete categorical outcomes.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Algorithms:</span>
        <span>K-Nearest Neighbours (K-NN) and decision trees algorithms to categorize new data points, based on patterns learned from existing labelled data</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. K-NN:</span>
        <span>Real-world applications of K-NN may include collaborative filtering recommendation systems</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Decision Trees:</span>
        <span>Real-world applications of decision trees may include medical diagnosis based on a patient's symptoms</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.3 Explain the role of hyperparameter tuning when evaluating supervised learning algorithms.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Metrics:</span>
        <span>Accuracy, precision, recall and F1 score as evaluation metrics</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Tuning:</span>
        <span>The role of hyperparameter tuning on model performance</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Fitting:</span>
        <span>Overfitting and underfitting when training algorithms</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.4 Describe how clustering techniques in unsupervised learning are used to group data based on similarities in features.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Grouping:</span>
        <span>Clustering techniques in unsupervised learning group data based on feature similarities</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Applications:</span>
        <span>Real-world applications of clustering may include using purchasing data to segment a customer base</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.5 Describe how learning techniques using the association rule are used to uncover relations between different attributes in large data sets.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Mining:</span>
        <span>Mining techniques using the association rule and interpretation of the results for a given scenario</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Examples:</span>
        <span>For example, in crime analysis, the techniques may reveal that areas with high rates of vandalism also often experience incidents of theft, assisting law enforcement in predictive policing and resource allocation</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.6 Describe how an agent learns to make decisions by interacting with its environment in reinforcement learning.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Interaction:</span>
        <span>The principle of cumulative reward and the foundational concepts of agent-environment interaction, encompassing actions, states, rewards and policies</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Trade-off:</span>
        <span>The exploration versus exploitation trade-off as a core concept in reinforcement learning</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.7 Describe the application of genetic algorithms in various real-world situations.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Concepts:</span>
        <span>For example: population, fitness function, selection, crossover, mutation, evaluation, termination</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Applications:</span>
        <span>A real-world application of genetic algorithms is seen in optimization problems, such as route planning (e.g. the "traveling salesperson problem")</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.8 Outline the structure and function of ANNs and how multi-layer networks are used to model complex patterns in data sets.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. ANNs:</span>
        <span>An artificial neural network (ANN) to simulate interconnected nodes or "neurons" to process and learn from input data, enabling tasks such as classification, regression and pattern recognition</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Perceptron:</span>
        <span>Sketch of a single perceptron, highlighting its input, weights, bias, activation function and output</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. MLP:</span>
        <span>Sketch of a multi-layer perceptron (MLP) encompassing the input layer, one or more hidden layers and the output layer</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.9 Describe how CNNs are designed to adaptively learn spatial hierarchies of features in images.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Architecture:</span>
        <span>Convolutional neural network (CNN) basic architecture: input layer, convolutional layers, activation functions, pooling layers, fully connected layers, output layer</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Function:</span>
        <span>The effect of the number of layers, kernel size and stride, activation function selection, and the loss function on how CNNs process input data and classify images</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.3.10 Explain the importance of model selection and comparison in machine learning.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Differences:</span>
        <span>How different algorithms can yield different results depending on the data and type of problem</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Factors:</span>
        <span>The reasons for selecting specific machine learning models over others, considering factors like the nature of the problem, its complexity and desired outcomes</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Variability:</span>
        <span>The variability in algorithm performance based on the data's characteristics</span>
    </li>
</ul>`,
        },
        {
          id: "A.4.4",
          title: "Ethical Considerations",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">A4.4.1 Discuss the ethical implications of machine learning in real-world scenarios.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Issues:</span>
        <span>Ethical issues may include accountability, algorithmic fairness, bias, consent, environmental impact, privacy, security, societal impact, transparency.</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Bias:</span>
        <span>The challenges posed by biases in training data</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Communication:</span>
        <span>The ethics of using machine learning in online communication may include concerns about misinformation, bias, online harassment, anonymity, privacy.</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">A4.4.2 Discuss ethical aspects of the increasing integration of computer technologies into daily life.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Guidelines:</span>
        <span>The importance of continually reassessing ethical guidelines as technology advances</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Technologies:</span>
        <span>The potential implications of emerging technologies such as quantum computing, augmented reality, virtual reality and the pervasive use of AI on society, individual rights, privacy and equity</span>
    </li>
</ul>`,
        }
      ]
    }
  ],
  themeB: [
    {
      id: "B.1",
      title: "Computational Thinking",
      description: "Underpins the course: Specifying problems, decomposing complex real-world problems, and abstraction.",
      theme: "B",
      iconName: "Lightbulb",
      sections: [
        {
          id: "B.1.1",
          title: "Abstraction",
          content: "Removing unnecessary details to focus on the essential features of a problem.",
        }
      ]
    },
    {
      id: "B.2",
      title: "Programming",
      description: "Developing skills in algorithmic thinking and computer programming (Python/Java).",
      theme: "B",
      iconName: "Terminal",
      sections: [
        {
          id: "B.2.1",
          title: "Programming fundamentals",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B2.1.1 Construct and trace programs using a range of global and local variables of various data types.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Data types:</span>
        <span>Boolean value, char, decimal, integer, string</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.1.2 Construct programs that can extract and manipulate substrings.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Substrings:</span>
        <span>Writing of programs that accurately identify and extract substrings from given strings, demonstrating the ability to perform various manipulations, such as altering, concatenating or replacing</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.1.3 Describe how programs use common exception handling techniques.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Failures:</span>
        <span>Potential points of failure in a program must include unexpected inputs, resource unavailability, logic errors.</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Handling:</span>
        <span>The role of exception handling in developing programs</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Constructs:</span>
        <span>Exception handling constructs that effectively manage errors must include try/catch in Java, and try/except in Python, along with the finally block.</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.1.4 Construct and use common debugging techniques.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Techniques:</span>
        <span>Debugging techniques may include trace tables, breakpoint debugging, print statements and step-by-step code execution.</span>
    </li>
</ul>`,
        },
        {
          id: "B.2.2",
          title: "Data structures",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B2.2.1 Compare static and dynamic data structures.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Differences:</span>
        <span>The fundamental differences between static and dynamic data structures, including their underlying mechanisms for memory allocation and resizing</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Pros/Cons:</span>
        <span>The advantages and disadvantages of each type in various scenarios, considering factors such as speed, memory usage, flexibility</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.2.2 Construct programs that apply arrays and Lists.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Arrays:</span>
        <span>One-dimensional (1D) arrays, two-dimensional (2D) arrays, ArrayLists in Java</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Lists:</span>
        <span>One-dimensional (1D) Lists and two-dimensional (2D) Lists in Python</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Dynamic:</span>
        <span>Add, remove and traverse elements in a dynamic list</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.2.3 Explain the concept of a stack as a "last in, first out" (LIFO) data structure.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Operations:</span>
        <span>Must include fundamental operations such as push, pop, peek and isEmpty</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Impact:</span>
        <span>How stack operations impact both performance and memory usage</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Application:</span>
        <span>An appropriate stack for a specific problem</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.2.4 Explain the concept of a queue as a "first in, first out" (FIFO) data structure.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Operations:</span>
        <span>Must include fundamental operations such as enqueue, dequeue, front and isEmpty</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Impact:</span>
        <span>How queue operations impact both performance and memory usage</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Application:</span>
        <span>An appropriate queue for a specific problem</span>
    </li>
</ul>`,
        },
        {
          id: "B.2.3",
          title: "Programming constructs",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B2.3.1 Construct programs that implement the correct sequence of code instructions to meet program objectives.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Order:</span>
        <span>The impact of instruction order on program functionality</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Errors:</span>
        <span>Ways to avoid errors, such as infinite loops, deadlock, incorrect output</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.3.2 Construct programs utilizing appropriate selection structures.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Structures:</span>
        <span>Must include: if, else, else if (Java), elif (Python), to execute different code blocks based on specified conditions</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Operators:</span>
        <span>Selection structures with or without Boolean operators (AND, OR, NOT) and/or relational operators (<, <=, >, >=, ==, !=) to control program flow effectively</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.3.3 Construct programs that utilize looping structures to perform repeated actions.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Types:</span>
        <span>Types of loops, including counted loops and conditional loops, and appropriate use of each type</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Conditions:</span>
        <span>Conditional statements within loops, using Boolean and/or relational operators to govern the loop's execution</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.3.4 Construct functions and modularization.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Reusability:</span>
        <span>Functions to define reusable blocks of code with different inputs</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Structure:</span>
        <span>Modularization to create well-structured, reusable and maintainable code</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Scope:</span>
        <span>The principles of scope (local versus global)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Benefits:</span>
        <span>The benefits of code modularization, applying this concept to various programming scenarios</span>
    </li>
</ul>`,
        },
        {
          id: "B.2.4",
          title: "Programming algorithms",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B2.4.1 Describe the efficiency of specific algorithms by calculating their Big O notation to analyse their scalability.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Complexity:</span>
        <span>The time and space complexities of algorithms and calculating Big O notation</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Choice:</span>
        <span>Algorithm choice based on scalability and efficiency requirements</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.4.2 Construct and trace algorithms to implement a linear search and a binary search for data retrieval.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Efficiency:</span>
        <span>The differences in efficiency between different methods of linear and binary search</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Technique:</span>
        <span>Use of search technique based on efficiency requirements—for example, searching a database for a sorted/indexed list of names to find a phone number, versus searching by the number to identify the name</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.4.3 Construct and trace algorithms to implement bubble sort and selection sort, evaluating their time and space complexities.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Complexity:</span>
        <span>The time and space complexities of each algorithm, denoted by their respective Big O notations</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Pros/Cons:</span>
        <span>The advantages and disadvantages of each algorithm in terms of efficiency across various data sets</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.4.4 Explain the fundamental concept of recursion and its applications in programming. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Fundamentals:</span>
        <span>The fundamentals of recursion and its advantages and limitations</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Utility:</span>
        <span>The utility of recursion in solving problems that can be broken down into smaller, similar sub-problems</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Algorithms:</span>
        <span>Recursive algorithms, including but not limited to quicksort</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Limitations:</span>
        <span>The limitations of recursion, including complexity and memory usage</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">5. Scenarios:</span>
        <span>Situations that best suit the use of recursion, including fractal image creation, traversing binary trees, sorting algorithms</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B2.4.5 Construct and trace recursive algorithms in a programming language. (HL only)</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Simple:</span>
        <span>Simple, non-branching recursive algorithms in programming only</span>
    </li>
</ul>`,
        },
        {
          id: "B.2.5",
          title: "File processing",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B2.5.1 Construct code to perform file-processing operations.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Manipulation:</span>
        <span>Programs that manipulate text files</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Modes:</span>
        <span>Opening a sequential file in various modes (read, write, append)</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Operations:</span>
        <span>How to read from and write to files, append data to an existing file, and close a file once operations are completed</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Java:</span>
        <span>Classes for Java users may include Scanner, FileWriter, BufferedReader.</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">5. Python:</span>
        <span>Functions for Python users may include open(), read(), readline(), write(), close().</span>
    </li>
</ul>`,
        }
      ]
    },
    {
      id: "B.3",
      title: "Object Oriented Programming (OOP)",
      description: "Constructing and synthesizing programs using objects, classes, and encapsulation.",
      theme: "B",
      iconName: "Box",
      sections: [
        {
          id: "B.3.1",
          title: "Fundamentals of OOP for a single class",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B3.1.1 Evaluate the fundamentals of OOP.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Concepts:</span>
        <span>Model real-world entities using OOP concepts: classes, objects, inheritance, encapsulation, polymorphism</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Scenarios:</span>
        <span>The advantages and disadvantages of using OOP in various programming scenarios</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.1.2 Construct a design of classes, their methods and behaviour.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Design:</span>
        <span>Classes and their methods, based on application requirements</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. UML:</span>
        <span>The use of unified modelling language (UML) class diagrams to represent class relationships, attributes and methods, to aid effective software design and planning</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.1.3 Distinguish between static and non-static variables and methods.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Differences:</span>
        <span>The differences between static and non-static variables and methods, including their usage and scope</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Usage:</span>
        <span>When to use instance variables instead of class variables, and how to apply these concepts effectively in code</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.1.4 Construct code to define classes and instantiate objects.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Definition:</span>
        <span>How to define classes and create objects from those classes</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Constructors:</span>
        <span>The role of constructors in initializing an object's state, setting initial values for its attributes to define its condition or characteristics at the time of creation</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.1.5 Explain and apply the concepts of encapsulation and information hiding in OOP.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Principles:</span>
        <span>The principles of encapsulation and information hiding</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Modifiers:</span>
        <span>Apply access modifiers such as private and public</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Access:</span>
        <span>Controlling access to class members</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Integrity:</span>
        <span>The importance of limiting access to maintain the integrity and security of an object's state</span>
    </li>
</ul>`,
        },
        {
          id: "B.3.2",
          title: "Fundamentals of OOP for multiple classes (HL only)",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B3.2.1 Explain and apply the concept of inheritance in OOP to promote code reusability.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Hierarchy:</span>
        <span>How inheritance enables a hierarchical relationship between parent and child classes</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Extending:</span>
        <span>Extending existing classes, utilizing inheritance to reuse and extend functionalities</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Access:</span>
        <span>The impact of inheritance on access to parent class members with different access modifiers (private, public, protected, default)</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.2.2 Construct code to model polymorphism and its various forms, such as method overriding.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Principle:</span>
        <span>The principle of polymorphism and how it contributes to code flexibility and reusability</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Dynamic:</span>
        <span>How to implement dynamic polymorphic behaviour through mechanisms like method overriding</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Static:</span>
        <span>How to apply static polymorphic behaviour to maximize code efficiency</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.2.3 Explain the concept of abstraction in OOP.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Significance:</span>
        <span>The significance of abstraction in the development of modular code fragments</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Interfaces:</span>
        <span>The use of abstract classes to establish common interfaces for sub-classes</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.2.4 Explain the role of composition and aggregation in class relationships.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Design:</span>
        <span>How to design objects by leveraging smaller component objects through composition and aggregation</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Differences:</span>
        <span>That aggregation implies that the subcomponents can function independently of the aggregating class, while in composition, the subcomponents are tightly coupled and cannot exist outside the aggregating class</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B3.2.5 Explain commonly used design patterns in OOP.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Patterns:</span>
        <span>The key design patterns such as singleton, factory and observer</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Application:</span>
        <span>The application of design patterns in solving recurring programming challenges</span>
    </li>
</ul>`,
        }
      ]
    },
    {
      id: "B.4",
      title: "Abstract Data Types (HL only)",
      description: "Advanced data structures including Stacks, Queues, Trees, and Linked Lists for HL students.",
      theme: "B",
      iconName: "Layers",
      sections: [
        {
          id: "B.4.1",
          title: "Fundamentals of ADTs",
          content: `<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.1 Explain the properties and purpose of ADTs in programming.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Principles:</span>
        <span>The core principles of ADTs, including their purpose in providing a high-level description of data structures and their associated operations</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.2 Evaluate linked lists.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Lists:</span>
        <span>Lists must include singly, doubly, circular</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Sketch:</span>
        <span>Sketch of linked lists and implementation of basic operations diagrammatically, such as insertion, deletion, traversal, search</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Comparison:</span>
        <span>The advantages and disadvantages of using linked lists over other data structures like arrays, particularly in terms of memory utilization and performance</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.3 Construct and apply linked lists: singly, doubly and circular.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Operations:</span>
        <span>The basic operations on a linked list, such as insertion, deletion, traversal, search</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.4 Explain the structures and properties of BSTs.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Organization:</span>
        <span>How binary search trees (BSTs) are used for data organization</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Operations:</span>
        <span>Insert, delete, traverse and searching nodes in a BST</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Diagram:</span>
        <span>Sketching a BST as a tree diagram</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.5 Construct and apply sets as an ADT.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Characteristics:</span>
        <span>The fundamental characteristics of sets, including their unordered nature and the uniqueness of elements</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Operations:</span>
        <span>Operations: union, intersection and difference</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Code:</span>
        <span>Code to check if an element is in a set, to add an element to a set, to remove an element, and to check whether one set is a subset/superset of another set</span>
    </li>
</ul>

<br/>

<h3 class="text-xl font-bold text-slate-900 mb-4">B4.1.6 Explain the core principles of ADTs.</h3>
<ul class="space-y-4 ml-6">
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">1. Description:</span>
        <span>High-level description of data structures and their associated operations and purpose</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">2. Hash Tables:</span>
        <span>The underlying mechanics of hash tables, including hashing functions, collision resolution strategies and load factors</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">3. Sets:</span>
        <span>The underlying mechanics of sets to store and manage data</span>
    </li>
    <li class="flex items-start">
        <span class="font-bold text-blue-600 mr-1.5 whitespace-nowrap">4. Examples:</span>
        <span>HashMap and HashSet in Java; dict and set in Python</span>
    </li>
</ul>`,
        }
      ]
    }
  ]
};