# Goals

A deeper understanding of networking, virtual machines and how they interconnect, hands-on experience with server installations, as well as studying to obtain my CCNA/Finish up my CompTIA Network+ certifications. As well as updating my progress and learning thus far. Keep adding hardware.

## Networking

## Pi-Hole (VPN)

I plan on installing a VPN on my L3 device and setting up an OpenVPN installation for now to get remote access to the environment. If not, I have another device I can remote to, which can view everything on my network, including the server dashboard.

### Layer 3

The router I have now is a NightHawk AX-750, which connects to my gateway through a modem, with AP mode, but I have been running into small issues with the witherless network but have made a lot of  changes.

### Cisco 2960s-24-TD-L

The Cisco Catalyst 2960s is a managed switch that provides improved ease of use, highly secure business operations, improved sustainability, and a borderless network experience. It includes 24 Gigabit Ethernet ports, with options for PoE+ support, and two SFP uplink interfaces with two SFP+ transceivers. One of those transceivers takes in The WAN connection, relays to the Cisco switch. It is nice being able to access/configure from anywhere, but a plan right now is to finish the configuration Cisco of my switch.

### Learning

I plan on configuring the switch with effective internet and digging deeper into the CLI commands all around the home. Separation of network operations which of which supports VLAN tags coming from the from the Layer 2 with a DHCP client as well.

## Intel Server Specs 4GDS

Intel R1208GL4DS 1u Server - $260
S2600GL Motherboard
2 x E5-2670 v2 Ivy Bridge
128GB DDR3-1333 ECC (6 x 16GB, 4 x 8GB)
2 x 480GB Samsung PM883 SSD
4 x 900GB Seagate SAS 10k 2.5" HDD
LSI 2308 (RMS25JB080) HBA flashed to IT mode
RMM Lite remote management (allows remote media, power control, KVM.)
2 x 10GBase-SR 2x SFP+ NIC

## Virtualization Setup

I am planning on a going with a bare metal install of a free VMWare ESXI bare metal hypervisor as , which comes with a trial as a part of a part of VSpehere to manager clusters, free for 60 days, or opt in to the .

![RoughOutline](/https://docs.vmware.com/en/VMware-vSphere/images/GUID-5EB66614-1EE8-4F39-8C8B-1E97EEE76791-high.png")
