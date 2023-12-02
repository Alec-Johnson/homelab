# Goals

A deeper understanding of networking, virtual machines, clustering and how they interconnect. I also am enjoying the process with hands-on experience with server installations, as well as studying to obtain my CCNA/Finish up my CompTIA Network+ certifications using the Cisco CLI on my switch and router soon enough. As well as updating my progress and learning thus far. After playing around with Microsoft Azure and other similar resources in the cloud in various situations,

## Networking

## Pi-Hole (VPN)

I plan on installing a VPN on my L3 device and setting up an OpenVPN installation for now to get remote access to the environment. If not, I have another device I can remote to, which can view everything on my network, including the server dashboard as it is on the same LAN/Subnet. Access to my resources from anywhere securely is the goal.

### Layer 3

The router I have now is a NightHawk AX-750, which connects to my gateway through a modem, with another in AP mode, which has issues of course, but I have been running into some issues with it affecting the household connection so I am planning on a complete overhaul and designing it so others outside the LAN securely connect as well as the connections within LAN itself. Example could be keeping all internal devices on the LAN on the sa

### Cisco 2960s-24-TD-L

The Cisco Catalyst 2960s is a managed switch that provides ease of use through the CLI or web GUI when given an IP. It includes 24 Gigabit Ethernet ports, with options for PoE+ support, and two SFP uplink interfaces with two SFP+ transceivers. One of those transceivers takes in the WAN connection. It is nice being able to access/configure from anywhere on the web or, but a plan right now is to finish the configuration Cisco of my switch.

### Learning

I plan on configuring the switch with effective internet still in tact and digging deeper into the Cisco CLI. Separation or grouping of network operations going on within the LAN or incoming connections as well with the use of VLAN if I need to route from a L3 device, which luckily the router I have supports VLAN tagging(routing) coming from the from the Layer 2 switch.

## Intel Server Specs

Intel R1208GL4DS 1u Server
S2600GL Motherboard
2 x E5-2670 v2 Ivy Bridge
128GB DDR3-1333 ECC (6 x 16GB, 4 x 8GB)
2 x 480GB Samsung PM883 SSD
4 x 900GB Seagate SAS 10k 2.5" HDD
LSI 2308 (RMS25JB080) HBA flashed to IT mode
RMM Lite remote management (allows remote media, power control, KVM.)
2 x 10GBase-SR 2x SFP+ NIC

## Virtualization Setup

I am planning on a going with a bare metal install of a free VMWare ESXI bare metal hypervisor as , which comes with a trial as a part of a part of VSpehere to manager clusters, free for 60 days, or opt in to the free plan (less to mess with) for now and see how it goes!

[Diagram]: https://docs.vmware.com/en/VMware-vSphere/images/GUID-5EB66614-1EE8-4F39-8C8B-1E97EEE76791-high.png
![Diagram]
