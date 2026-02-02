
import { SyllabusData } from './types';

export const SYLLABUS: SyllabusData = {
  themeA: [
    {
      id: "A.1",
      title: "Computer Fundamentals",
      description: "Fundamental hardware functionality, data representation, logic, operating systems, and translation processes.",
      theme: "A",
      iconName: "Cpu",
      sections: [
        {
          id: "A1.1",
          title: "Hardware & Operation",
          content: `A1.1.1 Describe the functions and interactions of the main CPU components.
1. Units: Arithmetic Logic Unit (ALU), Control Unit (CU).
2. Registers: Instruction Register (IR), Program Counter (PC), Memory Address Register (MAR), Memory Data Register (MDR), Accumulator (AC).
3. Buses: Address, Data, and Control buses.
4. Processors: Single core, multi-core, and co-processors.

A1.1.2 Describe the role of a GPU.
1. Architecture: Specialized design for handling parallel tasks and complex computations.
2. Applications: Graphics rendering, video games, AI simulations, and machine learning.

A1.1.3 Explain the differences between the CPU and the GPU. (HL only)
1. Philosophy: Serial vs Parallel processing design.
2. Architecture: Differences in core structure, power efficiency, and memory access.

A1.1.4 Explain the purposes of different types of primary memory.
1. Types: RAM, ROM, Cache (L1, L2, L3), and Registers.
2. Performance: Cache hits vs cache misses and their impact on execution speed.

A1.1.5 Describe the fetch, decode and execute cycle.
1. Operations: Step-by-step CPU execution of machine language instructions.
2. Interaction: Role of buses, memory, and registers during the cycle.

A1.1.6 Pipelining in multi-core architectures. (HL only)
1. Stages: Overlapping fetch, decode, and execute stages to improve throughput.

A1.1.7 Secondary memory storage.
1. Internal: SSD, HDD, eMMC.
2. External: Optical drives, flash drives, NAS.

A1.1.8 Compression techniques.
1. Methods: Lossy vs Lossless compression.
2. Algorithms: Run-length encoding and transform coding.

A1.1.9 Cloud computing services.
1. Service Models: SaaS (Software), PaaS (Platform), IaaS (Infrastructure).`
        },
        {
          id: "A1.2",
          title: "Data Representation & Logic",
          content: `A1.2.1 Methods of representing data.
1. Integers: Conversion between binary, hexadecimal, and decimal systems.

A1.2.2 Binary storage mechanisms.
1. Formats: How characters, strings, integers, images, and audio are encoded in binary form.

A1.2.3 Logic gates.
1. Components: AND, OR, NOT, NAND, NOR, XOR, XNOR.
2. Roles: Fundamental binary computing operations.

A1.2.4 Truth tables.
1. Analysis: Using truth tables to predict outputs of complex logic circuits.
2. Simplification: Introduction to Boolean expressions and Karnaugh maps.

A1.2.5 Logic diagrams.
1. Construction: Connecting standard gate symbols to produce specific diagrammatic outputs.`
        },
        {
          id: "A1.3",
          title: "Operating Systems",
          content: `A1.3.1 Role of operating systems.
1. Abstraction: Managing hardware complexity and system resources.

A1.3.2 Functions of an OS.
1. Management: Memory, file system, device drivers, and security.
2. Interfaces: GUI and virtualization features.

A1.3.3 Scheduling approaches.
1. Algorithms: First-come first-served, Round Robin, Multilevel queue, and Priority scheduling.

A1.3.4 Polling and Interrupt handling.
1. Event Management: Comparing the efficiency of polling vs interrupt-driven systems.

A1.3.5 Multitasking and resource allocation. (HL only)
1. Challenges: Task scheduling, resource contention, and deadlocks.

A1.3.6 Control systems. (HL only)
1. Feedback: Open-loop vs closed-loop mechanisms.
2. Components: Sensors, actuators, and transducers.`
        },
        {
          id: "A1.4",
          title: "Translation (HL only)",
          content: `A1.4.1 Interpreters and Compilers.
1. Mechanics: Differences in translation timing, portability, and error detection.
2. Advanced: Just-In-Time (JIT) compilation and bytecode interpreters.`
        }
      ]
    },
    {
      id: "A.2",
      title: "Networks",
      description: "Principles of connectivity, architectures, data transmission, and network security.",
      theme: "A",
      iconName: "Network",
      sections: [
        {
          id: "A2.1",
          title: "Network Fundamentals",
          content: `A2.1.1 Purpose and characteristics of networks.
1. Types: LAN, WAN, PAN, and Virtual Private Networks (VPN).

A2.1.2 Modern digital infrastructures.
1. Examples: Internet, Cloud computing, Edge computing, and Distributed systems.

A2.1.3 Network devices.
1. Hardware: Gateways, firewalls, modems, NICs, routers, and switches.

A2.1.4 Network protocols.
1. Transport/Application: TCP, UDP, HTTP, HTTPS, and DHCP.

A2.1.5 TCP/IP Model layers. (HL only)
1. Hierarchy: Application, Transport, Internet, and Network Interface layers.`
        },
        {
          id: "A2.2",
          title: "Network Architecture",
          content: `A2.2.1 Network topologies.
1. Designs: Star, Mesh, and Hybrid topologies.
2. Factors: Speed, scalability, reliability, and cost.

A2.2.2 Function of servers. (HL only)
1. Roles: DNS, DHCP, File, Mail, and Web servers.

A2.2.3 Networking models.
1. Comparison: Client-server vs Peer-to-peer benefits and drawbacks.

A2.2.4 Network segmentation.
1. Efficiency: Subnetting and Virtual Local Area Networks (VLANs).`
        },
        {
          id: "A2.3",
          title: "Data Transmissions",
          content: `A2.3.1 IP Addressing.
1. Distinctions: IPv4 vs IPv6, Public vs Private, and Static vs Dynamic addressing.
2. NAT: The role of Network Address Translation.

A2.3.2 Media for transmission.
1. Wired: Fibre optic vs Twisted pair.
2. Wireless: Comparing bandwidth, range, and susceptibility to interference.

A2.3.3 Packet switching.
1. Process: Segmenting data into independently routed packets.

A2.3.4 Routing methods. (HL only)
1. Algorithms: Static vs Dynamic routing strategies and convergence.`
        },
        {
          id: "A2.4",
          title: "Network Security",
          content: `A2.4.1 Firewalls.
1. Logic: Filtering traffic based on whitelists, blacklists, and inspection rules.

A2.4.2 Network vulnerabilities. (HL only)
1. Threats: DDoS, Malware, Man-in-the-Middle (MitM), and Phishing.

A2.4.3 Countermeasures. (HL only)
1. Protection: IDS/IPS, MFA, SSL/TLS certificates, and VPNs.

A2.4.4 Encryption and Certificates.
1. Cryptography: Symmetric vs Asymmetric (Public/Private keys).`
        }
      ]
    },
    {
      id: "A.3",
      title: "Databases",
      description: "Relational database systems, design methodologies, SQL, and advanced data storage.",
      theme: "A",
      iconName: "Database",
      sections: [
        {
          id: "A3.1",
          title: "Database Fundamentals",
          content: `A3.1.1 Relational database features.
1. Benefits: Data integrity, consistency, and concurrency control.
2. Limitations: Scalability issues with "big data" and schema rigidity.`
        },
        {
          id: "A3.2",
          title: "Database Design",
          content: `A3.2.1 Database schemas.
1. Layers: Conceptual, logical, and physical schemas.

A3.2.2 Construct ERDs.
1. Modeling: Cardinality, modality, and relationship types between entities.

A3.2.3 Data types and consistency.
1. Validation: Importance of selecting appropriate data types.

A3.2.4 Normalization.
1. Forms: First (1NF), Second (2NF), and Third (3NF).
2. Issues: Handling partial and transitive dependencies.

A3.2.7 Denormalization.
1. Trade-offs: Improving read performance vs increasing redundancy.`
        },
        {
          id: "A3.3",
          title: "Database Programming",
          content: `A3.3.1 SQL language types.
1. DDL: Data Definition (creating tables).
2. DML: Data Manipulation (querying and updating data).

A3.3.2 SQL Queries.
1. Commands: SELECT, FROM, WHERE, JOIN, ORDER BY, GROUP BY.

A3.3.3 SQL Updates.
1. Actions: INSERT INTO, UPDATE SET, DELETE.

A3.3.4 Aggregate functions. (HL only)
1. Commands: SUM, AVG, COUNT, MIN, MAX.

A3.3.5 Views and Transactions. (HL only)
1. Integrity: ACID properties and Transaction Control (COMMIT, ROLLBACK).`
        },
        {
          id: "A3.4",
          title: "Alternative DBs (HL only)",
          content: `A3.4.1 Approach variations.
1. Models: NoSQL, Cloud, Spatial, and In-memory databases.

A3.4.2 Data warehouses.
1. Objectives: Subject-oriented, integrated, and time-variant data for analysis.

A3.4.3 OLAP and Data Mining.
1. Techniques: Classification, clustering, and association rule discovery.`
        }
      ]
    },
    {
      id: "A.4",
      title: "Machine Learning",
      description: "Learning paradigms, hardware requirements, preprocessing, neural networks, and ethics.",
      theme: "A",
      iconName: "BrainCircuit",
      sections: [
        {
          id: "A4.1",
          title: "ML Fundamentals",
          content: `A4.1.1 Types of Machine Learning.
1. Approaches: Supervised, Unsupervised, Reinforcement, and Transfer learning.

A4.1.2 Hardware requirements.
1. Infrastructure: ASICs, GPUs, TPUs, and High-Performance Computing (HPC).`
        },
        {
          id: "A4.2",
          title: "Data Preprocessing (HL only)",
          content: `A4.2.1 Data cleaning.
1. Quality: Handling outliers, missing data, and normalization.

A4.2.2 Feature selection and reduction.
1. Strategy: Filter, wrapper, and embedded methods.
2. Concepts: Curse of dimensionality.`
        },
        {
          id: "A4.3",
          title: "ML Approaches (HL only)",
          content: `A4.3.1 Linear Regression.
1. Predictors: Slope, intercept, and r-squared evaluation.

A4.3.2 Classification.
1. Algorithms: K-Nearest Neighbours (K-NN) and Decision Trees.

A4.3.4 Clustering and Association.
1. Pattern Discovery: Grouping data based on feature similarities.

A4.3.6 Reinforcement Learning.
1. Interaction: Reward-based learning and exploitation-exploration trade-offs.

A4.3.8 Neural Networks (ANN/CNN).
1. Structure: Perceptrons, Hidden layers, and Backpropagation.
2. CNNs: Learning spatial hierarchies in images.`
        },
        {
          id: "A4.4",
          title: "Ethical Considerations",
          content: `A4.4.1 Implications of ML.
1. Issues: Bias in training data, transparency, and accountability.

A4.4.2 Integration into life.
1. Impact: Privacy concerns and the societal influence of AI systems.`
        }
      ]
    }
  ],
  themeB: [
    {
      id: "B.1",
      title: "Computational Thinking",
      description: "Problem specification, core concepts, and algorithmic tracing.",
      theme: "B",
      iconName: "Lightbulb",
      sections: [
        {
          id: "B1.1",
          title: "CT Approaches",
          content: `B1.1.1 Problem Specification.
1. Requirements: Constraints, inputs, outputs, and evaluation criteria.

B1.1.2 Concepts of CT.
1. Pillars: Abstraction, algorithmic design, decomposition, and pattern recognition.

B1.1.4 Trace flowcharts.
1. Symbols: Using standard flowchart symbols to map program logic.`
        }
      ]
    },
    {
      id: "B.2",
      title: "Programming",
      description: "Foundational programming, data structures, algorithm efficiency, and file processing.",
      theme: "B",
      iconName: "Terminal",
      sections: [
        {
          id: "B2.1",
          title: "Programming Fundamentals",
          content: `B2.1.1 Data types.
1. Essentials: Boolean, char, decimal, integer, and string.

B2.1.3 Exception handling.
1. Failures: Try/catch (Java) and try/except (Python) constructs.

B2.1.4 Debugging.
1. Methods: Trace tables, breakpoints, and print statements.`
        },
        {
          id: "B2.2",
          title: "Data Structures",
          content: `B2.2.1 Static vs Dynamic structures.
1. Mechanisms: Memory allocation and resizing differences.

B2.2.3 Stacks and Queues.
1. LIFO: Stack operations (push, pop, peek).
2. FIFO: Queue operations (enqueue, dequeue).`
        },
        {
          id: "B2.3",
          title: "Programming Constructs",
          content: `B2.3.1 Sequence and Selection.
1. Logic: Implementing if/elif/else structures correctly.

B2.3.3 Looping structures.
1. Iteration: Counted loops vs conditional loops.

B2.3.4 Modularization.
1. Functions: Reusable blocks, parameter passing, and scope.`
        },
        {
          id: "B2.4",
          title: "Programming Algorithms",
          content: `B2.4.1 Big O Notation.
1. Complexity: Analyzing time and space efficiency and scalability.

B2.4.2 Search algorithms.
1. Comparison: Linear search vs Binary search.

B2.4.3 Sort algorithms.
1. Comparison: Bubble sort vs Selection sort.

B2.4.4 Recursion. (HL only)
1. Logic: Base cases, recursive calls, and stack usage.`
        },
        {
          id: "B2.5",
          title: "File Processing",
          content: `B2.5.1 File operations.
1. Handling: Reading, writing, and appending to sequential text files.`
        }
      ]
    },
    {
      id: "B.3",
      title: "Object-Oriented Programming",
      description: "Class design, encapsulation, inheritance, polymorphism, and design patterns.",
      theme: "B",
      iconName: "Box",
      sections: [
        {
          id: "B3.1",
          title: "Single Class OOP",
          content: `B3.1.1 OOP Fundamentals.
1. Principles: Classes, objects, inheritance, encapsulation, and polymorphism.

B3.1.2 Class Design.
1. UML: Representing relationships and methods diagrammatically.

B3.1.4 Instantiation.
1. Constructors: Initializing object states.`
        },
        {
          id: "B3.2",
          title: "Multi-Class (HL only)",
          content: `B3.2.1 Inheritance and reusability.
1. Hierarchy: Parent and child class interactions.

B3.2.2 Polymorphism.
1. Behavior: Method overriding and dynamic polymorphic behavior.

B3.2.4 Composition and Aggregation.
1. Relationships: Tight coupling vs independent subcomponents.

B3.2.5 Design Patterns.
1. Examples: Singleton, Factory, and Observer patterns.`
        }
      ]
    },
    {
      id: "B.4",
      title: "Abstract Data Types (HL only)",
      description: "Advanced linked lists, binary trees, sets, and hash table mechanics.",
      theme: "B",
      iconName: "Layers",
      sections: [
        {
          id: "B4.1",
          title: "Fundamentals of ADTs",
          content: `B4.1.2 Linked lists.
1. Types: Singly, doubly, and circular lists.

B4.1.4 Binary Search Trees (BST).
1. Operations: Insertion, deletion, and traversal (In/Pre/Post-order).

B4.1.5 Sets and Hash Tables.
1. Mechanisms: Hashing functions, collision resolution, and load factors.`
        }
      ]
    }
  ]
};
