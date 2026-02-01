import { SyllabusData } from './types';

export const SYLLABUS: SyllabusData = {
  themeA: [
    {
      id: "A.1",
      title: "Computer Fundamentals",
      description: "Draws on a wide spectrum of knowledge of computer systems, including hardware, architecture, and primary/secondary memory interactions.",
      theme: "A",
      iconName: "Cpu",
      sections: [
        {
          id: "A.1.1",
          title: "CPU Architecture",
          content: "The Central Processing Unit (CPU) is the brain of the computer. Key components include:\n\n1. **ALU (Arithmetic Logic Unit):** Performs calculations and logical decisions.\n2. **CU (Control Unit):** Directs operations, decodes instructions, and manages the flow of data.\n3. **Registers:** Small, super-fast memory locations (e.g., PC, MAR, MDR, ACC).\n\nThe Fetch-Decode-Execute cycle is fundamental to operation.",
          codeExample: `# Simulating a basic Fetch-Decode-Execute Cycle
class CPU:
    def __init__(self):
        self.pc = 0  # Program Counter
        self.acc = 0 # Accumulator
        self.memory = ["LOAD 5", "ADD 3", "STORE 6", "HALT", "0", "10", "0"]
    
    def fetch(self):
        instruction = self.memory[self.pc]
        self.pc += 1
        return instruction

    def decode_execute(self, instruction):
        parts = instruction.split(" ")
        op = parts[0]
        
        if op == "LOAD":
            addr = int(parts[1])
            self.acc = int(self.memory[addr])
        elif op == "ADD":
            val = int(parts[1])
            self.acc += val
        elif op == "STORE":
            addr = int(parts[1])
            self.memory[addr] = str(self.acc)
            print(f"Stored {self.acc} at address {addr}")
        elif op == "HALT":
            return False
        return True

cpu = CPU()
running = True
while running:
    instr = cpu.fetch()
    running = cpu.decode_execute(instr)`
        },
        {
          id: "A.1.2",
          title: "Memory & Storage",
          content: "Computers use a hierarchy of storage:\n\n* **Primary Memory:** RAM (Volatile, working memory) and ROM (Non-volatile, startup instructions).\n* **Cache:** L1/L2/L3 high-speed memory on the CPU to reduce RAM access time.\n* **Secondary Storage:** HDD, SSD, Optical. Persistent storage not directly accessible by the CPU.",
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
          content: "**LAN vs WAN:** LANs cover small areas (homes, offices) with high speed. WANs cover large geographical areas (internet).\n\n**VPN:** A tunnel that encrypts data between a client and a server, often used to secure remote work or bypass geo-restrictions.",
        },
        {
          id: "A.2.2",
          title: "Protocols & Layers",
          content: "Communication requires agreed-upon rules (protocols).\n\n* **TCP/IP Model:** Application, Transport, Internet, Network Access.\n* **Key Protocols:** HTTP/HTTPS, TCP (Reliable), UDP (Fast, unreliable), DHCP (Dynamic IP), DNS (Name resolution).",
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
          content: "Relational databases use tables to store data. Keys (Primary, Foreign) establish relationships.",
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
          content: "Machine Learning is a subset of AI where systems learn from data.\n\n* **Supervised Learning:** Training with labeled data (e.g., classification).\n* **Unsupervised Learning:** Finding patterns in unlabeled data (e.g., clustering).\n* **Neural Networks:** Layers of nodes mimicking the human brain.",
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
          title: "Control Flow",
          content: "Loops and conditionals control the execution path of a program.",
          codeExample: `# Python Control Flow
def check_grade(score):
    if score >= 7:
        return "Excellent (7)"
    elif score >= 5:
        return "Good (5-6)"
    else:
        return "Needs Improvement"

scores = [4, 6, 7, 3, 5]
for s in scores:
    print(f"Score {s}: {check_grade(s)}")`
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
          title: "Classes & Objects",
          content: "Encapsulating data and behavior into objects.",
          codeExample: `# OOP in Python
class Student:
    def __init__(self, name, id_num):
        self.name = name
        self.id_num = id_num
    
    def introduce(self):
        return f"Hi, I am {self.name} (ID: {self.id_num})"

s1 = Student("Bob", 101)
print(s1.introduce())`
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
          title: "Stacks & Queues",
          content: "**Stack:** LIFO (Last In, First Out). Think of a stack of plates.\n**Queue:** FIFO (First In, First Out). Think of a line at a store.",
          codeExample: `# Stack Implementation using List
stack = []
stack.append(1) # Push
stack.append(2)
print(stack.pop()) # Pop -> 2`
        }
      ]
    }
  ]
};